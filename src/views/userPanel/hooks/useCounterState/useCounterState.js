/* eslint-disable no-console */
import { useState } from 'react';

export function useCounterState() {
  const [radioValue, setRadioValue] = useState({
    value: '0',
    otherNumber: '',
  });

  function onValueChange(event) {
    // console.log(`hookprevValue: ${radioValue.value} eventV: ${event.target.value}`);
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
  // console.log(`hValue: ${radioValue.value}`);
  return {
    radioValue,
    onValueChange,
    inputOnchange,
  };
}

/* 
function onValueChange(event) {
    setRadioValue((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }
*/
