import React, { useEffect, useState } from 'react';
import { addDays, subDays } from 'date-fns';
import styled from 'styled-components';
import MyTab from '@components/jumpball/MyTab';
import GameTab from '@components/jumpball/GameTab';
import TabButton from '@atoms/TabButton';
import { fetchScoreBoardByDate } from '@utils/fetch';
import { PRIMARY_COLOR, TRANS_GREEN, MAX_WIDTH, SECONDARY_COLOR } from '@constants/style';

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

  const handleDate = (_type: 'today' | 'add' | 'sub') => {
    if (_type === 'today') setDate(new Date());
    if (_type === 'add') setDate(addDays(date, 1));
    if (_type === 'sub') setDate(subDays(date, 1));
  };

  const handleTab = (_value: JumpBallTab) => {
    if (_value !== tab) setDate(new Date());
    setTab(_value);
  };

  useEffect(() => {
    const getGameList = async () => {
      if (tab !== 'MY') {
        const gameList = await fetchScoreBoardByDate(date, tab);
        setGameList(gameList);
      } else {
        setGameList([]);
      }
    };
    getGameList();
  }, [date, tab]);

  return (
    <Layout>
      <Header>
        <TabButton tab={tab} handleTab={handleTab} name="NBA" value="NBA" />
        <TabButton tab={tab} handleTab={handleTab} name="MLB" value="MLB" />
        <TabButton tab={tab} handleTab={handleTab} name="나의 예측" value="MY" />
      </Header>
      <Body>
        {tab === 'MY' ? (
          <MyTab />
        ) : (
          <GameTab gameList={gameList} date={date} handleDate={handleDate} />
        )}
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
