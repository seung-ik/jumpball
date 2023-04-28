import React, { useEffect } from 'react';
import styled from 'styled-components';
import MyTab from '@components/jumpball/MyTab';
import GameTab from '@components/jumpball/GameTab';
import TabButton from '@atoms/TabButton';
import { PRIMARY_COLOR, TRANS_GREEN, MAX_WIDTH } from '@constants/style';
import { useAppDispatch, useAppSelector } from '@store/index';
import pageSlice, { JumpBallTab } from '@store/pageSlice';
import { fetchUserBettingList } from '@store/userSlice';

export interface NBAEventType {
  id: string;
  completed: boolean;
  name: string;
  shortName: string;
  homeTeam: any;
  awayTeam: any;
  location: string;
  date: string;
  type: 'NBA' | 'MLB';
}

const JumpBall = () => {
  const { tab } = useAppSelector((state) => state.page);
  const { address } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleDate = (_type: 'today' | 'add' | 'sub') => {
    if (_type === 'today') dispatch(pageSlice.actions.setDate(new Date()));
    if (_type === 'add') dispatch(pageSlice.actions.addDate());
    if (_type === 'sub') dispatch(pageSlice.actions.subDate());
  };

  const handleTab = (_value: JumpBallTab) => {
    if (!address && _value === 'MY') {
      alert('지갑연결후 사용할수 있습니다.');
    } else {
      dispatch(pageSlice.actions.setTab(_value));
    }
  };

  useEffect(() => {
    if (address) {
      dispatch(fetchUserBettingList());
    }
  }, [address]);

  return (
    <Layout>
      <Header>
        <TabButton tab={tab} handleTab={handleTab} name="NBA" value="NBA" />
        <TabButton tab={tab} handleTab={handleTab} name="MLB" value="MLB" />
        <TabButton tab={tab} handleTab={handleTab} name="나의 예측" value="MY" />
      </Header>
      <Body>{tab === 'MY' ? <MyTab /> : <GameTab handleDate={handleDate} />}</Body>
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
    color: ${PRIMARY_COLOR};
  }
`;

const Body = styled('section')`
  margin-top: 80px;
  margin-bottom: 140px;
  padding: 0 24px;
`;
