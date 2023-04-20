import React from 'react';
import { useAppSelector } from '@store/index';
import ConnectedWallet from './ConnectedWallet';
import ConnectWallet from './ConnectWallet';
import InstallWallet from './InstallWallet';

export const ethereum = window.ethereum;

const UserStatus = () => {
  const userInfo = useAppSelector((state) => state.user);

  if (!window.ethereum) {
    return <InstallWallet />;
  } else if (userInfo.address) {
    return <ConnectedWallet />;
  } else {
    return <ConnectWallet />;
  }
};

export default UserStatus;
