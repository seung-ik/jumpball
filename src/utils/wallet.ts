import networks, { Network } from "@/constants/networkInfo";
import { Jumpball__factory } from '@constants/typechain-types';
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
  return Jumpball__factory.connect('0x73D102a8004557986f63dD31143da58AA9de3b54', signer);
}

export const handleSwitchChain = async (_ethereum: any, _network: Network) => {
	try {
		await _ethereum.request({
			method: "wallet_switchEthereumChain",
			params: [{ chainId: networks[_network]["chainId"] }],
		});
	} catch (switchError: any) {
		if (switchError.code === 4902) {
			try {
				await _ethereum.request({
					method: "wallet_addEthereumChain",
					params: [networks[_network]],
				});
			} catch (addError) {
				console.error("Add new network FAILED", addError);
			}
		}
		console.error("Switch network FAILED", switchError);
	}
};

export const getWalletInfo = async (_ethereum: any, _account?: string) => {
	const provider = new ethers.BrowserProvider(_ethereum);
	const _chainId = await _ethereum.request({ method: "eth_chainId" });

	if (_account) {
		const _balance = await provider.getBalance(_account);
		const eth = ethers.formatEther(_balance);
		return { address: _account, token: eth, chainId: parseInt(_chainId, 16) };
	} else {
		await _ethereum.request({
			method: "wallet_requestPermissions",
			params: [
				{
					eth_accounts: {},
				},
			],
		});
		const _accounts = await _ethereum.request({ method: "eth_requestAccounts" });
		const _balance = await provider.getBalance(_accounts[0]);
		const eth = ethers.formatEther(_balance);
		return { address: _accounts[0], token: eth, chainId: parseInt(_chainId, 16) };
	}
};
