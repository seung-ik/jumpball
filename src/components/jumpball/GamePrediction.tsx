import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@store/index';
import { PRIMARY_COLOR, SECONDARY_COLOR, TRANS_GREEN } from '@constants/style';
import TeamIntroduction from './TeamIntroduction';
import PredictModal from '@articles/PredictModal';
import NbaLatestGames from './NbaLatestGames';
import { getDividedRate } from '@utils/parser';

interface Props {
  isHome: boolean;
  data: any;
}

const GamePrediction: React.FC<Props> = ({ isHome, data }) => {
  const homeTotal = data.homeSum ? Number(data.homeSum.toFixed(3)) : 0;
  const awayTotal = data.awaySum ? Number(data.awaySum.toFixed(3)) : 0;
  const homeDivideRate = getDividedRate(true, homeTotal, awayTotal);
  const awayDivideRate = getDividedRate(false, homeTotal, awayTotal);
  const userInfo = useAppSelector((state) => state.user);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const latestGames = isHome ? data.lastGames_home : data.lastGames_away;
  const introduction = isHome ? data.home : data.away;

  const onClickBetting = () => {
    if (!userInfo.address) {
      alert('지갑연결이후에 사용가능합니다.');
      return;
    }
    setIsShowModal(true);
  };

  return (
    <Box>
      <TeamIntroduction data={introduction} />
      {!data.isStarted && <NbaLatestGames data={latestGames} />}
      <BetWrapper>
        <div
          style={{
            flex: 1.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div className="bet-header">참여수량</div>
          <div>{isHome ? homeTotal : awayTotal} Matic</div>
        </div>
        <div
          style={{
            flex: 1.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div className="bet-header">배당률</div>
          <div>{isHome ? homeDivideRate : awayDivideRate}</div>
        </div>
        <button
          style={{
            flex: 1,
            fontSize: '18px',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.7)',
            background: `${PRIMARY_COLOR}`,
            color: 'white',
            borderRadius: '4px',
          }}
          onClick={onClickBetting}
        >
          참여하기
        </button>
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
    font-weight: 600;
  }
`;
