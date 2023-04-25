import { TRANS_GREEN } from '@constants/style';
import { DetailGameInfoType } from '@pages/jumpball/nba/[pid]';
import React, { useMemo } from 'react';
import styled from 'styled-components';

interface Props {
  data: DetailGameInfoType;
}

const NbaTable: React.FC<Props> = ({ data }) => {
  const scoreList = useMemo(() => {
    if (!data?.home.linescores || data?.home.linescores.length < 4) return [0, 1, 2, 3];
    return data?.home.linescores;
  }, [data]);

  return (
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
              <td style={{ color: 'gray' }}>{homeAccScore}</td>
              <td>{awayScore}</td>
              <td style={{ color: 'gray' }}>{awayAccScore}</td>
            </tr>
          );
        })}
        <tr>
          <td>Total</td>
          <td colSpan={2}>{data.home.score}</td>
          <td colSpan={2}>{data.away.score}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default NbaTable;

const Table = styled('table')`
  width: 100%;
  margin-top: 32px;
  font-size: 20px;
  & td {
    border: 2px solid ${TRANS_GREEN};
    padding: 6px;
  }
  & th {
    border: 2px solid ${TRANS_GREEN};
    padding: 8px;
    font-weight: 600;
  }
  & tr {
    text-align: center;
  }
`;
