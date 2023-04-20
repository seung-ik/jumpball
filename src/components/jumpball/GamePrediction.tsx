import React from 'react';

interface Props {
  isHome: boolean;
}

const GamePrediction: React.FC<Props> = ({ isHome }) => {
  const homeTotal = 1000;
  const awayTotal = 2000;
  const homeDivideRate = (homeTotal + awayTotal) / homeTotal;
  const awayDivideRate = (homeTotal + awayTotal) / awayTotal;

  return (
    <section>
      <div>Total balance</div>
      <div>{isHome ? homeTotal : awayTotal}</div>
      <div>배당률</div>
      <div>{isHome ? homeDivideRate : awayDivideRate}</div>
      <button>참여하기</button>
    </section>
  );
};

export default GamePrediction;
