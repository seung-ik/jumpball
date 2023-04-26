import { useAppSelector } from '@store/index';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MyTab = () => {
  const { address } = useAppSelector((state) => state.user);
  const [data, setData] = useState();

  console.log(data);

  useEffect(() => {
    axios
      .get('/api/hello', { params: { address } }) //
      .then(({ data }) => setData(data));
  }, [address]);

  return (
    <div>
      <Head>
        <span style={{ flex: 1, border: '1px solid red', textAlign: 'center' }}>경기 날짜</span>
        <span style={{ flex: 1, border: '1px solid red', textAlign: 'center' }}>경기 Id</span>
        <span style={{ flex: 1, border: '1px solid red', textAlign: 'center' }}>Home</span>
        <span style={{ flex: 1, border: '1px solid red', textAlign: 'center' }}>Away</span>
        <span style={{ flex: 1, border: '1px solid red', textAlign: 'center' }}>Pick</span>
        <span style={{ flex: 1, border: '1px solid red', textAlign: 'center' }}>수량</span>
        <span style={{ flex: 1, border: '1px solid red', textAlign: 'center' }}>Winner</span>
        <span style={{ flex: 1, border: '1px solid red', textAlign: 'center' }}>Status</span>
      </Head>
      <Body>
        <Row>
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
        </Row>
      </Body>
    </div>
  );
};

export default MyTab;

const Head = styled('div')`
  border: 1px solid black;
  display: flex;
`;
const Body = styled('div')`
  border: 1px solid orange;
  display: flex;
  flex-direction: column;
`;

const Row = styled('div')`
  display: flex;
  align-items: center;
  padding: 4px;
`;
