import { JumpBallTab } from '@store/pageSlice';
import React from 'react';
import { BiBaseball, BiBasketball } from 'react-icons/bi';
import { TfiWrite } from 'react-icons/tfi';

interface Props {
  tab: JumpBallTab;
  handleTab: (value: JumpBallTab) => void;
  name: string;
  value: JumpBallTab;
}

const TabButton: React.FC<Props> = ({ tab, handleTab, name, value }) => {
  const Icon = (_value: JumpBallTab) => {
    if (_value === 'NBA') return <BiBasketball size={32} />;
    if (_value === 'MLB') return <BiBaseball size={32} />;
    if (_value === 'MY') return <TfiWrite size={28} />;
  };

  return (
    <button className={tab === value ? 'active' : ''} onClick={() => handleTab(value)}>
      <span style={{ marginTop: '4px', marginRight: '2px' }}>{Icon(value)}</span>
      <span>{name}</span>
    </button>
  );
};

export default TabButton;
