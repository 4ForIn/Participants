/* eslint-disable no-console */
import { useState } from 'react';

export function useUserDataFormState() {
  const [inputValues, setInputValue] = useState({
    congregation: '',
    id: '',
    name: '',
  });

  function handlerOnchange(event) {
    console.log(event.target.value);
    setInputValue((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }
  return {
    inputValues,
    handlerOnchange,
    setInputValue,
  };
}
/* 
In USerDataForm component ther are <FormInputs/> with id's: congregation, id, name,

*/
