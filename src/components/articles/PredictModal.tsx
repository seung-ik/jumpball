import React, { useState } from 'react';

interface Props {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PredictModal: React.FC<Props> = ({ setIsShowModal }) => {
  const [value, setValue] = useState<string>('');

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputVal = event.target.value;
    if (!/^[\d.]*$/.test(inputVal)) return;
    if (inputVal.split('.').length > 2) return;
    setValue(inputVal);
  };

  const onClickBetting = () => {
    alert('해야됨');
  };

  return (
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
          <input type="text" value={value} onChange={onChangeInput} />
          <button>max</button>
          <button>half</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
          <button onClick={onClickBetting}>예측하기</button>
        </div>
      </div>
    </div>
  );
};

export default PredictModal;
