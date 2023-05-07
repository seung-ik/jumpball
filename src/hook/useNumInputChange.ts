import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react';

type InputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void;

const useNumInputChange = (
  initialValue: string,
): [string, Dispatch<SetStateAction<string>>, InputChangeHandler] => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange: InputChangeHandler = (event) => {
    let inputVal = event.target.value as string;
    if (!/^[\d.]*$/.test(inputVal)) return;
    if (inputVal.split('.').length > 2) return;

    const inputNumber = parseFloat(inputVal);
    if (isNaN(inputNumber)) {
      setValue('0');
      return;
    }

    const limitedNumber = Math.floor(inputNumber * 1000) / 1000;
    if (limitedNumber !== inputNumber) {
      inputVal = limitedNumber.toFixed(3);
    }
    if (/^0[0-9]/.test(inputVal)) {
      inputVal = inputVal.slice(1);
    }
    setValue(inputVal);
  };

  return [value, setValue, handleChange];
};

export default useNumInputChange;
