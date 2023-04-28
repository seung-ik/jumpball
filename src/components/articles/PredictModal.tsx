import React, { useState, useMemo } from 'react';
import axios from 'axios';
import { ethers } from 'ethers';
import { format } from 'date-fns';
import styled from 'styled-components';
import { useAppSelector } from '@store/index';
import { getJumpBallContract } from '@utils/wallet';
import { calcPredictDividedRate } from '@utils/calc';
import { TRANS_ORANGE, SECONDARY_COLOR, TRANS_GREEN, PRIMARY_COLOR } from '@constants/style';
import InfoText from '@atoms/InfoText';
import { useMutation, useQueryClient } from 'react-query';
import { postBettingSuccessCallback } from '@utils/fetch';

interface Props {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  isHome: boolean;
  homeTotal: number;
  awayTotal: number;
}

const PredictModal: React.FC<Props> = ({ setIsShowModal, data, isHome, homeTotal, awayTotal }) => {
  const userInfo = useAppSelector((state) => state.user);
  const [value, setValue] = useState<string>('');
  const queryClient = useQueryClient();
  const { mutate } = useMutation(postBetting, {
    onSuccess: () => postBettingSuccessCallback(queryClient, data, isHome, value),
  });

  async function postBetting(_params: any) {
    return await axios.post('/api/hello', _params);
  }

  const selectedData = isHome ? data.home : data.away;

  const dividendRate = useMemo(() => {
    if (!value) return 0;
    return calcPredictDividedRate(isHome, homeTotal, awayTotal, Number(value));
  }, [homeTotal, awayTotal, value, isHome]);

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputVal = event.target.value;
    if (!/^[\d.]*$/.test(inputVal)) return;
    if (inputVal.split('.').length > 2) return;
    setValue(inputVal);
  };

  const onClickBetting = async () => {
    const Contract = await getJumpBallContract();
    const _date = new Date(data.date).getTime() / 1000;
    const gameName = data.gameNote || 'Regular Season';
    const homeTeam = data.home.team.displayName;
    const awayTeam = data.away.team.displayName;

    try {
      const tx: any = await Contract.betting(
        `${data.type}-${data.id}`,
        _date,
        gameName,
        homeTeam,
        awayTeam,
        isHome,
        {
          value: ethers.parseEther(value),
          gasLimit: 300000,
        },
      );
      const receipt = await tx.wait();

      const params = {
        address: userInfo.address,
        gameDate: new Date(data.date),
        gameId: `${data.type}-${data.id}`,
        home: homeTeam,
        away: awayTeam,
        pick: isHome,
        value: value,
        bettingHash: receipt.hash,
      };
      mutate(params);
    } catch (err) {
      console.error(err);
    } finally {
      onClickCloseModal();
    }
  };

  const onClickCloseModal = () => {
    setIsShowModal(false);
    setValue('');
  };

  return (
    <ModalLayout onClick={onClickCloseModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Section>
          <span className="title">참여수량 입력</span>
          <InputWrapper>
            <input type="text" value={value} onChange={onChangeInput} />
            <button>최소</button>
            <button>절반</button>
            <button>최대</button>
          </InputWrapper>
        </Section>
        <Section>
          <span className="title">참여정보 확인</span>
          <InfoWrapper>
            <InfoText title="Id" text={`${data.type}-${data.id}`} />
            <InfoText title="Date" text={format(new Date(data.date), 'MM-dd hh:mm')} />
            <InfoText title="Team" text={selectedData.team.displayName} />
            <InfoText title="HomeAway" text={selectedData.homeAway} />
            {value ? (
              <InfoText title="참여수량" text={`${value} Matic`} />
            ) : (
              <div>참여수량을 입력하세요.</div>
            )}
            <InfoText title="승리시 예상 배당률" text={`${dividendRate.toFixed(2)} 배`} />
          </InfoWrapper>
        </Section>

        <BtnWrapper>
          <Button onClick={onClickBetting}>확인</Button>
          <Button onClick={onClickCloseModal}>취소</Button>
        </BtnWrapper>
      </Modal>
    </ModalLayout>
  );
};

export default PredictModal;

const ModalLayout = styled('div')`
  width: 100vw;
  height: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: rgba(189, 190, 210, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled('div')`
  border: 2px solid ${SECONDARY_COLOR};
  background-color: white;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 12px;

  & .title {
    font-size: 24px;
    font-weight: 700;
    display: block;
    margin-bottom: 16px;
    color: black;
  }

  & .right {
    color: black;
    font-weight: 600;
  }
`;

const Section = styled('section')`
  font-size: 20px;
  margin-bottom: 24px;
`;

const InputWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;

  & input {
    background: ${TRANS_ORANGE};
    outline: none;
    border: none;
    font-size: 20px;
    padding: 8px 12px;
    border-radius: 8px;
    color: gray;
  }

  & button {
    border: 2px solid ${TRANS_GREEN};
    font-size: 16px;
    border-radius: 4px;
    padding: 4px 8px;
    transition: all 0.2s;
  }

  & button:hover {
    background-color: ${PRIMARY_COLOR};
    color: white;
  }
`;

const InfoWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  color: gray;
  gap: 12px;
`;

const BtnWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Button = styled('button')`
  border: 2px solid ${TRANS_GREEN};
  padding: 6px 20px;
  font-size: 24px;
  border-radius: 8px;
  transition: all 0.3s;

  &:hover {
    background-color: ${PRIMARY_COLOR};
    color: white;
  }
`;
