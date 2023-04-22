import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { NBAEventType } from '@pages/jumpball';
import ScoreBoard from './ScoreBoard';
import { TRANS_GREEN, SECONDARY_COLOR, PRIMARY_COLOR } from '@constants/style';
import { BsBoxArrowInRight } from 'react-icons/bs';
import styled from 'styled-components';
import { format } from 'date-fns';

const GameItem: React.FC<NBAEventType> = ({
  name,
  completed,
  homeTeam,
  awayTeam,
  id,
  location,
  date,
  type,
}) => {
  const router = useRouter();
  const [active, setActive] = useState<boolean>(false);

  const onClickBoxToggle = () => setActive((prev) => !prev);
  const onClickDetailPage: React.MouseEventHandler<HTMLElement> = (e) => {
    e.stopPropagation();
    if (type === 'MLB') router.push(`/jumpball/mlb/${id}`);
    if (type === 'NBA') router.push(`/jumpball/nba/${id}`);
  };

  useEffect(() => {
    if (completed) setActive(true);
  }, [completed]);

  return (
    <Box onClick={onClickBoxToggle}>
      <Head isCompleted={completed}>
        <span>{name}</span>
        {completed ? (
          <div className="complete">
            <span>승리팀</span>
            <Image
              src={homeTeam.winner ? homeTeam.team.logo : awayTeam.team.logo}
              alt="logo"
              width={36}
              height={36}
              style={{ objectFit: 'contain', flex: 1, marginRight: '32px' }}
            />
            <span>경기종료</span>
          </div>
        ) : (
          <div className="uncomplete" onClick={onClickDetailPage}>
            <span>승부예측</span>
            <BsBoxArrowInRight size={28} color={SECONDARY_COLOR} />
          </div>
        )}
      </Head>
      {active && (
        <Body onClick={(e) => e.stopPropagation()}>
          <ScoreBoardWrapper>
            <ScoreBoard isHome info={homeTeam} />
            <i>:</i>
            <ScoreBoard isHome={false} info={awayTeam} />
          </ScoreBoardWrapper>
          {completed ? (
            <div className="complete">
              <span className="location">
                경기시간: {format(new Date(date), 'hh:mm')} | 경기장: {location}
              </span>
              <button onClick={onClickDetailPage}>결과 상세보기</button>
            </div>
          ) : (
            <span className="location">
              경기시간: {format(new Date(date), 'hh:mm')} | 경기장: {location}
            </span>
          )}
        </Body>
      )}
    </Box>
  );
};

export default GameItem;

const Box = styled('div')`
  border: 2px solid ${TRANS_GREEN};
  border-radius: 12px;
  height: auto;
  margin-bottom: 20px;
  background: white;
  padding: 20px 24px;
`;

const Head = styled('head')<{ isCompleted: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;

  & > .complete {
    display: flex;
    align-items: center;
  }

  & > .uncomplete {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }
`;

const Body = styled('section')`
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > .complete {
    display: flex;
    justify-content: space-between;

    & button {
      text-decoration: underline;
    }
  }

  & .location {
    color: gray;
  }
`;

const ScoreBoardWrapper = styled('div')`
  display: flex;
  justify-content: center;
  gap: 52px;

  & i {
    display: flex;
    align-items: center;
    font-size: 60px;
  }
`;
