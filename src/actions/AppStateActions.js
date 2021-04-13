import { AUTH_FORM_SIGNIN, AUTH_FORM_SIGNUP, AUTH_VIEW_MODE } from './ActionsTypes';

export const triggerAuthViewMode = (isTrue) => ({
  type: AUTH_VIEW_MODE,
  payload: isTrue,
});
export const switchSignInForm = () => ({
  type: AUTH_FORM_SIGNIN,
});
export const switchSignUpForm = () => ({
  type: AUTH_FORM_SIGNUP,
});
/*
isAuth to replace with checking userReducer.isSignedIn only!

  {
  date: getDateFn(), // returns [onlyNumbers, fullShortDate, fullLongDate]
  formType: 'signup',
  isAuth: true,
  isMenuOpen: false,
  isOtherNoVisible: true,
  version: VERSION,
}
   */
