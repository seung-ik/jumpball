import React from 'react';
import Image from 'next/image';

const NoGames = () => {
  return (
    <div
      style={{
        display: 'flex',
        marginTop: '80px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '32px',
      }}
    >
      <Image src="/images/rest.png" alt="rest" width={300} height={300} />
      <div style={{ fontSize: '24px' }}>오늘은 경기일정이 없습니다...</div>
    </div>
  );
};

export default NoGames;
