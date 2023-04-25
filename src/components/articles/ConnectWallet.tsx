import React, { useState } from 'react';
import { FaWallet } from 'react-icons/fa';
import { SECONDARY_COLOR } from '@constants/style';
import styled from 'styled-components';
import ConnectWalletModal from './ConnectWalletModal';

const ConnectWallet = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const onClickOpenModal = () => {
    setIsShow(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <WalletButton onClick={onClickOpenModal}>
        <FaWallet size={36} />
        <div>Connect Wallet</div>
      </WalletButton>
      {isShow && <ConnectWalletModal setIsShow={setIsShow} />}
    </>
  );
};

export default ConnectWallet;

const WalletButton = styled('div')`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: 2px solid black;
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: ${SECONDARY_COLOR};
  border-radius: 7px;
`;
