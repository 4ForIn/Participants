import { getDateFn } from 'utils/getDateFn';
import { VERSION } from 'utils/applicationVersion';

const initialState = {
  date: getDateFn(), // [onlyNumbers, fullShortDate, fullLongDate]
  formType: 'signup',
  isAuth: true,
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
