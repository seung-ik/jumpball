import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  data: any;
}

const TeamIntroduction: React.FC<Props> = ({ data }) => {
  const record = data.record[0].summary.split('-');

  return (
    <Wrapper>
      <Logo>
        <Image
          src={data.team.logos[0].href}
          alt="aa"
          width={120}
          height={120}
          style={{ objectFit: 'contain' }}
        />
      </Logo>
      <TextWrapper>
        <div>{data.team.displayName}</div>
        <div className="record">{`(${record[0]}승 ${record[1]}패)`}</div>
      </TextWrapper>
    </Wrapper>
  );
};

export default TeamIntroduction;

const Wrapper = styled('div')`
  display: flex;
  width: 100%;
  margin: 8px 0;
`;

const Logo = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled('div')`
  flex: 1;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;

  $ .record {
    font-size: 20px;
    font-weight: 600;
  }
`;
