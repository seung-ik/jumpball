import { useRouter } from 'next/router';
import React from 'react';
import { format } from 'date-fns';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getDetailGameInfo } from '@utils/fetch';
import NbaTable from '@components/jumpball/NbaTable';
import NbaStatistics from '@components/jumpball/NbaStatistics';
import GamePrediction from '@components/jumpball/GamePrediction';
import { PRIMARY_COLOR, TRANS_GREEN, MAX_WIDTH } from '@constants/style';
import Head from 'next/head';
import ScheduleBtn from '@articles/ScheduleBtn';

export interface DetailGameInfoType {
  type: 'NBA' | 'MLB';
  id: string;
  gameNote: string;
  home: any;
  away: any;
  boxscore_home: any;
  boxscore_away: any;
  lastGames_home: any;
  lastGames_away: any;
  isStarted: boolean;
  date: any;
  location: string;
  series: any[];
  homeSum: number;
  awaySum: number;
  homePlayer: any[];
  awayPlayer: any[];
}

const NbaPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { data } = useQuery(['detail_game_info_key', 'NBA', pid], getDetailGameInfo);

  if (!data) return;
  return (
    <Layout>
      <Head>
        <title>경기세부내용 | Jumpball</title>
        <meta name="description" content="경기를 예측하고 세부 결과를 알수 있는 공간입니다." />
      </Head>
      <ScheduleBtn />
      <Body>
        <Info>
          <div>
            <div className="info-title">{data?.gameNote || 'Regular Season'}</div>
            <div className="info-text">
              경기시간 : {format(new Date(data.date), 'MM월dd일 hh:mm')} | 경기장: {data.location}
            </div>
          </div>
          <div className="series-wrapper">
            {data.series.map((el) => {
              return (
                <div key={el.summary}>
                  <div className="info-title" style={{ marginBottom: '4px' }}>
                    {el.title}
                  </div>
                  <div className="info-text">{el.summary}</div>
                </div>
              );
            })}
          </div>
        </Info>

        <div style={{ display: 'flex', gap: '8px', marginTop: '24px' }}>
          <GamePrediction isHome data={data} />
          <GamePrediction isHome={false} data={data} />
        </div>
        {data.isStarted && <NbaTable data={data} />}
        {data.isStarted && <NbaStatistics data={data} />}
      </Body>
    </Layout>
  );
};

export default NbaPage;

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

const Body = styled('div')`
  padding: 0 24px;
  margin-top: 50px;
  margin-bottom: 80px;
`;

const Info = styled('div')`
  display: flex;
  justify-content: space-between;
  font-size: 20px;

  & .info-title {
    font-weight: 800;
    margin-bottom: 12px;
  }

  & .info-text {
    color: gray;
  }

  & .series-wrapper {
    display: flex;
    text-align: right;
    flex-direction: column;
    gap: 12px;
  }
`;
