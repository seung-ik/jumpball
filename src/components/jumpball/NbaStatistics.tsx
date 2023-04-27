import React from 'react';
import { DetailGameInfoType } from '@pages/nba/[pid]';
import { TRANS_GREEN } from '@constants/style';
import styled from 'styled-components';

interface Props {
  data: DetailGameInfoType;
}

const NbaStatistics: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      {data.boxscore_home.map((statistic: any, i: number) => {
        if (statistic.label === 'FG') {
          return (
            <Row key={statistic.label}>
              <div>
                {data.boxscore_home[i]['displayValue']} ({data.boxscore_home[i + 1]['displayValue']}
                %)
              </div>
              <div>필드 골 (%)</div>
              <div>
                {data.boxscore_away[i]['displayValue']} ({data.boxscore_away[i + 1]['displayValue']}
                %)
              </div>
            </Row>
          );
        }

        if (statistic.label === '3PT') {
          return (
            <Row key={statistic.label}>
              <div>
                {data.boxscore_home[i]['displayValue']} ({data.boxscore_home[i + 1]['displayValue']}
                %)
              </div>
              <div>3점 슛 (%)</div>
              <div>
                {data.boxscore_away[i]['displayValue']} ({data.boxscore_away[i + 1]['displayValue']}
                %)
              </div>
            </Row>
          );
        }

        if (statistic.label === 'FT') {
          return (
            <Row marginBottom="24px">
              <div>
                {data.boxscore_home[i]['displayValue']} ({data.boxscore_home[i + 1]['displayValue']}
                %)
              </div>
              <div>자유투 (%)</div>
              <div>
                {data.boxscore_away[i]['displayValue']} ({data.boxscore_away[i + 1]['displayValue']}
                %)
              </div>
            </Row>
          );
        }

        if (statistic.label === 'Rebounds') {
          return (
            <Row key={statistic.label}>
              <div>{data.boxscore_home[i]['displayValue']}</div>
              <div>리바운드</div>
              <div>{data.boxscore_away[i]['displayValue']}</div>
            </Row>
          );
        }

        if (statistic.label === 'Offensive Rebounds') {
          return (
            <Row key={statistic.label}>
              <div>{data.boxscore_home[i]['displayValue']}</div>
              <div>공격 리바운드</div>
              <div>{data.boxscore_away[i]['displayValue']}</div>
            </Row>
          );
        }

        if (statistic.label === 'Defensive Rebounds') {
          return (
            <Row marginBottom="24px">
              <div>{data.boxscore_home[i]['displayValue']}</div>
              <div>수비 리바운드</div>
              <div>{data.boxscore_away[i]['displayValue']}</div>
            </Row>
          );
        }

        if (statistic.label === 'Assists') {
          return (
            <Row key={statistic.label}>
              <div>{data.boxscore_home[i]['displayValue']}</div>
              <div>어시스트</div>
              <div>{data.boxscore_away[i]['displayValue']}</div>
            </Row>
          );
        }

        if (statistic.label === 'Steals') {
          return (
            <Row key={statistic.label}>
              <div>{data.boxscore_home[i]['displayValue']}</div>
              <div>스틸</div>
              <div>{data.boxscore_away[i]['displayValue']}</div>
            </Row>
          );
        }

        if (statistic.label === 'Blocks') {
          return (
            <Row marginBottom="24px">
              <div>{data.boxscore_home[i]['displayValue']}</div>
              <div>블락</div>
              <div>{data.boxscore_away[i]['displayValue']}</div>
            </Row>
          );
        }

        if (statistic.label === 'Turnovers') {
          return (
            <Row key={statistic.label}>
              <div>{data.boxscore_home[i]['displayValue']}</div>
              <div>턴오버</div>
              <div>{data.boxscore_away[i]['displayValue']}</div>
            </Row>
          );
        }

        if (statistic.label === 'Points Off Turnovers') {
          return (
            <Row key={statistic.label}>
              <div>{data.boxscore_home[i]['displayValue']}</div>
              <div>실책 기반 득점</div>
              <div>{data.boxscore_away[i]['displayValue']}</div>
            </Row>
          );
        }

        if (statistic.label === 'Fouls') {
          return (
            <Row key={statistic.label}>
              <div>{data.boxscore_home[i]['displayValue']}</div>
              <div>파울</div>
              <div>{data.boxscore_away[i]['displayValue']}</div>
            </Row>
          );
        }
      })}
    </Wrapper>
  );
};

export default NbaStatistics;

const Wrapper = styled('div')`
  margin-bottom: 80px;
  margin-top: 24px;
  font-size: 20px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  border-radius: 16px;
  box-shadow: 1px 2px 3px 3px ${TRANS_GREEN};
`;

const Row = styled('div')<{ marginBottom?: string }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
`;
