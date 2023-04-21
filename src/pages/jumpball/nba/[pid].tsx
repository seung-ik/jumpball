import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Image from 'next/image';
import GamePrediction from '@components/jumpball/GamePrediction';
import { format } from 'date-fns';

interface DetailGameInfoType {
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

const DetailPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [data, setData] = useState<DetailGameInfoType>();
  const scoreList = useMemo(() => {
    if (!data?.home.linescores || data?.home.linescores.length < 4) return [0, 1, 2, 3];
    return data?.home.linescores;
  }, [data]);
  console.log(data);

  useEffect(() => {
    if (pid) {
      axios
        .get(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=${pid}`)
        .then(({ data }) => {
          const gameDate = data.header.competitions[0].date;

          if (new Date(gameDate) < new Date()) {
            const _data: DetailGameInfoType = {
              id: data.header.id,
              gameNote: data.header.gameNote,
              home: data.header.competitions[0].competitors[0],
              away: data.header.competitions[0].competitors[1],
              boxscore_home: data.boxscore.teams[0].statistics,
              boxscore_away: data.boxscore.teams[1].statistics,
              lastGames_home: '',
              lastGames_away: '',
              isStarted: new Date(gameDate) < new Date(),
            };
            setData(_data);
          } else {
            const _data: DetailGameInfoType = {
              id: data.header.id,
              gameNote: data.header.gameNote,
              home: data.header.competitions[0].competitors[0],
              away: data.header.competitions[0].competitors[1],
              boxscore_home: data.boxscore.teams[0].statistics,
              boxscore_away: data.boxscore.teams[1].statistics,
              lastGames_home: data.lastFiveGames[0].events.reverse(),
              lastGames_away: data.lastFiveGames[1].events.reverse(),
              isStarted: new Date(gameDate) < new Date(),
            };
            setData(_data);
          }
        });
    }
  }, [pid]);

  if (!data) return;

  return (
    <div
      style={{
        borderLeft: '1px solid gray',
        borderRight: '2px solid black',
        maxWidth: '1040px',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        minHeight: '100vh',
        padding: '24px',
      }}
    >
      <button onClick={() => router.push('/jumpball')}>경기일정</button>
      <div>{data?.gameNote}</div>
      <div style={{ display: 'flex', marginTop: '40px' }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid black',
            justifyContent: 'center',
          }}
        >
          <Image
            src={data?.home.team.logos[0].href}
            alt="aa"
            width={120}
            height={120}
            style={{ objectFit: 'contain', flex: 1 }}
          />
          <div>{data?.home.team.displayName}</div>
          <div>{data?.home.record[0].summary}</div>
          <GamePrediction isHome />
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid black',
            justifyContent: 'center',
          }}
        >
          <Image
            src={data?.away.team.logos[0].href}
            alt="aa"
            width={120}
            height={120}
            style={{ objectFit: 'contain', flex: 1 }}
          />
          <div>{data?.away.team.displayName}</div>
          <div>{data?.away.record[0].summary}</div>
          <GamePrediction isHome={false} />
        </div>
      </div>
      {data?.home.linescores?.length > 0 && (
        <Table>
          <thead>
            <tr>
              <th></th>
              <th colSpan={2}>{data?.home.team.displayName} (home)</th>
              <th colSpan={2}>{data?.away.team.displayName} (away)</th>
            </tr>
          </thead>
          <tbody>
            {scoreList.map((_: any, i: number) => {
              let homeScore;
              let awayScore;
              let homeAccScore;
              let awayAccScore;
              if (!data?.home.linescores[i]) {
                homeScore = 0;
                awayScore = 0;
                homeAccScore = 0;
                awayAccScore = 0;
              } else {
                homeScore = data?.home.linescores[i].displayValue;
                awayScore = data?.away.linescores[i].displayValue;
                homeAccScore = data?.home.linescores
                  .slice(0, i + 1)
                  .map((el: any) => Number(el.displayValue))
                  .reduce((acc: number, cur: number) => acc + cur, 0);
                awayAccScore = data?.away.linescores
                  .slice(0, i + 1)
                  .map((el: any) => Number(el.displayValue))
                  .reduce((acc: number, cur: number) => acc + cur, 0);
              }

              return (
                <tr>
                  <td>{i > 3 ? '연장' : `${i + 1}Q`}</td>
                  <td>{homeScore}</td>
                  <td>{homeAccScore}</td>
                  <td>{awayScore}</td>
                  <td>{awayAccScore}</td>
                </tr>
              );
            })}
            <tr>
              <td>total</td>
              <td colSpan={2}>asdf</td>
              <td colSpan={2}>asdf</td>
            </tr>
          </tbody>
        </Table>
      )}
      {data.boxscore_home.length > 0 &&
        data.boxscore_home.map((el: any, i: number) => {
          return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>{data.boxscore_home[i]['displayValue']}</div>
              <div>{el.label}</div>
              <div>{data.boxscore_away[i]['displayValue']}</div>
            </div>
          );
        })}
      {data.lastGames_home && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1 }}>
            {data.lastGames_home.map((el: any) => {
              const date = format(new Date(el.gameDate), 'yyyy-MM-dd');
              return (
                <div
                  style={{
                    border: '1px solid black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>{el.gameResult}</div>
                  <div>{el.score}</div>
                  <div onClick={() => router.push(`/jumpball/nba/${el.id}`)}>
                    <div>{el.opponent.displayName}</div>
                    <div>{date}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ flex: 1 }}>
            {data.lastGames_away.map((el: any) => {
              const date = format(new Date(el.gameDate), 'yyyy-MM-dd');
              return (
                <div
                  style={{
                    border: '1px solid black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>{el.gameResult}</div>
                  <div>{el.score}</div>
                  <div onClick={() => router.push(`/jumpball/nba/${el.id}`)}>
                    <div>{el.opponent.displayName}</div>
                    <div>{date}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;

const Table = styled('table')`
  border: 1px solid black;

  & td {
    border: 1px solid green;
  }
  & th {
    border: 1px solid green;
  }
  & tr {
    text-align: center;
  }
`;
