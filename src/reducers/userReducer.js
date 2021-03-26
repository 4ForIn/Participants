import { SET_USER_PROPERTIES } from 'actions/ActionsTypes';
import { getDateFn } from 'utils/GetDateFn';

const initialState = {
  congregation: undefined,
  isSignedIn: true,
  meetingId: null,
  name: undefined,
  participantsQuantity: null,
  userId: getDateFn()[2].replace(/\s+/g, ''),
  zoomName: undefined,
};

export default function userReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case SET_USER_PROPERTIES:
      // payload is an object with some or all user (initialState) properties
      return { ...state, ...payload };

    default:
      return state;
  }
}
