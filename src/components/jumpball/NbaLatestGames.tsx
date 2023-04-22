import React from 'react';
import { DetailGameInfoType } from '@pages/jumpball/nba/[pid]';
import { format } from 'date-fns';
import { useRouter } from 'next/router';

interface Props {
  data: DetailGameInfoType;
}

const NbaLatestGames: React.FC<Props> = ({ data }) => {
  const router = useRouter();

  return (
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
  );
};

export default NbaLatestGames;
