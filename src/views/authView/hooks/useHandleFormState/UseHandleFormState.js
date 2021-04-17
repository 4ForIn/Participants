import { useState } from 'react';

const blankInputs = {
  email: '',
  name: '',
  password: '',
};

export function useHandleFormState() {
  const [inputValues, setInputValue] = useState(blankInputs);

  function handlerOnchange(event) {
    setInputValue((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }
  // id is created from timestamp, when app starts and saved in redux store. Function returns Firebase user.

  return {
    inputValues,
    handlerOnchange,
    setInputValue,
  };
}
/* 
state.user:
{
  congregation: null,
  email: null,
  idToken: null,
  isSignedIn: false,
  meetingId: null,
  name: '',
  participantsQuantity: null,
  userId: getDateFn()[2].replace(/\s+/g, ''),
  zoomName: null,
}
*/
