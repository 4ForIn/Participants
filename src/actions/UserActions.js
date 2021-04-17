/* eslint-disable no-console */
import {
  AUTH_FAIL,
  AUTH_VIEW_MODE,
  SET_USER_PROPERTIES,
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_OUT_FAIL,
  SIGN_OUT_REQUEST,
  SIGN_UP_REQUEST,
  USER_IS_SIGNED_IN,
  USER_IS_SIGNED_OUT,
} from 'actions/ActionsTypes';
import {
  signOut,
  signInWithEmailAndPass,
  signUpWithEmailAndPassAndName,
} from 'services/firebaseAuth/FirebaseAuth';

const blankUser = {
  congregation: null,
  email: null,
  idToken: null,
  isSignedIn: false,
  meetingId: null,
  name: '',
  participantsQuantity: null,
  uid: null,
  zoomName: null,
};

export const setUserProperties = (userProps) => ({
  type: SET_USER_PROPERTIES,
  payload: userProps,
});

export const setUserIsSignedIn = (user) => ({
  type: USER_IS_SIGNED_IN,
  payload: user,
});

export const setUserIsSignedOut = () => ({
  type: USER_IS_SIGNED_OUT,
  payload: blankUser,
});

export const tryToSignUp = (inputs) => (dispatch) => {
  dispatch({ type: SIGN_UP_REQUEST });
  return signUpWithEmailAndPassAndName(inputs.email, inputs.password, inputs.name)
    .then(() => {
      dispatch({ type: AUTH_VIEW_MODE, payload: false });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: AUTH_FAIL });
    });
};

export const tryToSignIn = (inputs) => async (dispatch) => {
  dispatch({ type: SIGN_IN_REQUEST });
  try {
    await signInWithEmailAndPass(inputs.email, inputs.password);

    dispatch({ type: AUTH_VIEW_MODE, payload: false });
  } catch (err) {
    console.log(err);
    dispatch({ type: SIGN_IN_FAIL });
  }
};

export const tryToSignOut = () => (dispatch) => {
  dispatch({ type: SIGN_OUT_REQUEST });
  return signOut()
    .then(() => {
      dispatch({ type: AUTH_VIEW_MODE, payload: false });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SIGN_OUT_FAIL });
    })
    .finally(() => setUserIsSignedOut());
};

/*
userProps are some of these properies:
{
  congregation: null,
  email: null,
  idToken: null,
  isSignedIn: false,
  meetingId: null,
  name: '',
  participantsQuantity: null,
  userId: getDateFn()[2].replace(/\s+/g, ''),
  uid: null,
  zoomName: null,
}

 */
