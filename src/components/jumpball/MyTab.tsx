import React, { useEffect } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@store/index';
import { PRIMARY_COLOR, TRANS_GREEN } from '@constants/style';
import { fetchUserBettingList } from '@store/userSlice';

export interface ResponseMyBetting {
  _id: string;
  value: string;
  gameId: string;
  gameDate: string;
  bettingHash: string;
  away: string;
  home: string;
  pick: boolean;
}

const MyTab = () => {
  const { address, bettingList } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserBettingList());
  }, [address]);

  if (bettingList.length === 0) {
    return <div>참여 내역이 없습니다...</div>;
  }

  return (
    <div>
      <button>test</button>
      <Head>
        <span style={{ flex: 2.5, textAlign: 'center' }}>경기 날짜</span>
        <span style={{ flex: 3, textAlign: 'center' }}>경기 Id</span>
        <span style={{ flex: 3.5, textAlign: 'center' }}>Home</span>
        <span style={{ flex: 3.5, textAlign: 'center' }}>Away</span>
        <span style={{ flex: 2, textAlign: 'center' }}>Pick</span>
        <span style={{ flex: 2.5, textAlign: 'center' }}>수량(Matic)</span>
        <span style={{ flex: 3, textAlign: 'center' }}>보상</span>
        <span style={{ flex: 3, textAlign: 'center' }}>검증/수확</span>
      </Head>
      <Body>
        {bettingList.map((el) => {
          return (
            <Row>
              <span style={{ flex: 2.5, textAlign: 'center' }}>
                {format(new Date(el.gameDate), 'yy/MM/dd')}
              </span>
              <span style={{ flex: 3, textAlign: 'center' }}>{el.gameId}</span>
              <span className="team-name" style={{ flex: 3.5, textAlign: 'center' }}>
                {el.home}
              </span>
              <span className="team-name" style={{ flex: 3.5, textAlign: 'center' }}>
                {el.away}
              </span>
              <span style={{ flex: 2, textAlign: 'center' }}>{el.pick ? 'Home' : 'Away'}</span>
              <span style={{ flex: 2.5, textAlign: 'center' }}>{el.value}</span>
              <span style={{ flex: 3, textAlign: 'center' }}>미검증</span>
              <span style={{ flex: 3, textAlign: 'center' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  <Button>검증</Button>
                  <Button>수확</Button>
                </div>
              </span>
            </Row>
          );
        })}
        {/* <Row>
          <span style={{ flex: 1, textAlign: 'center' }}>23/04/24</span>
          <span style={{ flex: 1, textAlign: 'center' }}>NBA-401541243</span>
          <span style={{ flex: 1, textAlign: 'center' }}>Boston Celtics</span>
          <span style={{ flex: 1, textAlign: 'center' }}>Atlanta Hawks</span>
          <span style={{ flex: 1, textAlign: 'center' }}>Home</span>
          <span style={{ flex: 1, textAlign: 'center' }}>0.2matic</span>
          <span style={{ flex: 1, textAlign: 'center' }}>Home</span>
          <span style={{ flex: 1, textAlign: 'center' }}>
            <button>수확</button>
          </span>
        </Row>
        <Row>
          <span style={{ flex: 1, textAlign: 'center' }}>23/04/24</span>
          <span style={{ flex: 1, textAlign: 'center' }}>NBA-401541243</span>
          <span style={{ flex: 1, textAlign: 'center' }}>Boston Celtics</span>
          <span style={{ flex: 1, textAlign: 'center' }}>Atlanta Hawks</span>
          <span style={{ flex: 1, textAlign: 'center' }}>Home</span>
          <span style={{ flex: 1, textAlign: 'center' }}>0.2matic</span>
          <span style={{ flex: 1, textAlign: 'center' }}>
            <button>검증하기</button>
          </span>
          <span style={{ flex: 1, textAlign: 'center' }}>
            <button>미검증</button>
          </span>
        </Row>
        <Row>
          <span style={{ flex: 1, textAlign: 'center' }}>23/04/24</span>
          <span style={{ flex: 1, textAlign: 'center' }}>NBA-401541243</span>
          <span style={{ flex: 1, textAlign: 'center' }}>Boston Celtics</span>
          <span style={{ flex: 1, textAlign: 'center' }}>Atlanta Hawks</span>
          <span style={{ flex: 1, textAlign: 'center' }}>Away</span>
          <span style={{ flex: 1, textAlign: 'center' }}>0.2matic</span>
          <span style={{ flex: 1, textAlign: 'center' }}>Away</span>
          <span style={{ flex: 1, textAlign: 'center' }}>
            <button>수확완료</button>
          </span>
        </Row>
        <Row>
          <span style={{ flex: 1, textAlign: 'center' }}>23/04/24</span>
          <span style={{ flex: 1, textAlign: 'center' }}>NBA-401541243</span>
          <span style={{ flex: 1, textAlign: 'center' }}>Boston Celtics</span>
          <span style={{ flex: 1, textAlign: 'center' }}>Atlanta Hawks</span>
          <span style={{ flex: 1, textAlign: 'center' }}>Home</span>
          <span style={{ flex: 1, textAlign: 'center' }}>0.2matic</span>
          <span style={{ flex: 1, textAlign: 'center' }}>Away</span>
          <span style={{ flex: 1, textAlign: 'center' }}>
            <button>예측실패</button>
          </span>
        </Row> */}
      </Body>
    </div>
  );
};

export default MyTab;

const Head = styled('div')`
  display: flex;
  font-weight: 700;
  font-size: 16px;

  & span {
    padding: 20px 8px;
    border-bottom: 3px solid ${PRIMARY_COLOR};
  }
`;
const Body = styled('div')`
  display: flex;
  flex-direction: column;
`;

const Row = styled('div')`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${TRANS_GREEN};
  height: 56px;

  & span {
    padding: 0 8px;
  }

  & .team-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Button = styled('button')`
  border: 1px solid black;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;

  &:hover {
    border: 1px solid ${PRIMARY_COLOR};
    color: ${PRIMARY_COLOR};
  }
`;
