import React from 'react';
import { format } from 'date-fns';
import styled, { css } from 'styled-components';
import { useQuery } from 'react-query';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';
import { useAppSelector } from '@store/index';
import NoGames from '@components/jumpball/NoGames';
import GameItem from '@components/jumpball/GameItem';
import { PRIMARY_COLOR, TRANS_GREEN } from '@constants/style';
import { getGameList } from '@utils/fetch';

interface Props {
  handleDate: (_type: 'today' | 'add' | 'sub') => void;
}

const GameTab: React.FC<Props> = ({ handleDate }) => {
  const { date, tab } = useAppSelector((state) => state.page);
  const { data: gameList } = useQuery(['game_list_key', date, tab], getGameList);
  const isToday = format(new Date(date), 'yyMMdd') === format(new Date(), 'yyMMdd');

  return (
    <>
      <Row>
        <Button onClick={() => handleDate('today')} active={isToday}>
          오늘의 경기일정
        </Button>
        <DateWrapper>
          <BsArrowLeftSquare size={32} onClick={() => handleDate('sub')} />
          <span className="date-text">{format(date, 'MM / dd')}</span>
          <BsArrowRightSquare size={32} onClick={() => handleDate('add')} />
        </DateWrapper>
      </Row>
      {gameList?.length === 0 && <NoGames />}
      {gameList?.map((game: any) => (
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
`;

const Button = styled('button')<{ active: boolean }>`
  background: ${PRIMARY_COLOR};
  color: white;
  font-size: 20px;
  padding: 8px 20px;
  border-radius: 12px;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }

  ${({ active }) =>
    !active &&
    css`
      border: 2px solid ${PRIMARY_COLOR};
      background-color: white;
      color: ${PRIMARY_COLOR};
      font-weight: 500;
    `}
`;
