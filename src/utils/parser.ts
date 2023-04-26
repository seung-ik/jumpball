import { Network } from '@constants/networkInfo';

export function parseChainId(_id: number): string | boolean {
  switch (_id) {
    case 1:
      return Network.ethereum;
    case 5:
      return Network.goerli;
    case 56:
      return Network.bnb;
    case 137:
      return Network.polygon;
    case 80001:
      return Network.mumbai;
    default:
      return false;
  }
}

export const parseTimeToUsTime = (_date: Date) => {
  return new Date(_date.getTime() - 24 * 60 * 60 * 1000);
};

export function getDividedRate(_isHome: boolean, _homeTotal: number, _awayTotal: number) {
  let calc;
  if (_isHome) {
    calc = (_homeTotal + _awayTotal) / _homeTotal;
  } else {
    calc = (_homeTotal + _awayTotal) / _awayTotal;
  }

  return isNaN(calc) ? '참여자가 없습니다.' : calc.toFixed(2);
}