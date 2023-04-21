import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NBAEventType } from '@pages/jumpball';
import ScoreBoard from './ScoreBoard';
import { TRANS_GREEN } from '@constants/style';

const GameItem: React.FC<NBAEventType> = (props) => {
  const { shortName, name, completed, homeTeam, awayTeam, id } = props;
  const router = useRouter();
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (completed) {
      setActive(true);
    }
  }, [completed]);

  return (
    <div
      style={{
        border: `2px solid ${TRANS_GREEN}`,
        borderRadius: '16px',
        height: 'auto',
        padding: '8px',
        marginBottom: '20px',
        background: 'white',
      }}
      onClick={() => setActive((prev) => !prev)}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '52px',
          alignItems: 'center',
          padding: '0 16px',
          fontSize: '20px',
        }}
      >
        <div style={{ minWidth: '300px' }}>{name}</div>
        <div>isCompleted: {completed ? 'O' : 'X'}</div>
      </div>
      {active && (
        <section style={{ marginTop: '20px' }} onClick={(e) => e.stopPropagation()}>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
            <ScoreBoard isHome info={homeTeam} />
            <div
              style={{ display: 'flex', alignItems: 'center', margin: '0 30px', fontSize: '60px' }}
            >
              :
            </div>
            <ScoreBoard isHome={false} info={awayTeam} />
          </div>
          <button>enroll</button>
          <button onClick={() => router.push(`/jumpball/nba/${id}`)}>betting</button>
        </section>
      )}
    </div>
  );
};

export default GameItem;
