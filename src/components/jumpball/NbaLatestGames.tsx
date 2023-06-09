import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { PRIMARY_COLOR, TRANS_GREEN } from '@constants/style';
import CustomLink from '@atoms/CustomLink';

interface Props {
  data: any[];
  type: string;
}

const NbaLatestGames: React.FC<Props> = ({ data, type }) => {
  const url = type === 'NBA' ? 'nba' : 'mlb';

  return (
    <Wrapper>
      <Head>최근 5경기</Head>
      {data.map((el: any, i: number) => {
        const date = format(new Date(el.gameDate), 'yy/MM/dd');
        return (
          <GameWrapper key={el.gameDate + i}>
            <div className="date">{date}</div>
            <div className="result">{el.gameResult}</div>
            <div className="score">{el.score}</div>
            <CustomLink href={`${url}/${el.id}`}>
              <div className="versus">{el.opponent.displayName}</div>
            </CustomLink>
          </GameWrapper>
        );
      })}
    </Wrapper>
  );
};

export default NbaLatestGames;

const Wrapper = styled('section')`
  display: flex;
  flex: 1;
  padding: 0 16px;
  min-height: 220px;
  flex-direction: column;
  width: 100%;
`;

const Head = styled('div')`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  border-bottom: 2px solid ${PRIMARY_COLOR};
  padding-bottom: 8px;
`;

const GameWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: gray;
  border-bottom: 1px solid ${TRANS_GREEN};
  font-size: 18px;
  padding: 4px 0;
  margin-bottom: 4px;

  & .date {
    flex: 1;
  }

  & .result {
    flex: 0.3;
    text-align: left;
  }

  & .score {
    flex: 0.7;
    text-align: center;
  }

  & .versus {
    flex: 1.5;
    text-align: right;
    cursor: pointer;
    text-decoration: none;
  }
`;
