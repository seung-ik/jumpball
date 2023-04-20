import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Image from 'next/image';
import GamePrediction from '@components/jumpball/GamePrediction';

interface DetailGameInfoType {
  id: string;
  gameNote: string;
  home: any;
  away: any;
}
const DetailPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [data, setData] = useState<DetailGameInfoType>();
  const scoreList = data?.home.linescores?.length < 4 ? [0, 1, 2, 3] : data?.home.linescores;

  useEffect(() => {
    if (pid) {
      axios
        .get(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=${pid}`)
        .then(({ data }) => {
          console.log(data);
          const _data: DetailGameInfoType = {
            id: data.header.id,
            gameNote: data.header.gameNote,
            home: data.header.competitions[0].competitors[0],
            away: data.header.competitions[0].competitors[1],
          };
          setData(_data);
        });
    }
  }, [pid]);

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
      <button onClick={() => router.back()}>뒤로</button>
      <div>{pid}</div>
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
              const homeScore = data?.home.linescores[i].displayValue;
              const awayScore = data?.away.linescores[i].displayValue;

              const homeAccScore = data?.home.linescores
                .slice(0, i + 1)
                .map((el: any) => Number(el.displayValue))
                .reduce((acc: number, cur: number) => acc + cur, 0);
              const awayAccScore = data?.away.linescores
                .slice(0, i + 1)
                .map((el: any) => Number(el.displayValue))
                .reduce((acc: number, cur: number) => acc + cur, 0);

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
