import { DetailGameInfoType } from '@pages/mlb/[pid]';
import React from 'react';
import styled from 'styled-components';

interface Props {
  data: DetailGameInfoType;
}

const MlbTable: React.FC<Props> = ({ data }) => {
  let homeAccError = 0;
  let awayAccError = 0;
  let homeAccValue = 0;
  let awayAccValue = 0;
  let homeAccHit = 0;
  let awayAccHit = 0;

  return (
    <>
      <Title>경기 결과</Title>
      <Wrapper>
        <LeftTable>
          <Header>팀</Header>
          <Body>{data.home.team.displayName}</Body>
          <Body>{data.away.team.displayName}</Body>
        </LeftTable>
        <RightTable>
          {data.away.linescores?.map((_: any, i: number) => {
            if (data.home.linescores[i]) {
              homeAccError += Number(data.home.linescores[i].errors);
              homeAccValue += Number(data.home.linescores[i].displayValue);
              homeAccHit += Number(data.home.linescores[i].hits);
            }
            if (data.away.linescores[i]) {
              awayAccError += data.away.linescores[i]?.errors;
              awayAccValue += Number(data.away.linescores[i].displayValue);
              awayAccHit += Number(data.away.linescores[i].hits);
            }
            return (
              <div key={crypto.randomUUID()}>
                <Header>{i + 1}</Header>
                <Body>{data.home.linescores[i]?.displayValue || 0}</Body>
                <Body>{data.away.linescores[i]?.displayValue || 0}</Body>
              </div>
            );
          })}
          <div>
            <Header>점수</Header>
            <Body>{homeAccValue}</Body>
            <Body>{awayAccValue}</Body>
          </div>
          <div>
            <Header>안타</Header>
            <Body>{homeAccHit}</Body>
            <Body>{awayAccHit}</Body>
          </div>
          <div>
            <Header>에러</Header>
            <Body>{homeAccError}</Body>
            <Body>{awayAccError}</Body>
          </div>
        </RightTable>
      </Wrapper>
    </>
  );
};

export default MlbTable;

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid gray;
  margin-top: 12px;
`;

const Title = styled('div')`
  margin-bottom: 24px;
  font-weight: 700;
  margin-top: 40px;
`;

const LeftTable = styled('div')`
  text-align: left;
`;
const RightTable = styled('div')`
  display: flex;
  gap: 24px;
  text-align: center;
`;

const Header = styled('div')`
  color: gray;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Body = styled('div')`
  padding: 4px 0;
  margin-bottom: 6px;
`;
