import networks, { Network } from '@/constants/networkInfo';
import { ethers } from 'ethers';

export const getProvider = () => {
  return new ethers.BrowserProvider(window.ethereum);
};

export const getSigner = () => {
  return getProvider().getSigner();
};

export async function getJumpBallContract() {
  //TODO: 네트워크id별로 관리필요
  const signer = await getSigner();
  return new ethers.Contract(
    '0x73D102a8004557986f63dD31143da58AA9de3b54',
    [
      {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: '_id',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: '_date',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: '_match',
            type: 'string',
          },
          {
            internalType: 'string',
            name: '_home',
            type: 'string',
          },
          {
            internalType: 'string',
            name: '_away',
            type: 'string',
          },
          {
            internalType: 'bool',
            name: '_isHome',
            type: 'bool',
          },
        ],
        name: 'betting',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: '_id',
            type: 'string',
          },
        ],
        name: 'getGameInfo',
        outputs: [
          {
            components: [
              {
                internalType: 'string',
                name: 'typeAndId',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'name',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'home',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'away',
                type: 'string',
              },
              {
                internalType: 'uint256',
                name: 'startTime',
                type: 'uint256',
              },
              {
                internalType: 'enum Jumpball.progressType',
                name: 'completed',
                type: 'uint8',
              },
              {
                internalType: 'uint256',
                name: 'homeSum',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'awaySum',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'harvestedSum',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'validator',
                type: 'address',
              },
            ],
            internalType: 'struct Jumpball.GameInfo',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: '_id',
            type: 'string',
          },
        ],
        name: 'getMyBetInfo',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: '_id',
            type: 'string',
          },
        ],
        name: 'harvest',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: '_id',
            type: 'string',
          },
          {
            internalType: 'bool',
            name: '_win',
            type: 'bool',
          },
        ],
        name: 'validateGame',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    signer,
  );
  // Jumpball__factory.connect('0x73D102a8004557986f63dD31143da58AA9de3b54', signer);
}

export const handleSwitchChain = async (_ethereum: any, _network: Network) => {
  try {
    await _ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: networks[_network]['chainId'] }],
    });
  } catch (switchError: any) {
    if (switchError.code === 4902) {
      try {
        await _ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [networks[_network]],
        });
      } catch (addError) {
        console.error('Add new network FAILED', addError);
      }
    }
    console.error('Switch network FAILED', switchError);
  }
};

export const getWalletInfo = async (_ethereum: any, _account?: string) => {
  const provider = new ethers.BrowserProvider(_ethereum);
  const _chainId = await _ethereum.request({ method: 'eth_chainId' });

  if (_account) {
    const _balance = await provider.getBalance(_account);
    const eth = ethers.formatEther(_balance);
    localStorage.setItem('_account', _account);
    return { address: _account, token: eth, chainId: parseInt(_chainId, 16) };
  } else {
    await _ethereum.request({
      method: 'wallet_requestPermissions',
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
    const _accounts = await _ethereum.request({ method: 'eth_requestAccounts' });
    const _balance = await provider.getBalance(_accounts[0]);
    const eth = ethers.formatEther(_balance);
    localStorage.setItem('_account', _accounts[0]);
    return { address: _accounts[0], token: eth, chainId: parseInt(_chainId, 16) };
  }
};
