import { ADD_PARTICIPANT } from 'actions/ActionsTypes';
/**
 * participantsListReducer; const initialState = [];
 */

export const addParticipant = (participant) => ({
  type: ADD_PARTICIPANT,
  payload: participant,
});
export const fakeAddPartic = (fakeParticip) => ({
  type: 'ADD_FAKE',
  payload: fakeParticip,
});
