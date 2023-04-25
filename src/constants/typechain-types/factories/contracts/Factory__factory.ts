/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Factory, FactoryInterface } from "../../contracts/Factory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "exchange",
        type: "address",
      },
    ],
    name: "NewExchange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "createExchange",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "getExchange",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506132fd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806306f2bf621461003b5780631648f38e1461006b575b600080fd5b61005560048036038101906100509190610351565b61009b565b604051610062919061038d565b60405180910390f35b61008560048036038101906100809190610351565b610103565b604051610092919061038d565b60405180910390f35b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361013d57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146101d457600080fd5b6000826040516101e3906102e0565b6101ed919061038d565b604051809103906000f080158015610209573d6000803e3d6000fd5b509050806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff167f9d42cb017eb05bd8944ab536a8b35bc68085931dd5f4356489801453923953f9826040516102cf919061038d565b60405180910390a280915050919050565b612f1f80620003a983390190565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061031e826102f3565b9050919050565b61032e81610313565b811461033957600080fd5b50565b60008135905061034b81610325565b92915050565b600060208284031215610367576103666102ee565b5b60006103758482850161033c565b91505092915050565b61038781610313565b82525050565b60006020820190506103a2600083018461037e565b9291505056fe60806040523480156200001157600080fd5b5060405162002f1f38038062002f1f8339818101604052810190620000379190620001bc565b6040518060400160405280600f81526020017f4772617920556e697377617020563200000000000000000000000000000000008152506040518060400160405280600781526020017f47756e692d5632000000000000000000000000000000000000000000000000008152508160039081620000b4919062000468565b508060049081620000c6919062000468565b50505080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200054f565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001848262000157565b9050919050565b620001968162000177565b8114620001a257600080fd5b50565b600081519050620001b6816200018b565b92915050565b600060208284031215620001d557620001d462000152565b5b6000620001e584828501620001a5565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200027057607f821691505b60208210810362000286576200028562000228565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620002f07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620002b1565b620002fc8683620002b1565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000349620003436200033d8462000314565b6200031e565b62000314565b9050919050565b6000819050919050565b620003658362000328565b6200037d620003748262000350565b848454620002be565b825550505050565b600090565b6200039462000385565b620003a18184846200035a565b505050565b5b81811015620003c957620003bd6000826200038a565b600181019050620003a7565b5050565b601f8211156200041857620003e2816200028c565b620003ed84620002a1565b81016020851015620003fd578190505b620004156200040c85620002a1565b830182620003a6565b50505b505050565b600082821c905092915050565b60006200043d600019846008026200041d565b1980831691505092915050565b60006200045883836200042a565b9150826002028217905092915050565b6200047382620001ee565b67ffffffffffffffff8111156200048f576200048e620001f9565b5b6200049b825462000257565b620004a8828285620003cd565b600060209050601f831160018114620004e05760008415620004cb578287015190505b620004d785826200044a565b86555062000547565b601f198416620004f0866200028c565b60005b828110156200051a57848901518255600182019150602085019450602081019050620004f3565b868310156200053a578489015162000536601f8916826200042a565b8355505b6001600288020188555050505b505050505050565b6129c0806200055f6000396000f3fe6080604052600436106101095760003560e01c8063533a7b7311610095578063a457c2d711610064578063a457c2d714610375578063a9059cbb146103b2578063dd62ed3e146103ef578063e0486c8a1461042c578063f979dcd71461045557610109565b8063533a7b73146102a757806370a08231146102e457806395d89b41146103215780639c8f9f231461034c57610109565b8063313ce567116100dc578063313ce567146101de5780633799098114610209578063389d9a4014610232578063395093511461024e57806351c6590a1461028b57610109565b806306fdde031461010e578063095ea7b31461013957806318160ddd1461017657806323b872dd146101a1575b600080fd5b34801561011a57600080fd5b50610123610471565b6040516101309190611cab565b60405180910390f35b34801561014557600080fd5b50610160600480360381019061015b9190611d66565b610503565b60405161016d9190611dc1565b60405180910390f35b34801561018257600080fd5b5061018b610526565b6040516101989190611deb565b60405180910390f35b3480156101ad57600080fd5b506101c860048036038101906101c39190611e06565b610530565b6040516101d59190611dc1565b60405180910390f35b3480156101ea57600080fd5b506101f361055f565b6040516102009190611e75565b60405180910390f35b34801561021557600080fd5b50610230600480360381019061022b9190611e90565b610568565b005b61024c60048036038101906102479190611ef7565b6107d7565b005b34801561025a57600080fd5b5061027560048036038101906102709190611d66565b61081e565b6040516102829190611dc1565b60405180910390f35b6102a560048036038101906102a09190611f37565b610855565b005b3480156102b357600080fd5b506102ce60048036038101906102c99190611f64565b610b71565b6040516102db9190611deb565b60405180910390f35b3480156102f057600080fd5b5061030b60048036038101906103069190611fb7565b610bc7565b6040516103189190611deb565b60405180910390f35b34801561032d57600080fd5b50610336610c0f565b6040516103439190611cab565b60405180910390f35b34801561035857600080fd5b50610373600480360381019061036e9190611f37565b610ca1565b005b34801561038157600080fd5b5061039c60048036038101906103979190611d66565b610ed3565b6040516103a99190611dc1565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d49190611d66565b610f4a565b6040516103e69190611dc1565b60405180910390f35b3480156103fb57600080fd5b5061041660048036038101906104119190611fe4565b610f6d565b6040516104239190611deb565b60405180910390f35b34801561043857600080fd5b50610453600480360381019061044e9190612024565b610ff4565b005b61046f600480360381019061046a9190611f37565b611220565b005b60606003805461048090612093565b80601f01602080910402602001604051908101604052809291908181526020018280546104ac90612093565b80156104f95780601f106104ce576101008083540402835291602001916104f9565b820191906000526020600020905b8154815290600101906020018083116104dc57829003601f168201915b5050505050905090565b60008061050e61122d565b905061051b818585611235565b600191505092915050565b6000600254905090565b60008061053b61122d565b90506105488582856113fe565b61055385858561148a565b60019150509392505050565b60006012905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306f2bf62836040518263ffffffff1660e01b81526004016105c591906120d3565b602060405180830381865afa1580156105e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106069190612103565b905060006106b086600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161066991906120d3565b602060405180830381865afa158015610686573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106aa9190612145565b47610b71565b90508381116106be57600080fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330896040518463ffffffff1660e01b815260040161071d93929190612172565b6020604051808303816000875af115801561073c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076091906121d5565b508173ffffffffffffffffffffffffffffffffffffffff1663389d9a408287336040518463ffffffff1660e01b815260040161079d929190612202565b6000604051808303818588803b1580156107b657600080fd5b505af11580156107ca573d6000803e3d6000fd5b5050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361081057600080fd5b61081a8282611700565b5050565b60008061082961122d565b905061084a81858561083b8589610f6d565b610845919061225a565b611235565b600191505092915050565b600061085f610526565b90506000811115610a635760003447610878919061228e565b90506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108d791906120d3565b602060405180830381865afa1580156108f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109189190612145565b9050600082823461092991906122c2565b6109339190612333565b90508081111561094257600080fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b81526004016109a193929190612172565b6020604051808303816000875af11580156109c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e491906121d5565b5060008334866109f491906122c2565b6109fe9190612333565b9050610a0a33826118ee565b3373ffffffffffffffffffffffffffffffffffffffff167f06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca3484604051610a52929190612364565b60405180910390a250505050610b6d565b60008290506000479050610a7733826118ee565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610ad693929190612172565b6020604051808303816000875af1158015610af5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1991906121d5565b503373ffffffffffffffffffffffffffffffffffffffff167f06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca3484604051610b62929190612364565b60405180910390a250505b5050565b600080606385610b8191906122c2565b905060008184610b9191906122c2565b9050600082606487610ba391906122c2565b610bad919061225a565b90508082610bbb9190612333565b93505050509392505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060048054610c1e90612093565b80601f0160208091040260200160405190810160405280929190818152602001828054610c4a90612093565b8015610c975780601f10610c6c57610100808354040283529160200191610c97565b820191906000526020600020905b815481529060010190602001808311610c7a57829003601f168201915b5050505050905090565b60008111610cae57600080fd5b6000610cb8610526565b90506000814784610cc991906122c2565b610cd39190612333565b9050600082600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610d3391906120d3565b602060405180830381865afa158015610d50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d749190612145565b85610d7f91906122c2565b610d899190612333565b9050610d953385611a44565b3373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610ddb573d6000803e3d6000fd5b50600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610e3992919061238d565b6020604051808303816000875af1158015610e58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7c91906121d5565b503373ffffffffffffffffffffffffffffffffffffffff167f0fbf06c058b90cb038a618f8c2acbf6145f8b3570fd1fa56abb8f0f3f05b36e88383604051610ec5929190612364565b60405180910390a250505050565b600080610ede61122d565b90506000610eec8286610f6d565b905083811015610f31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2890612428565b60405180910390fd5b610f3e8286868403611235565b60019250505092915050565b600080610f5561122d565b9050610f6281858561148a565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600061109c83600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161105591906120d3565b602060405180830381865afa158015611072573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110969190612145565b47610b71565b9050818110156110e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d890612494565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167f7f4091b46c33e918a0f3aa42307641d17bb67029427a5369e54b3539842387058483604051611129929190612364565b60405180910390a2600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b815260040161119093929190612172565b6020604051808303816000875af11580156111af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111d391906121d5565b503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561121a573d6000803e3d6000fd5b50505050565b61122a8133611700565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036112a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129b90612526565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611313576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130a906125b8565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516113f19190611deb565b60405180910390a3505050565b600061140a8484610f6d565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146114845781811015611476576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161146d90612624565b60405180910390fd5b6114838484848403611235565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036114f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114f0906126b6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611568576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155f90612748565b60405180910390fd5b611573838383611c11565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156115f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115f0906127da565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516116e79190611deb565b60405180910390a36116fa848484611c16565b50505050565b60006117b3343447611712919061228e565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161176d91906120d3565b602060405180830381865afa15801561178a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ae9190612145565b610b71565b9050828110156117f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117ef90612494565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff167fcd60aa75dea3072fbc07ae6d7d856b5dc5f4eee88854f5b4abf7b680ef8bc50f3483604051611840929190612364565b60405180910390a2600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b81526004016118a592919061238d565b6020604051808303816000875af11580156118c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118e891906121d5565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361195d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161195490612846565b60405180910390fd5b61196960008383611c11565b806002600082825461197b919061225a565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611a2c9190611deb565b60405180910390a3611a4060008383611c16565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611ab3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aaa906128d8565b60405180910390fd5b611abf82600083611c11565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611b45576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b3c9061296a565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611bf89190611deb565b60405180910390a3611c0c83600084611c16565b505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611c55578082015181840152602081019050611c3a565b60008484015250505050565b6000601f19601f8301169050919050565b6000611c7d82611c1b565b611c878185611c26565b9350611c97818560208601611c37565b611ca081611c61565b840191505092915050565b60006020820190508181036000830152611cc58184611c72565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611cfd82611cd2565b9050919050565b611d0d81611cf2565b8114611d1857600080fd5b50565b600081359050611d2a81611d04565b92915050565b6000819050919050565b611d4381611d30565b8114611d4e57600080fd5b50565b600081359050611d6081611d3a565b92915050565b60008060408385031215611d7d57611d7c611ccd565b5b6000611d8b85828601611d1b565b9250506020611d9c85828601611d51565b9150509250929050565b60008115159050919050565b611dbb81611da6565b82525050565b6000602082019050611dd66000830184611db2565b92915050565b611de581611d30565b82525050565b6000602082019050611e006000830184611ddc565b92915050565b600080600060608486031215611e1f57611e1e611ccd565b5b6000611e2d86828701611d1b565b9350506020611e3e86828701611d1b565b9250506040611e4f86828701611d51565b9150509250925092565b600060ff82169050919050565b611e6f81611e59565b82525050565b6000602082019050611e8a6000830184611e66565b92915050565b60008060008060808587031215611eaa57611ea9611ccd565b5b6000611eb887828801611d51565b9450506020611ec987828801611d51565b9350506040611eda87828801611d51565b9250506060611eeb87828801611d1b565b91505092959194509250565b60008060408385031215611f0e57611f0d611ccd565b5b6000611f1c85828601611d51565b9250506020611f2d85828601611d1b565b9150509250929050565b600060208284031215611f4d57611f4c611ccd565b5b6000611f5b84828501611d51565b91505092915050565b600080600060608486031215611f7d57611f7c611ccd565b5b6000611f8b86828701611d51565b9350506020611f9c86828701611d51565b9250506040611fad86828701611d51565b9150509250925092565b600060208284031215611fcd57611fcc611ccd565b5b6000611fdb84828501611d1b565b91505092915050565b60008060408385031215611ffb57611ffa611ccd565b5b600061200985828601611d1b565b925050602061201a85828601611d1b565b9150509250929050565b6000806040838503121561203b5761203a611ccd565b5b600061204985828601611d51565b925050602061205a85828601611d51565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806120ab57607f821691505b6020821081036120be576120bd612064565b5b50919050565b6120cd81611cf2565b82525050565b60006020820190506120e860008301846120c4565b92915050565b6000815190506120fd81611d04565b92915050565b60006020828403121561211957612118611ccd565b5b6000612127848285016120ee565b91505092915050565b60008151905061213f81611d3a565b92915050565b60006020828403121561215b5761215a611ccd565b5b600061216984828501612130565b91505092915050565b600060608201905061218760008301866120c4565b61219460208301856120c4565b6121a16040830184611ddc565b949350505050565b6121b281611da6565b81146121bd57600080fd5b50565b6000815190506121cf816121a9565b92915050565b6000602082840312156121eb576121ea611ccd565b5b60006121f9848285016121c0565b91505092915050565b60006040820190506122176000830185611ddc565b61222460208301846120c4565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061226582611d30565b915061227083611d30565b92508282019050808211156122885761228761222b565b5b92915050565b600061229982611d30565b91506122a483611d30565b92508282039050818111156122bc576122bb61222b565b5b92915050565b60006122cd82611d30565b91506122d883611d30565b92508282026122e681611d30565b915082820484148315176122fd576122fc61222b565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061233e82611d30565b915061234983611d30565b92508261235957612358612304565b5b828204905092915050565b60006040820190506123796000830185611ddc565b6123866020830184611ddc565b9392505050565b60006040820190506123a260008301856120c4565b6123af6020830184611ddc565b9392505050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000612412602583611c26565b915061241d826123b6565b604082019050919050565b6000602082019050818103600083015261244181612405565b9050919050565b7f696e6666756369656e74206f7574707574416d6f756e74000000000000000000600082015250565b600061247e601783611c26565b915061248982612448565b602082019050919050565b600060208201905081810360008301526124ad81612471565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612510602483611c26565b915061251b826124b4565b604082019050919050565b6000602082019050818103600083015261253f81612503565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006125a2602283611c26565b91506125ad82612546565b604082019050919050565b600060208201905081810360008301526125d181612595565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061260e601d83611c26565b9150612619826125d8565b602082019050919050565b6000602082019050818103600083015261263d81612601565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006126a0602583611c26565b91506126ab82612644565b604082019050919050565b600060208201905081810360008301526126cf81612693565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000612732602383611c26565b915061273d826126d6565b604082019050919050565b6000602082019050818103600083015261276181612725565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006127c4602683611c26565b91506127cf82612768565b604082019050919050565b600060208201905081810360008301526127f3816127b7565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000612830601f83611c26565b915061283b826127fa565b602082019050919050565b6000602082019050818103600083015261285f81612823565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006128c2602183611c26565b91506128cd82612866565b604082019050919050565b600060208201905081810360008301526128f1816128b5565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000612954602283611c26565b915061295f826128f8565b604082019050919050565b6000602082019050818103600083015261298381612947565b905091905056fea264697066735822122044adcde4a0f1882385d3dc622b48e32e5912a20dd4fc0634c1e530033d2ed94a64736f6c63430008110033a26469706673582212208d691f638e89af0d40771fbdd52615e0303a3ee2ce044302500d07778cae029064736f6c63430008110033";

type FactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Factory__factory extends ContractFactory {
  constructor(...args: FactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Factory> {
    return super.deploy(overrides || {}) as Promise<Factory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Factory {
    return super.attach(address) as Factory;
  }
  override connect(signer: Signer): Factory__factory {
    return super.connect(signer) as Factory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FactoryInterface {
    return new utils.Interface(_abi) as FactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Factory {
    return new Contract(address, _abi, signerOrProvider) as Factory;
  }
}
