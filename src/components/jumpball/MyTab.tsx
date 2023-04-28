import React, { useEffect } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '@store/index';
import { PRIMARY_COLOR, TRANS_GREEN } from '@constants/style';
import { getJumpBallContract } from '@utils/wallet';
import { ethers } from 'ethers';
import axios from 'axios';
import { calcCanHarvestValue } from '@utils/calc';
import pageSlice from '@store/pageSlice';

export interface ResponseMyBetting {
  _id: string;
  value: string;
  gameId: string;
  gameDate: string;
  bettingHash: string;
  away: string;
  home: string;
  pick: boolean;
  isValidated?: boolean;
  winner?: string;
  harvestValue?: number;
  isHarvested?: boolean;
}

const MyTab = () => {
  const { address, bettingList } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  console.log(bettingList);

  const onClickHarvest = async (_id: string, _gameId: string) => {
    try {
      const Contract = await getJumpBallContract();
      const tx = await Contract.harvest(_gameId);
      const receipt = await tx.wait();
      // console.log(receipt, 'receipt');
      axios.put('/api/harvest', { address, _id: _id, harvestValue: 0, harvestHash: receipt.hash });
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  const onClickVerify = async (_id: string, _gameId: string, _myPick: boolean, _value: string) => {
    const Contract = await getJumpBallContract();

    const tx = await Contract.getGameInfo(_gameId);
    const validator = tx[9];
    const winner = Number(tx[8]) > 0 ? 'HOME' : 'AWAY';
    const homeSum = ethers.formatEther(tx[6]);
    const awaySum = ethers.formatEther(tx[7]);
    const harvestValue = calcCanHarvestValue(
      winner,
      _myPick,
      Number(_value),
      Number(homeSum),
      Number(awaySum),
    );
    const isValidated = parseInt(validator, 16) > 0 ? true : false;

    if (!isValidated) {
      alert('경기종료후 검증이 등록되지 않았습니다.(종료일 이후 자정등록)');
    } else {
      axios.put('/api/hello', { isValidated, address, _id: _id, winner, harvestValue });
    }
  };

  useEffect(() => {
    if (!address) {
      dispatch(pageSlice.actions.setTab('NBA'));
    }
  }, [address]);

  if (bettingList.length === 0) {
    return <div>참여 내역이 없습니다.</div>;
  }

  return (
    <div>
      <Head>
        <Span flex={2.4}>경기 날짜</Span>
        <Span flex={3.2}>경기 Id</Span>
        <Span flex={3.4}>Home</Span>
        <Span flex={3.4}>Away</Span>
        <Span flex={2}>Pick</Span>
        <Span flex={2.5}>수량(Matic)</Span>
        <Span flex={3}>승리/보상(Matic)</Span>
        <Span flex={3}>검증/수확</Span>
      </Head>
      <Body>
        {bettingList.map((el) => {
          return (
            <Row key={el._id}>
              <Span flex={2.4}>{format(new Date(el.gameDate), 'yy/MM/dd')}</Span>
              <Span flex={3.2}>{el.gameId}</Span>
              <Span className="team-name" flex={3.4}>
                {el.home}
              </Span>
              <Span className="team-name" flex={3.4}>
                {el.away}
              </Span>
              <Span flex={2}>{el.pick ? 'HOME' : 'AWAY'}</Span>
              <Span flex={2.5}>{el.value}</Span>
              <Span flex={3}>
                {el.isValidated ? `${el.winner}/${el.harvestValue?.toFixed(3)}` : '미검증'}
              </Span>
              <Span flex={3}>
                <ButtonWrapper>
                  <Button
                    disabled={el.isValidated}
                    onClick={() => onClickVerify(el._id, el.gameId, el.pick, el.value)}
                  >
                    검증
                  </Button>
                  <Button onClick={() => onClickHarvest(el._id, el.gameId)}>수확</Button>
                </ButtonWrapper>
              </Span>
            </Row>
          );
        })}
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

const Span = styled('span')<{ flex: number }>`
  flex: ${({ flex }) => flex};
  text-align: center;
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

const ButtonWrapper = styled('div')`
  display: flex;
  justify-content: center;
  gap: 6px;
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

  &:disabled {
    border: 1.5px solid rgb(187, 190, 202);
    color: rgb(187, 190, 202);
    box-shadow: none;
    background-color: rgb(234, 235, 239);
    cursor: default;
  }
`;
