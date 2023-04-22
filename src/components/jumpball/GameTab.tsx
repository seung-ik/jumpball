import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { NBAEventType } from '@pages/jumpball';
import NoGames from '@components/jumpball/NoGames';
import GameItem from '@components/jumpball/GameItem';
import { PRIMARY_COLOR } from '@constants/style';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';

interface Props {
  gameList: NBAEventType[];
  date: Date;
  handleDate: (_type: 'today' | 'add' | 'sub') => void;
}

const GameTab: React.FC<Props> = ({ gameList, date, handleDate }) => {
  return (
    <>
      <Row>
        <button onClick={() => handleDate('today')}>오늘의 경기일정</button>
        <DateWrapper>
          <BsArrowLeftSquare size={32} onClick={() => handleDate('sub')} />
          <span className="date-text">{format(date, 'MM / dd')}</span>
          <BsArrowRightSquare size={32} onClick={() => handleDate('add')} />
        </DateWrapper>
      </Row>
      {gameList.length === 0 && <NoGames />}
      {gameList.map((game: any) => (
        <GameItem key={game.id} {...game} />
      ))}
    </>
  );
};

export default GameTab;

const DateWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .date-text {
    font-size: 24px;
    min-width: 120px;
    text-align: center;
  }
`;

const Row = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  & > button {
    background: ${PRIMARY_COLOR};
    color: white;
    font-size: 20px;
    padding: 8px 20px;
    border-radius: 12px;
  }

  & > button:hover {
    opacity: 0.9;
  }

  & > button:active {
    transform: scale(0.98);
  }
`;
