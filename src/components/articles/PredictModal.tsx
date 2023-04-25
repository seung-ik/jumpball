import { TRANS_ORANGE, SECONDARY_COLOR, TRANS_GREEN } from '@constants/style';
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { getJumpBallContract, getSigner } from '@utils/wallet';
import { ethers } from 'ethers';

interface Props {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  isHome: boolean;
  homeTotal: number;
  awayTotal: number;
}

const PredictModal: React.FC<Props> = ({ setIsShowModal, data, isHome, homeTotal, awayTotal }) => {
  const [value, setValue] = useState<string>('');
  console.log(data);
  const selectedData = isHome ? data.home : data.away;
  const dividendRate = useMemo(() => {
    if (!value) return 0;
    if (isHome) {
      return (
        ((homeTotal + awayTotal + Number(value)) * (Number(value) / (homeTotal + Number(value)))) /
        Number(value)
      );
    } else {
      return (
        ((homeTotal + awayTotal + Number(value)) * (Number(value) / (awayTotal + Number(value)))) /
        Number(value)
      );
    }
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

    const result = await Contract.betting(
      `${data.type}-${data.id}`,
      _date,
      gameName,
      data.home.team.displayName,
      data.away.team.displayName,
      isHome,
      {
        value: ethers.parseEther('0.003'),
        gasLimit: 300000,
      },
    );
    console.log(result);
    // Contract.getGameInfo('NBA-401541184').then(console.log);
    // Contract.getMyBetInfo('NBA-401541184').then(console.log);
  };

  const onClickCloseModal = () => {
    setIsShowModal(false);
    setValue('');
  };

  return (
    <ModalLayout onClick={onClickCloseModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <div style={{ marginBottom: '24px' }}>
          <div className="title">참여수량 입력</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="text"
              value={value}
              onChange={onChangeInput}
              style={{
                background: `${TRANS_ORANGE}`,
                outline: 'none',
                border: 'none',
                fontSize: '20px',
                padding: '8px 12px',
                borderRadius: '8px',
                color: 'gray',
              }}
            />
            <button
              style={{
                border: `2px solid ${TRANS_GREEN}`,
                fontSize: '16px',
                borderRadius: '4px',
                padding: '4px 8px',
              }}
            >
              절반
            </button>
            <button
              style={{
                border: `2px solid ${TRANS_GREEN}`,
                fontSize: '16px',
                borderRadius: '4px',
                padding: '4px 8px',
              }}
            >
              최대
            </button>
          </div>
        </div>
        <div style={{ fontSize: '20px' }}>
          <div className="title">참여정보 확인</div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'gray', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Type:</span>
              <span className="right">{data.type}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Id :</span>
              <span className="right">{data.id}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Date: </span>
              <span className="right">{format(new Date(data.date), 'MM-dd hh:mm')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Team : </span>
              <span className="right">{selectedData.team.displayName}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>HomeAway : </span>
              <span className="right">{selectedData.homeAway}</span>
            </div>
            {value ? (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>참여수량 : </span>
                <span className="right">{value} matic</span>
              </div>
            ) : (
              <div>참여수량을 입력하세요.</div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>승리시 예상 배당률 : </span>
              <span className="right">{dividendRate.toFixed(2)}배</span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
            gap: '8px',
          }}
        >
          <button
            style={{
              border: `2px solid ${TRANS_GREEN}`,
              padding: '6px 20px',
              fontSize: '24px',
              borderRadius: '8px',
            }}
            onClick={onClickBetting}
          >
            확인
          </button>
          <button
            style={{
              border: `2px solid ${TRANS_GREEN}`,
              padding: '6px 20px',
              fontSize: '24px',
              borderRadius: '8px',
            }}
            onClick={onClickBetting}
          >
            취소
          </button>
        </div>
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
    margin-bottom: 12px;
    color: black;
  }

  & .right {
    color: black;
    font-weight: 600;
  }
`;
