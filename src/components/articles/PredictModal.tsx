import React, { useState, useMemo } from 'react';
import { ethers } from 'ethers';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';
import InfoText from '@atoms/InfoText';
import { useAppSelector } from '@store/index';
import { getJumpBallContract } from '@utils/wallet';
import { calcPredictDividedRate } from '@utils/calc';
import LoadingSpinner from '@components/atoms/Loading';
import useNumInputChange from '@/hook/useNumInputChange';
import { postBetting, postBettingSuccessCallback } from '@utils/fetch';
import { TRANS_ORANGE, SECONDARY_COLOR, TRANS_GREEN, PRIMARY_COLOR } from '@constants/style';

interface Props {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  isHome: boolean;
  homeTotal: number;
  awayTotal: number;
}

const PredictModal: React.FC<Props> = ({ setIsShowModal, data, isHome, homeTotal, awayTotal }) => {
  const userInfo = useAppSelector((state) => state.user);

  const [value, setValue, onChange] = useNumInputChange('0.001');
  const [isLoading, setIsLoading] = useState(false);

  const maxValue = (Number(userInfo.token) * 0.97).toFixed(3);
  const isExceed = value > maxValue;
  const selectedData = isHome ? data.home : data.away;

  const queryClient = useQueryClient();
  const { mutate } = useMutation(postBetting, {
    onSuccess: () => postBettingSuccessCallback(queryClient, data, isHome, value),
  });

  const dividendRate = useMemo(() => {
    if (!Number(value)) return 0;
    return calcPredictDividedRate(isHome, homeTotal, awayTotal, Number(value));
  }, [homeTotal, awayTotal, value, isHome]);
  const onClickCloseModal = () => {
    setIsShowModal(false);
    setValue('');
  };

  const onClickBetting = async () => {
    const Contract = await getJumpBallContract();
    const _date = new Date(data.date).getTime() / 1000;
    const gameName = data.gameNote || 'Regular Season';
    const homeTeam = data.home.team.displayName;
    const awayTeam = data.away.team.displayName;
    setIsLoading(true);

    try {
      const tx: any = await Contract.betting(
        `${data.type}-${data.id}`, // type and id
        _date, // date
        gameName, // name
        homeTeam, // homeTeam name
        awayTeam, // awayTeam name
        isHome, // my betting
        {
          value: ethers.parseEther(String(value)),
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
      toast.success('transaction success !', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } catch (err) {
      console.error(err);
      toast.error('transaction fail !', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } finally {
      setIsLoading(false);
      onClickCloseModal();
    }
  };

  return (
    <ModalLayout onClick={onClickCloseModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Section>
          <span className="title">참여수량 입력</span>
          <InputWrapper>
            <input type="text" value={value} onChange={onChange} />
            <button onClick={() => setValue('0.001')}>최소</button>
            <button onClick={() => setValue((Number(userInfo.token) * 0.5).toFixed(3))}>
              절반
            </button>
            <button onClick={() => setValue((Number(userInfo.token) * 0.95).toFixed(3))}>
              최대
            </button>
          </InputWrapper>
        </Section>
        <Section>
          <span className="title">참여정보 확인</span>
          <InfoWrapper>
            <InfoText title="Id" text={`${data.type}-${data.id}`} />
            <InfoText title="Date" text={format(new Date(data.date), 'MM-dd hh:mm')} />
            <InfoText title="Team" text={selectedData.team.displayName} />
            <InfoText title="HomeAway" text={selectedData.homeAway} />
            <InfoText title="승리시 예상 배당률" text={`${dividendRate.toFixed(2)} 배`} />
            {Number(value) && !isExceed ? (
              <InfoText title="참여수량" text={`${Number(value)} Matic`} />
            ) : (
              <div style={{ textAlign: 'right', color: `${SECONDARY_COLOR}` }}>
                {isExceed ? '가능한 수량을 초과하였습니다.' : '참여수량을 입력하세요.'}
              </div>
            )}
          </InfoWrapper>
        </Section>

        <BtnWrapper>
          <Button onClick={onClickBetting} disabled={isExceed || !Number(value)}>
            확인
          </Button>
          <Button onClick={onClickCloseModal}>취소</Button>
        </BtnWrapper>
        {isLoading && (
          <LoadingWrapper>
            <LoadingSpinner />
          </LoadingWrapper>
        )}
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
  border: 2px solid ${PRIMARY_COLOR};
  background-color: white;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 12px;
  position: relative;

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

  &:disabled {
    background-color: gray;
    color: rgb(187, 190, 202);
    cursor: default;
  }
`;

const LoadingWrapper = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${TRANS_GREEN};
`;
