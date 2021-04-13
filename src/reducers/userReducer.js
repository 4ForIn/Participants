import { SET_USER_PROPERTIES, USER_IS_SIGNED_IN, USER_IS_SIGNED_OUT } from 'actions/ActionsTypes';
import { getDateFn } from 'utils/GetDateFn';

const initialState = {
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
};

export default function userReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case SET_USER_PROPERTIES:
      // payload is an object with some or all user (initialState) properties
      return { ...state, ...payload };
    case USER_IS_SIGNED_IN:
      return { ...state, ...payload };
    case USER_IS_SIGNED_OUT:
      // payload is an object with some or all user (initialState) properties
      return { ...state, ...payload };

    default:
      return state;
  }
}
