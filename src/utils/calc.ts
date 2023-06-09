export function calcDividedRate(_isHome: boolean, _homeTotal: number, _awayTotal: number) {
  let calc;
  if (_isHome) {
    calc = (_homeTotal + _awayTotal) / _homeTotal;
  } else {
    calc = (_homeTotal + _awayTotal) / _awayTotal;
  }

  return isNaN(calc) ? '미정.' : calc.toFixed(2);
}

export function calcPredictDividedRate(
  _isHome: boolean,
  _homeTotal: number,
  _awayTotal: number,
  _value: number,
) {
  if (_isHome) {
    return (
      ((_homeTotal + _awayTotal + Number(_value)) *
        (Number(_value) / (_homeTotal + Number(_value)))) /
      Number(_value)
    );
  } else {
    return (
      ((_homeTotal + _awayTotal + Number(_value)) *
        (Number(_value) / (_awayTotal + Number(_value)))) /
      Number(_value)
    );
  }
}

export function calcCanHarvestValue(
  _winner: string,
  _myPick: boolean,
  _value: number,
  _homeSum: number,
  _awaySum: number,
) {
  if (_winner === 'HOME' && _myPick) {
    return (_homeSum + _awaySum) * (_value / _homeSum);
  } else if (_winner === 'AWAY' && !_myPick) {
    return (_homeSum + _awaySum) * (_value / _awaySum);
  } else {
    return 0;
  }
}
