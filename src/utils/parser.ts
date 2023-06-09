import { Network } from '@constants/networkInfo';

export function parseChainId(_id: number): string | boolean {
  switch (_id) {
    // case 1:
    //   return Network.ethereum;
    // case 5:
    //   return Network.goerli;
    // case 56:
    //   return Network.bnb;
    // case 137:
    //   return Network.polygon;
    case 80001:
      return Network.mumbai;
    default:
      return false;
  }
}

export const parseTimeToUsTime = (_date: Date) => {
  return new Date(_date.getTime() - 24 * 60 * 60 * 1000);
};

export const parseShortAddress = (_address: string) => {
  return _address.slice(0, 5) + '...' + _address.slice(-5);
};

