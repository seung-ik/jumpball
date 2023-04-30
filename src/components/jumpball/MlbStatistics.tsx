import React, { useState } from 'react';
import styled from 'styled-components';
import { DetailGameInfoType } from '@pages/mlb/[pid]';
import { TRANS_GREEN, BACK_COLOR } from '@constants/style';

interface Props {
  data: DetailGameInfoType;
}

const MlbStatistics: React.FC<Props> = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState('HOME');
  const batStatistics =
    selectedTab === 'HOME' ? data.homePlayer[0].athletes : data.awayPlayer[0].athletes;
  const pitchStatistics =
    selectedTab === 'HOME' ? data.homePlayer[1].athletes : data.awayPlayer[1].athletes;

  return (
    <Wrapper>
      <ButtonWrapper>
        <TabButton active={selectedTab === 'HOME'} onClick={() => setSelectedTab('HOME')}>
          {data.home.team.displayName}
        </TabButton>
        <TabButton active={selectedTab === 'AWAY'} onClick={() => setSelectedTab('AWAY')}>
          {data.away.team.displayName}
        </TabButton>
      </ButtonWrapper>
      <Table>
        <Title>타격 기록</Title>
        <Header>
          <div className="name">선수</div>
          <div className="record">
            <Row>타수</Row>
            <Row>득점</Row>
            <Row>안타</Row>
            <Row>볼넷</Row>
            <Row>타점</Row>
          </div>
        </Header>
        {batStatistics.map((el: any) => {
          const stats = el.stats;
          return (
            <Body>
              <div className="name">
                {el.athlete.jersey}.&nbsp; {el.athlete.displayName} •{' '}
                {el.athlete.position.abbreviation}
              </div>
              <div className="record">
                <Row>{stats[1]}</Row>
                <Row>{stats[2]}</Row>
                <Row>{stats[3]}</Row>
                <Row>{stats[6]}</Row>
                <Row>{stats[4]}</Row>
              </div>
            </Body>
          );
        })}
      </Table>
      <Table>
        <Title>투수 기록</Title>
        <Header>
          <div className="name">선수</div>
          <div className="record">
            <Row>이닝</Row>
            <Row>피안타</Row>
            <Row>자책점</Row>
            <Row>볼넷</Row>
            <Row>탈삼진</Row>
          </div>
        </Header>
        {pitchStatistics.map((el: any) => {
          const stats = el.stats;
          return (
            <Body>
              <div className="name">
                {el.athlete.jersey}.&nbsp; {el.athlete.displayName} •{' '}
                {el.athlete.position.abbreviation}
              </div>
              <div className="record">
                <Row>{stats[0]}</Row>
                <Row>{stats[1]}</Row>
                <Row>{stats[2]}</Row>
                <Row>{stats[4]}</Row>
                <Row>{stats[5]}</Row>
              </div>
            </Body>
          );
        })}
      </Table>
    </Wrapper>
  );
};

export default MlbStatistics;

const Wrapper = styled('div')`
  margin-top: 24px;
`;

const ButtonWrapper = styled('div')`
  display: flex;
  height: 56px;
  gap: 8px;
`;

const TabButton = styled('button')<{ active?: boolean }>`
  flex: 1;
  background-color: ${({ active }) => (active ? `${BACK_COLOR}` : '')};
  font-size: 20px;
`;

const Table = styled('div')`
  padding-top: 24px;
  padding-bottom: 8px;
`;

const Title = styled('div')`
  margin-bottom: 24px;
  font-weight: 700;
`;

const Header = styled('div')`
  display: flex;
  margin-bottom: 12px;
  border-bottom: 2px solid gray;
  padding-bottom: 6px;
  color: gray;
  font-weight: 700;

  & .name {
    flex: 2;
  }

  & .record {
    display: flex;
    gap: 16px;
    flex: 1;
  }
`;

const Body = styled('div')`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid ${TRANS_GREEN};

  & .name {
    flex: 2;
  }

  & .record {
    display: flex;
    gap: 16px;
    flex: 1;
  }
`;

const Row = styled('div')`
  flex: 1;
  text-align: center;
`;
