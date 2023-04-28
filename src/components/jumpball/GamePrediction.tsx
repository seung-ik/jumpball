import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { useAppSelector } from '@store/index';
import { getBetInfo } from '@utils/fetch';
import { calcDividedRate } from '@utils/calc';
import PredictModal from '@articles/PredictModal';
import { PRIMARY_COLOR, TRANS_GREEN } from '@constants/style';
import TeamIntroduction from './TeamIntroduction';
import NbaLatestGames from './NbaLatestGames';

interface Props {
  isHome: boolean;
  data: any;
}

const GamePrediction: React.FC<Props> = ({ isHome, data }) => {
  const userInfo = useAppSelector((state) => state.user);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const { data: betInfo } = useQuery(['bet_info_key', data.type, data.id], getBetInfo);

  const homeTotal = betInfo?.homeSum ? Number(Number(betInfo?.homeSum).toFixed(3)) : 0;
  const awayTotal = betInfo?.awaySum ? Number(Number(betInfo?.awaySum).toFixed(3)) : 0;
  const homeDivideRate = useMemo(
    () => calcDividedRate(true, homeTotal, awayTotal),
    [homeTotal, awayTotal],
  );
  const awayDivideRate = useMemo(
    () => calcDividedRate(false, homeTotal, awayTotal),
    [homeTotal, awayTotal],
  );
  const latestGames = isHome ? data.lastGames_home : data.lastGames_away;
  const introduction = isHome ? data.home : data.away;

  const onClickBetting = () => {
    if (!userInfo.address) {
      alert('지갑연결이후에 사용가능합니다.');
      return;
    } else if (data.isStarted) {
      alert('참여가능한 기간이 아닙니다.');
      return;
    }
    setIsShowModal(true);
  };

  return (
    <Box>
      <TeamIntroduction data={introduction} />
      {!data.isStarted && <NbaLatestGames data={latestGames} />}
      <BetWrapper>
        <Column>
          <div className="bet-header">참여수량</div>
          <div className="bet-body">{isHome ? homeTotal : awayTotal} Matic</div>
        </Column>
        <Column>
          <div className="bet-header">배당률</div>
          <div className="bet-body">{isHome ? homeDivideRate : awayDivideRate}</div>
        </Column>
        {data.isStarted ? (
          <Button onClick={onClickBetting} color="gray">
            완료
          </Button>
        ) : (
          <Button onClick={onClickBetting}>참여하기</Button>
        )}
      </BetWrapper>
      {isShowModal && (
        <PredictModal
          setIsShowModal={setIsShowModal}
          data={data}
          isHome={isHome}
          homeTotal={homeTotal}
          awayTotal={awayTotal}
        />
      )}
    </Box>
  );
};

export default GamePrediction;

const Box = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${PRIMARY_COLOR};
  border-radius: 4px;
  justify-content: center;
  width: 100%;
`;

const BetWrapper = styled('section')`
  display: flex;
  border-top: 2px solid ${TRANS_GREEN};
  width: 100%;
  font-size: 20px;
  padding: 6px;

  & .bet-header {
    font-size: 16px;
    font-weight: 700;
  }

  & .bet-body {
    font-size: 16px;
    font-weight: 400;
  }
`;

const Column = styled('div')`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Button = styled('button')<{ color?: string }>`
  flex: 1;
  font-size: 18px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.7);
  background: ${({ color }) => color || `${PRIMARY_COLOR}`};
  color: white;
  border-radius: 4px;
`;
