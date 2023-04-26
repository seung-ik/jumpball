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
