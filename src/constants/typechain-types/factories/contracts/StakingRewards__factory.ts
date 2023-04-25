/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  StakingRewards,
  StakingRewardsInterface,
} from "../../contracts/StakingRewards";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakingToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "earned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTimeRewardApplicable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdateTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "periodFinish",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerTokenStored",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userRewardPerTokenPaid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260006003556301e1338060045560006005553480156200002357600080fd5b5060405162001a3e38038062001a3e833981810160405281019062000049919062000229565b620000696200005d620000f360201b60201c565b620000fb60201b60201c565b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000270565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001f182620001c4565b9050919050565b6200020381620001e4565b81146200020f57600080fd5b50565b6000815190506200022381620001f8565b92915050565b60008060408385031215620002435762000242620001bf565b5b6000620002538582860162000212565b9250506020620002668582860162000212565b9150509250929050565b6117be80620002806000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80637b0a47ee116100b8578063c8f33c911161007c578063c8f33c9114610317578063cd3daf9d14610335578063d1af0c7d14610353578063df136d6514610371578063ebe2b12b1461038f578063f2fde38b146103ad57610136565b80637b0a47ee1461027157806380faa57d1461028f5780638b876347146102ad5780638da5cb5b146102dd578063a694fc3a146102fb57610136565b80633c6b16ab116100ff5780633c6b16ab146101f35780633d18b9121461020f57806370a0823114610219578063715018a61461024957806372f702f31461025357610136565b80628cc2621461013b5780630700037d1461016b57806318160ddd1461019b5780632e1a7d4d146101b9578063386a9525146101d5575b600080fd5b61015560048036038101906101509190611197565b6103c9565b60405161016291906111dd565b60405180910390f35b61018560048036038101906101809190611197565b6104cb565b60405161019291906111dd565b60405180910390f35b6101a36104e3565b6040516101b091906111dd565b60405180910390f35b6101d360048036038101906101ce9190611224565b6104ed565b005b6101dd610728565b6040516101ea91906111dd565b60405180910390f35b61020d60048036038101906102089190611224565b61072e565b005b610217610988565b005b610233600480360381019061022e9190611197565b610ba4565b60405161024091906111dd565b60405180910390f35b610251610bed565b005b61025b610c01565b60405161026891906112b0565b60405180910390f35b610279610c27565b60405161028691906111dd565b60405180910390f35b610297610c2d565b6040516102a491906111dd565b60405180910390f35b6102c760048036038101906102c29190611197565b610c47565b6040516102d491906111dd565b60405180910390f35b6102e5610c5f565b6040516102f291906112da565b60405180910390f35b61031560048036038101906103109190611224565b610c88565b005b61031f610ec5565b60405161032c91906111dd565b60405180910390f35b61033d610ecb565b60405161034a91906111dd565b60405180910390f35b61035b610f35565b60405161036891906112b0565b60405180910390f35b610379610f5b565b60405161038691906111dd565b60405180910390f35b610397610f61565b6040516103a491906111dd565b60405180910390f35b6103c760048036038101906103c29190611197565b610f67565b005b6000600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054670de0b6b3a7640000600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461045c610ecb565b6104669190611324565b600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104b09190611358565b6104ba91906113c9565b6104c491906113fa565b9050919050565b60096020528060005260406000206000915090505481565b6000600a54905090565b336104f6610c2d565b600681905550610504610ecb565b600781905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105d157610547816103c9565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600754600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b60008211610614576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060b9061148b565b60405180910390fd5b81600a60008282546106269190611324565b9250508190555081600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461067c9190611324565b92505081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b81526004016106e09291906114ab565b6020604051808303816000875af11580156106ff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610723919061150c565b505050565b60045481565b610736610fea565b6000610740610c2d565b60068190555061074e610ecb565b600781905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461081b57610791816103c9565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600754600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b600554421061083d576004548261083291906113c9565b600381905550610883565b60004260055461084d9190611324565b905060006003548261085f9190611358565b90506004548161086f91906113c9565b8461087a91906113fa565b60038190555050505b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108e091906112da565b602060405180830381865afa1580156108fd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610921919061154e565b9050806004546003546109349190611358565b1115610975576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096c906115c7565b60405180910390fd5b4260068190555042600581905550505050565b33610991610c2d565b60068190555061099f610ecb565b600781905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a6c576109e2816103c9565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600754600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b6000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811115610ba0576000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610b5b9291906114ab565b6020604051808303816000875af1158015610b7a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9e919061150c565b505b5050565b6000600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610bf5610fea565b610bff6000611068565b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b60006005544210610c4057600554610c42565b425b905090565b60086020528060005260406000206000915090505481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b33610c91610c2d565b600681905550610c9f610ecb565b600781905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d6c57610ce2816103c9565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600754600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b60008211610daf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da690611633565b60405180910390fd5b81600a6000828254610dc191906113fa565b9250508190555081600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e1791906113fa565b92505081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610e7d93929190611653565b6020604051808303816000875af1158015610e9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec0919061150c565b505050565b60065481565b600080600a5403610ee0576007549050610f32565b600a54670de0b6b3a7640000600654610ef7610c2d565b610f019190611324565b600354610f0e9190611358565b610f189190611358565b610f2291906113c9565b600754610f2f91906113fa565b90505b90565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b60055481565b610f6f610fea565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610fde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd5906116fc565b60405180910390fd5b610fe781611068565b50565b610ff261112c565b73ffffffffffffffffffffffffffffffffffffffff16611010610c5f565b73ffffffffffffffffffffffffffffffffffffffff1614611066576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105d90611768565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061116482611139565b9050919050565b61117481611159565b811461117f57600080fd5b50565b6000813590506111918161116b565b92915050565b6000602082840312156111ad576111ac611134565b5b60006111bb84828501611182565b91505092915050565b6000819050919050565b6111d7816111c4565b82525050565b60006020820190506111f260008301846111ce565b92915050565b611201816111c4565b811461120c57600080fd5b50565b60008135905061121e816111f8565b92915050565b60006020828403121561123a57611239611134565b5b60006112488482850161120f565b91505092915050565b6000819050919050565b600061127661127161126c84611139565b611251565b611139565b9050919050565b60006112888261125b565b9050919050565b600061129a8261127d565b9050919050565b6112aa8161128f565b82525050565b60006020820190506112c560008301846112a1565b92915050565b6112d481611159565b82525050565b60006020820190506112ef60008301846112cb565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061132f826111c4565b915061133a836111c4565b9250828203905081811115611352576113516112f5565b5b92915050565b6000611363826111c4565b915061136e836111c4565b925082820261137c816111c4565b91508282048414831517611393576113926112f5565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006113d4826111c4565b91506113df836111c4565b9250826113ef576113ee61139a565b5b828204905092915050565b6000611405826111c4565b9150611410836111c4565b9250828201905080821115611428576114276112f5565b5b92915050565b600082825260208201905092915050565b7f43616e6e6f742077697468647261772030000000000000000000000000000000600082015250565b600061147560118361142e565b91506114808261143f565b602082019050919050565b600060208201905081810360008301526114a481611468565b9050919050565b60006040820190506114c060008301856112cb565b6114cd60208301846111ce565b9392505050565b60008115159050919050565b6114e9816114d4565b81146114f457600080fd5b50565b600081519050611506816114e0565b92915050565b60006020828403121561152257611521611134565b5b6000611530848285016114f7565b91505092915050565b600081519050611548816111f8565b92915050565b60006020828403121561156457611563611134565b5b600061157284828501611539565b91505092915050565b7f50726f76696564652072657761726420546f6f20686967680000000000000000600082015250565b60006115b160188361142e565b91506115bc8261157b565b602082019050919050565b600060208201905081810360008301526115e0816115a4565b9050919050565b7f43616e6e6f74207374616b652030000000000000000000000000000000000000600082015250565b600061161d600e8361142e565b9150611628826115e7565b602082019050919050565b6000602082019050818103600083015261164c81611610565b9050919050565b600060608201905061166860008301866112cb565b61167560208301856112cb565b61168260408301846111ce565b949350505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006116e660268361142e565b91506116f18261168a565b604082019050919050565b60006020820190508181036000830152611715816116d9565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061175260208361142e565b915061175d8261171c565b602082019050919050565b6000602082019050818103600083015261178181611745565b905091905056fea2646970667358221220fc3d6f357e85134b4038b66288dfb8513a3a539151877741940ec6ca63aff63b64736f6c63430008110033";

type StakingRewardsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingRewardsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakingRewards__factory extends ContractFactory {
  constructor(...args: StakingRewardsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _rewardToken: PromiseOrValue<string>,
    _stakingToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StakingRewards> {
    return super.deploy(
      _rewardToken,
      _stakingToken,
      overrides || {}
    ) as Promise<StakingRewards>;
  }
  override getDeployTransaction(
    _rewardToken: PromiseOrValue<string>,
    _stakingToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardToken,
      _stakingToken,
      overrides || {}
    );
  }
  override attach(address: string): StakingRewards {
    return super.attach(address) as StakingRewards;
  }
  override connect(signer: Signer): StakingRewards__factory {
    return super.connect(signer) as StakingRewards__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingRewardsInterface {
    return new utils.Interface(_abi) as StakingRewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingRewards {
    return new Contract(address, _abi, signerOrProvider) as StakingRewards;
  }
}
