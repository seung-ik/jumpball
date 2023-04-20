import React, { useState } from 'react';
import { useAppSelector } from '@store/index';

interface Props {
  isHome: boolean;
}

const GamePrediction: React.FC<Props> = ({ isHome }) => {
  const homeTotal = 1000;
  const awayTotal = 2000;
  const homeDivideRate = (homeTotal + awayTotal) / homeTotal;
  const awayDivideRate = (homeTotal + awayTotal) / awayTotal;
  const userInfo = useAppSelector((state) => state.user);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const onClickBetting = () => {
    if (!userInfo.address) {
      alert('지갑연결이후에 사용가능합니다.');
      return;
    }
    setIsShowModal(true);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputVal = event.target.value;
    if (!/^[\d.]*$/.test(inputVal)) return;
    if (inputVal.split('.').length > 2) return;
    setValue(inputVal);
  };

  return (
    <>
      <section style={{ display: 'flex', border: '1px solid black', width: '100%' }}>
        <div
          style={{
            flex: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>Total balance</div>
          <div>{isHome ? homeTotal : awayTotal}</div>
        </div>
        <div
          style={{
            flex: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>배당률</div>
          <div>{isHome ? homeDivideRate : awayDivideRate}</div>
        </div>
        <button style={{ flex: 1 }} onClick={onClickBetting}>
          참여하기
        </button>
      </section>
      {isShowModal && (
        <div
          style={{
            border: '1px solid black',
            width: '100vw',
            height: '100%',
            position: 'fixed',
            bottom: 0,
            left: 0,
            background: 'rgba(189, 190, 210, 0.25)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => {
            setIsShowModal(false);
            setValue('');
          }}
        >
          <div
            style={{
              width: '330px',
              height: '240px',
              border: '2px solid red',
              backgroundColor: 'white',
              opacity: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ flex: 3 }}>
              <div>참여수량 입력</div>
              <input type="text" value={value} onChange={handleChange} />
              <button>max</button>
              <button>half</button>
            </div>
            <div
              style={{ display: 'flex', justifyContent: 'center', flex: 1, alignItems: 'center' }}
            >
              <button onClick={onClickBetting}>예측하기</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GamePrediction;
