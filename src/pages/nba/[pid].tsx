import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import GamePrediction from '@components/jumpball/GamePrediction';
import { format } from 'date-fns';
import { fetchNbaSummaryById } from '@utils/fetch';
import { PRIMARY_COLOR, TRANS_GREEN, MAX_WIDTH } from '@constants/style';
import { IoIosArrowBack } from 'react-icons/io';
import NbaTable from '@components/jumpball/NbaTable';
import NbaStatistics from '@components/jumpball/NbaStatistics';
import axios from 'axios';

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
}

const NbaPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [data, setData] = useState<DetailGameInfoType>();

  useEffect(() => {
    const getData = async (_id: string) => {
      const _data = await fetchNbaSummaryById(_id);
      setData(_data);
      axios.get('/api/game', { params: { gameId: `NBA-${pid}` } }).then(({ data }) => {
        const sumData = data.data;
        if (sumData) {
          setData((prev: any) => {
            return { ...prev, homeSum: Number(sumData.homeSum), awaySum: Number(sumData.awaySum) };
          });
        }
      });
    };
    if (pid) {
      getData(pid as string);
    }
  }, [pid]);

  if (!data) return;
  return (
    <Layout>
      <Header onClick={() => router.push('/')}>
        <IoIosArrowBack />
        <span>경기일정</span>
      </Header>
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
