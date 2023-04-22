import React, { useEffect, useState } from 'react';
import { addDays, format, subDays } from 'date-fns';
import styled from 'styled-components';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';
import GameItem from '@components/jumpball/GameItem';
import { PRIMARY_COLOR, TRANS_GREEN, MAX_WIDTH, SECONDARY_COLOR } from '@constants/style';
import { fetchScoreBoardByDate } from '@utils/fetch';
import TabButton from '@atoms/TabButton';
import NoGames from '@components/jumpball/NoGames';

export interface NBAEventType {
  id: string;
  completed: boolean;
  name: string;
  shortName: string;
  homeTeam: any;
  awayTeam: any;
  location: string;
  date: string;
}

export type JumpBallTab = 'NBA' | 'MLB' | 'MY';

const JumpBall = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [tab, setTab] = useState<JumpBallTab>('NBA');
  const [gameList, setGameList] = useState<NBAEventType[]>([]);

  const onClickTodayDate = () => setDate(new Date());
  const onClickSubDate = () => setDate(subDays(date, 1));
  const onClickAddDate = () => setDate(addDays(date, 1));

  const handleTab = (_value: JumpBallTab) => setTab(_value);

  useEffect(() => {
    const getGameList = async () => {
      const gameList = await fetchScoreBoardByDate(date);
      setGameList(gameList);
    };
    getGameList();
  }, [date]);

  return (
    <Layout>
      <Header>
        <TabButton tab={tab} handleTab={handleTab} name="NBA" value="NBA" />
        <TabButton tab={tab} handleTab={handleTab} name="MLB" value="MLB" />
        <TabButton tab={tab} handleTab={handleTab} name="나의 예측" value="MY" />
      </Header>
      <Body>
        <Row>
          <button onClick={onClickTodayDate}>오늘의 경기일정</button>
          <DateWrapper>
            <BsArrowLeftSquare size={32} onClick={onClickSubDate} />
            <span className="date-text">{format(date, 'MM / dd')}</span>
            <BsArrowRightSquare size={32} onClick={onClickAddDate} />
          </DateWrapper>
        </Row>
        {gameList.length === 0 && <NoGames />}
        {gameList.map((game: any) => (
          <GameItem key={game.id} {...game} />
        ))}
      </Body>
    </Layout>
  );
};

export default JumpBall;

const Layout = styled('div')`
  border-left: 1px solid ${TRANS_GREEN};
  border-right: 1px solid ${TRANS_GREEN};
  max-width: ${MAX_WIDTH}px;
  display: flex;
  flex-direction: column;
  margin: auto;
  min-height: 100vh;
  padding: 0 4px;
`;

const Header = styled('header')`
  display: flex;
  justify-content: space-between;
  height: 72px;
  gap: 4px;

  & > button {
    flex: 1;
    border-bottom: 4px solid ${TRANS_GREEN};
    font-size: 24px;
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 6px;
  }

  & > button.active {
    border-bottom: 4px solid ${PRIMARY_COLOR};
    color: green;
  }
`;

const Body = styled('section')`
  margin-top: 80px;
  margin-bottom: 140px;
  padding: 0 24px;
`;

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
