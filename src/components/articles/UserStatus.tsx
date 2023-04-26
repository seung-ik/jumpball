import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/index';
import ConnectedWallet from './ConnectedWallet';
import ConnectWallet from './ConnectWallet';
import InstallWallet from './InstallWallet';
import { getWalletInfo } from '@utils/wallet';
import userSlice from '@store/userSlice';

export const ethereum = window.ethereum;

const UserStatus = () => {
  const userInfo = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedAccount = localStorage.getItem('_account');
    if (savedAccount) {
      getWalletInfo(ethereum, savedAccount) //
        .then(({ address, token, chainId }) => {
          dispatch(userSlice.actions.setUser({ address, token, chainId }));
        });
    }
  }, []);

  if (!window.ethereum) {
    return <InstallWallet />;
  } else if (userInfo.address) {
    return <ConnectedWallet />;
  } else {
    return <ConnectWallet />;
  }
};

export default UserStatus;
