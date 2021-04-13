/* eslint-disable no-console */
import { useState } from 'react';
// import {
//   signUpWithEmailAndPassAndName,
//   signInWithEmailAndPass,
// } from 'services/firebaseAuth/FirebaseAuth';

// for resetting inputs after submit
const blankInputs = {
  email: '',
  name: '',
  password: '',
};

// if user try to Sign up calls firebase createUserWithEmailAndPassword function and updateProfile to set displayName. Otherwise calls firebase signInWithEmailAndPassword function. Returns user from Firebase.
/* const authSwitch = async (formType, email, password, name) => {
  let isSignedIn;

  if (formType === 'signup') {
    try {
      isSignedIn = await signUpWithEmailAndPassAndName(email, password, name);
    } catch (error) {
      console.log(error.message);
      isSignedIn = null;
    }
  }
  if (formType === 'signin') {
    try {
      isSignedIn = await signInWithEmailAndPass(email, password);
    } catch (error) {
      // console.log(error.message);
      isSignedIn = null;
    }
  }
  console.log(isSignedIn);
  return isSignedIn;
}; */

export function useHandleFormState() {
  const [inputValues, setInputValue] = useState(blankInputs);

  function handlerOnchange(event) {
    setInputValue((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }
  // id is created from time stamp, when app starts and sawed in redux store. Function returns Firebase user.
  const handleOnSubmit = async (authType) => {
    // const { email, name, password } = inputValues;
    // console.log(password);
    setInputValue(blankInputs);
    const isSignedIn = await authType(inputValues);
    return isSignedIn;
  };
  return {
    inputValues,
    handlerOnchange,
    handleOnSubmit,
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
--------------------------------

const handleOnSubmit = async (event, id) => {
    event.preventDefault();
    const { email, name, password } = createNewUserObject(id, inputValues);
    console.log(password);
    setInputValue(blankInputs);
    try {
      const isSignedIn = await signUpWithEmailAndPassAndName(email, password, name);
      return isSignedIn;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };


*/
