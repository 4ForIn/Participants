import { useState } from 'react';

export function useCounterState() {
  const [radioValue, setRadioValue] = useState({
    value: '0',
    otherNumber: '',
  });

  function onValueChange(event) {
    if (event.target.value !== 'other') {
      setRadioValue((prevState) => ({
        ...prevState,
        value: event.target.value,
        otherNumber: event.target.value,
      }));
    } else {
      setRadioValue((prevState) => ({
        ...prevState,
        value: event.target.value,
      }));
    }
  }
  function inputOnchange(e) {
    setRadioValue((prevState) => ({
      ...prevState,
      otherNumber: e.target.value,
    }));
  }

  return {
    radioValue,
    onValueChange,
    inputOnchange,
  };
}
