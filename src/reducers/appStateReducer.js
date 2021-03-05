import { getDateFn } from 'utils/GetDateFn';
import { VERSION } from 'utils/ApplicationVersion';

const initialState = {
  date: getDateFn(), // returns [onlyNumbers, fullShortDate, fullLongDate]
  formType: 'signup',
  isAuth: false,
  isMenuOpen: false,
  isOtherNoVisible: true,
  version: VERSION,
};

export default function appStateReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
