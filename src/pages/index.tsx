import { useRouter } from 'next/router';
import styled from 'styled-components';
import HomeLayout from '@layout/HomeLayout';

export default function Home() {
  const router = useRouter();
  return (
    <HomeLayout>
      <Header>Seed__Vault</Header>
      <div style={{ display: 'flex', gap: '36px' }}>
        <Box grow={3}>
          <div>nba/mlb 경기일정 확인 승부예측</div>
          <button onClick={() => router.push('/jumpball')}>JumpBall</button>
        </Box>
        <Box grow={1}>
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
`;
const Box = styled('div')<{ grow?: number }>`
  background-color: #34bf49;
  flex: ${({ grow }) => grow || 1};
  height: 260px;
`;
