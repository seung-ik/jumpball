import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import userSlice from '@store/userSlice';
import { useAppDispatch, useAppSelector } from '@store/index';
import { getWalletInfo } from '@utils/wallet';
import { parseChainId, parseShortAddress } from '@utils/parser';
import { CiWallet } from 'react-icons/ci';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineCopy } from 'react-icons/ai';
import { VscDebugDisconnect } from 'react-icons/vsc';
import { RiArrowRightDownLine } from 'react-icons/ri';
import { ethereum } from './UserStatus';

const ConnectedWallet = () => {
  const [isSmall, setIsSmall] = useState<boolean>(true);
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const { address, chainId } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const toggleSize = () => setIsSmall((prev) => !prev);

  const onClickDisconnect = () => {
    dispatch(userSlice.actions.reset());
    localStorage.removeItem('_account');
  };

  const onClickCopy = async () => {
    if (address) {
      setIsCopy(true);
      navigator.clipboard
        .writeText(address) //
        .then(() =>
          setTimeout(() => {
            setIsCopy(false);
          }, 500),
        );
    }
  };

  const onClickOpenLink = () => window.open(`https://mumbai.polygonscan.com/address/${address}`);

  useEffect(() => {
    const handleNetworkChanged = async (chainId: string) => {
      const network = parseChainId(parseInt(chainId, 16));
      if (!network) {
        alert('지원하지않는 체인입니다.');
        localStorage.removeItem('_account');
        dispatch(userSlice.actions.reset());
      } else {
        const { address, token, chainId } = await getWalletInfo(ethereum);
        console.log(chainId);
        dispatch(userSlice.actions.setUser({ address, token, chainId }));
      }
    };
    const handleAccountChange = async (_accounts: string[]) => {
      const { address, token, chainId } = await getWalletInfo(ethereum, _accounts[0]);
      dispatch(userSlice.actions.setUser({ address, token, chainId }));
    };

    ethereum.on('chainChanged', handleNetworkChanged);
    ethereum.on('accountsChanged', handleAccountChange);

    return () => {
      ethereum.removeListener('chainChanged', handleNetworkChanged);
      ethereum.removeListener('accountsChanged', handleAccountChange);
    };
  }, [dispatch]);

  return (
    <Wrapper>
      {isSmall ? (
        <SmallBox onClick={toggleSize}>
          <CiWallet size={28} />
          <span className="text">{parseShortAddress(address)}</span>
        </SmallBox>
      ) : (
        <LargeBox>
          <div>Network : {parseChainId(chainId)}</div>
          <IconText>
            <span>Address : </span>
            <span style={{ color: isCopy ? 'white' : 'black' }}>{address}</span>
            <AiOutlineCopy size={20} onClick={onClickCopy} />
          </IconText>

          <ButtonWrapper>
            <IconText onClick={onClickDisconnect}>
              <VscDebugDisconnect size={20} />
              <span>Disconnect Wallet</span>
            </IconText>
            <i>|</i>
            <IconText onClick={onClickOpenLink}>
              <BiTimeFive size={20} />
              <span>Recent Transactions</span>
            </IconText>
          </ButtonWrapper>

          <ResizeButton onClick={toggleSize}>
            <RiArrowRightDownLine size={28} color="black" />
          </ResizeButton>
        </LargeBox>
      )}
    </Wrapper>
  );
};

export default ConnectedWallet;

const Wrapper = styled('div')`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: 1.5px solid black;
  background: rgba(252, 98, 56, 0.92);
  border-radius: 7px;
  padding: 8px 20px;
`;

const SmallBox = styled('div')`
  cursor: pointer;
  display: flex;
  align-items: center;

  & .text {
    margin-left: 8px;
  }
`;

const LargeBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

const IconText = styled('div')`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
`;

const ButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
  color: black;
  gap: 12px;
  justify-content: center;
  margin-top: 6px;

  & i {
    font-size: 20px;
  }
`;

const ResizeButton = styled('div')`
  position: absolute;
  bottom: -10px;
  right: -20px;
  padding-left: 18px;
  padding-top: 8px;
  cursor: pointer;
`;
