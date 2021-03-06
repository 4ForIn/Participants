import { CORRECT_QUANTITY, SET_QUANTITY } from 'utils/ActionsTypes';
/**
 * participantsListReducer; const initialState = [];
 * participant object =
 * {congregation: '', isSignedIn: bool, meetingId: '', name: '', participantsQuantity: 1, userId: '', zoomName: ''}
 */

export const correctQuantity = (correction, userId) => ({
  type: CORRECT_QUANTITY,
  payload: { correction, userId },
});
export const setQuantity = (quantity, userId) => ({
  type: SET_QUANTITY,
  payload: { quantity, userId },
});
