import { ADD_PARTICIPANT } from 'utils/ActionsTypes';
/**
 * participantsListReducer; const initialState = [];
 * participant object =
 * {congregation: '', isSignedIn: bool, meetingId: '', name: '', participantsQuantity: 1, userId: '', zoomName: ''}
 */

export const addParticipant = (participant) => ({
  type: ADD_PARTICIPANT,
  payload: participant,
});
export const fakeAddPartic = (fakeParticip) => ({
  type: 'ADD_FAKE',
  payload: fakeParticip,
});
