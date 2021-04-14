import { AUTH_FORM_SIGNIN, AUTH_FORM_SIGNUP, AUTH_VIEW_MODE } from 'actions/ActionsTypes';
import { getDateFn } from 'utils/GetDateFn';
import { VERSION } from 'utils/ApplicationVersion';

const initialState = {
  date: getDateFn(), // returns [onlyNumbers, fullShortDate, fullLongDate]
  formType: 'signin',
  isAuth: false,
  isMenuOpen: false,
  isOtherNoVisible: true,
  version: VERSION,
};

export default function appStateReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case AUTH_VIEW_MODE:
      return { ...state, isAuth: payload };
    case AUTH_FORM_SIGNIN:
      return {
        ...state,
        formType: 'signin',
        isAuth: true,
      };
    case AUTH_FORM_SIGNUP:
      return {
        ...state,
        formType: 'signup',
        isAuth: true,
      };
    default:
      return state;
  }
}
