import { BACK_COLOR } from '@constants/style';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <div style={{ fontSize: '24px', fontWeight: 600, textAlign: 'left' }}>JumpBall</div>
      <div style={{ display: 'flex', marginTop: '16px', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Image
            src="/images/github.png"
            alt="github"
            width={24}
            height={24}
            onClick={() => window.open('https://github.com/seung-ik')}
          />
          <Image
            src="/images/linkedIn.png"
            alt="linkedin"
            width={24}
            height={24}
            onClick={() => window.open('https://www.linkedin.com/in/532seungik/')}
          />
        </div>
        <div style={{ textAlign: 'right' }}>copyright © seung-ik All rights reserved.</div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled('footer')`
  width: 100%;
  // height: 100px;
  background-color: ${BACK_COLOR};
  color: gray;
  padding: 30px 20px;
`;
