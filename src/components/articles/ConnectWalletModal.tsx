import React, { useState } from 'react';
import Image from 'next/image';
import { useAppDispatch } from '@store/index';
import { Network } from '@constants/networkInfo';
import { getWalletInfo, handleSwitchChain } from '@utils/wallet';
import userSlice from '@store/userSlice';
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { TRANS_ORANGE, SECONDARY_COLOR, TRANS_GREEN } from '@constants/style';

interface Props {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConnectWalletModal: React.FC<Props> = ({ setIsShow }) => {
  const [selectedNetwork, setSelectedNetwork] = useState<Network>(Network.polygon);
  const dispatch = useAppDispatch();
  const onClickCloseModal = () => {
    document.body.style.overflow = 'visible';
    setIsShow(false);
  };

  const onClickConnect = async () => {
    if (!window.ethereum) {
      alert('메타마스크를 까세요');
    } else {
      const ethereum = window.ethereum;
      await handleSwitchChain(ethereum, selectedNetwork);
      const { address, token, chainId } = await getWalletInfo(ethereum);
      dispatch(userSlice.actions.setUser({ address, token, chainId }));
    }
    onClickCloseModal();
  };

  return (
    <ModalLayout onClick={onClickCloseModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <div className="title">Network</div>
        <GridContainer>
          <GridItem onClick={() => setSelectedNetwork(Network.mumbai)}>
            Polygon Mumbai Testnet
          </GridItem>
          <GridItem disabled onClick={() => setSelectedNetwork(Network.polygon)}>
            Polygon Mainnet
          </GridItem>
          <GridItem disabled>Ethereum Goerli Testnet</GridItem>
          <GridItem disabled>Ethereum Mainnet</GridItem>
        </GridContainer>
        <hr style={{ color: 'black', backgroundColor: 'black', height: 1, marginBottom: '20px' }} />
        <div className="title">Connect</div>
        <Connect onClick={onClickConnect}>
          <span>Metamask</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image src="/images/metamask.png" alt="metamask" width={28} height={28} />
            </div>
            <AiOutlineArrowRight size={30} />
          </div>
        </Connect>
      </Modal>
    </ModalLayout>
  );
};

export default ConnectWalletModal;

const ModalLayout = styled('div')`
  width: 100vw;
  height: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: rgba(189, 190, 210, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled('div')`
  border: 2px solid ${SECONDARY_COLOR};
  background-color: white;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 12px;

  & .title {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 12px;
  }
`;

const GridContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
`;

const GridItem = styled('button')`
  background: ${SECONDARY_COLOR};
  color: white;
  padding: 8px 16px;
  font-size: 20px;
  border-radius: 8px;

  &:disabled {
    background: ${TRANS_ORANGE};
    cursor: not-allowed;
  }
`;

const Connect = styled('button')`
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${SECONDARY_COLOR};
  border-radius: 8px;
  color: white;
  font-size: 20px;
  opacity: 0.85;

  &:hover {
    opacity: 1;
  }
`;
