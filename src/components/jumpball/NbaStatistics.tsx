import React from 'react';
import { DetailGameInfoType } from '@pages/jumpball/nba/[pid]';

interface Props {
  data: DetailGameInfoType;
}

const NbaStatistics: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.boxscore_home.map((el: any, i: number) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>{data.boxscore_home[i]['displayValue']}</div>
            <div>{el.label}</div>
            <div>{data.boxscore_away[i]['displayValue']}</div>
          </div>
        );
      })}
    </>
  );
};

export default NbaStatistics;
