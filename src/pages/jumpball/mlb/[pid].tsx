import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import GamePrediction from '@components/jumpball/GamePrediction';
import { fetchMlbSummaryById } from '@utils/fetch';
import { PRIMARY_COLOR, TRANS_GREEN, MAX_WIDTH } from '@constants/style';
import { IoIosArrowBack } from 'react-icons/io';
import NbaTable from '@components/jumpball/NbaTable';
import NbaStatistics from '@components/jumpball/NbaStatistics';
import NbaLatestGames from '@components/jumpball/NbaLatestGames';

export interface DetailGameInfoType {
  type: 'MLB' | 'NBA';
  id: string;
  gameNote: string;
  home: any;
  away: any;
  boxscore_home: any;
  boxscore_away: any;
  lastGames_home: any;
  lastGames_away: any;
  isStarted: boolean;
}

const MlbPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [data, setData] = useState<DetailGameInfoType>();
  const isStarted = useMemo(() => {
    if (!data) return false;
    return data.boxscore_home.length > 0;
  }, [data]);

  useEffect(() => {
    const getData = async (_id: string) => {
      const _data = await fetchMlbSummaryById(_id);
      setData(_data);
    };
    if (pid) {
      getData(pid as string);
    }
  }, [pid]);

  if (!data) return;
  return (
    <Layout>
      <Header onClick={() => router.push('/jumpball')}>
        <IoIosArrowBack />
        <span>경기일정</span>
      </Header>
      <div>{data?.gameNote}</div>
      <div style={{ display: 'flex', marginTop: '40px' }}>
        <GamePrediction isHome data={data.home} />
        <GamePrediction isHome={false} data={data.away} />
      </div>
      {isStarted && <NbaTable data={data} />}
      {isStarted && <NbaStatistics data={data} />}
      {!isStarted && <NbaLatestGames data={data} />}
    </Layout>
  );
};

export default MlbPage;

const Layout = styled('div')`
  border-left: 1px solid ${TRANS_GREEN};
  border-right: 1px solid ${TRANS_GREEN};
  max-width: ${MAX_WIDTH}px;
  display: flex;
  flex-direction: column;
  margin: auto;
  min-height: 100vh;
`;

const Header = styled('button')`
  display: flex;
  height: 72px;
  align-items: center;
  padding-left: 24px;
  font-size: 24px;
  background-color: ${PRIMARY_COLOR};
  color: white;
  border-radius: 0 0 0 8px;

  & span {
    margin-left: 16px;
  }
`;
