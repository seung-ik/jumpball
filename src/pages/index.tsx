import { useRouter } from 'next/router';
import styled from 'styled-components';
import HomeLayout from '@layout/HomeLayout';

export default function Home() {
  const router = useRouter();

  return (
    <HomeLayout>
      <div style={{ display: 'flex', gap: '36px', flex: 1, maxHeight: '260px' }}>
        <Box grow={3}>
          <div>nba/mlb 경기일정 확인 승부예측</div>
          <button onClick={() => router.push('/jumpball')}>JumpBall</button>
        </Box>
        <Box grow={1}>
          <div>세계 시간 변환기</div>
          <button onClick={() => router.push('/timeswap')}>TimeSwap</button>
        </Box>
      </div>
      <Header>Seed__Vault</Header>
      <div style={{ display: 'flex', gap: '36px', flex: 1, maxHeight: '260px' }}>
        <Box grow={2}>
          <div>nba/mlb 경기일정 확인 승부예측</div>
          <button style={{ backgroundColor: '#FFA500' }} onClick={() => router.push('/jumpball')}>
            JumpBall
          </button>
        </Box>
        <Box grow={2}>
          <div>세계 시간 변환기</div>
          <button onClick={() => router.push('/timeswap')}>TimeSwap</button>
        </Box>
      </div>
    </HomeLayout>
  );
}

const Header = styled('div')`
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 28px;
  padding-left: 6%;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  margin: 12px 0;
  margin-left: 12px;
  user-select: none;
`;
const Box = styled('div')<{ grow?: number }>`
  background-color: #2d984a;
  flex: ${({ grow }) => grow || 1};
  height: 100%;
  border-radius: 36px;
  padding: 16px;
`;
