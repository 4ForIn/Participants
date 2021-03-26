import { useState } from 'react';

export function useUserDataFormState() {
  const [inputValues, setInputValue] = useState({
    congregation: '',
    id: '',
    name: '',
  });

  function handlerOnchange(event) {
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
