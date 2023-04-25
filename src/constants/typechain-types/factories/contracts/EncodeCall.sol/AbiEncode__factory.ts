/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AbiEncode,
  AbiEncodeInterface,
} from "../../../contracts/EncodeCall.sol/AbiEncode";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "encodeCall",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "encodeWithSelector",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "encodeWithSignature",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "test",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506106d7806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806325adff1c146100515780635fc6ac0e146100815780637e3b06fb146100b157806393e01418146100e1575b600080fd5b61006b600480360381019061006691906103ce565b6100fd565b604051610078919061049e565b60405180910390f35b61009b600480360381019061009691906103ce565b61015f565b6040516100a8919061049e565b60405180910390f35b6100cb60048036038101906100c691906103ce565b6101e1565b6040516100d8919061049e565b60405180910390f35b6100fb60048036038101906100f69190610525565b61027b565b005b606082826040516024016101129291906105a3565b60405160208183030381529060405263a9059cbb60e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905092915050565b606063a9059cbb60e01b838360405160240161017c9291906105a3565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905092915050565b606082826040516024016101f69291906105a3565b6040516020818303038152906040527fa9059cbb000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905092915050565b60008373ffffffffffffffffffffffffffffffffffffffff1683836040516102a492919061060b565b6000604051808303816000865af19150503d80600081146102e1576040519150601f19603f3d011682016040523d82523d6000602084013e6102e6565b606091505b505090508061032a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032190610681565b60405180910390fd5b50505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103658261033a565b9050919050565b6103758161035a565b811461038057600080fd5b50565b6000813590506103928161036c565b92915050565b6000819050919050565b6103ab81610398565b81146103b657600080fd5b50565b6000813590506103c8816103a2565b92915050565b600080604083850312156103e5576103e4610330565b5b60006103f385828601610383565b9250506020610404858286016103b9565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561044857808201518184015260208101905061042d565b60008484015250505050565b6000601f19601f8301169050919050565b60006104708261040e565b61047a8185610419565b935061048a81856020860161042a565b61049381610454565b840191505092915050565b600060208201905081810360008301526104b88184610465565b905092915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126104e5576104e46104c0565b5b8235905067ffffffffffffffff811115610502576105016104c5565b5b60208301915083600182028301111561051e5761051d6104ca565b5b9250929050565b60008060006040848603121561053e5761053d610330565b5b600061054c86828701610383565b935050602084013567ffffffffffffffff81111561056d5761056c610335565b5b610579868287016104cf565b92509250509250925092565b61058e8161035a565b82525050565b61059d81610398565b82525050565b60006040820190506105b86000830185610585565b6105c56020830184610594565b9392505050565b600081905092915050565b82818337600083830152505050565b60006105f283856105cc565b93506105ff8385846105d7565b82840190509392505050565b60006106188284866105e6565b91508190509392505050565b600082825260208201905092915050565b7f63616c6c206661696c6564000000000000000000000000000000000000000000600082015250565b600061066b600b83610624565b915061067682610635565b602082019050919050565b6000602082019050818103600083015261069a8161065e565b905091905056fea264697066735822122065c23995553c6b195b6b5c16eccbc5c8f4cc7e29045cf47ff765c7444db327b664736f6c63430008110033";

type AbiEncodeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AbiEncodeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AbiEncode__factory extends ContractFactory {
  constructor(...args: AbiEncodeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AbiEncode> {
    return super.deploy(overrides || {}) as Promise<AbiEncode>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AbiEncode {
    return super.attach(address) as AbiEncode;
  }
  override connect(signer: Signer): AbiEncode__factory {
    return super.connect(signer) as AbiEncode__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AbiEncodeInterface {
    return new utils.Interface(_abi) as AbiEncodeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AbiEncode {
    return new Contract(address, _abi, signerOrProvider) as AbiEncode;
  }
}
