import { ADD_PARTICIPANT, REMOVE_PARTICIPANT } from 'actions/ActionsTypes';

export const firestoreonSnapshotAction = (participants) => ({
  // participant is [{}, {}]
  type: ADD_PARTICIPANT,
  payload: participants,
});
export const fakeAddPartic = (fakeParticip) => ({
  type: 'ADD_FAKE',
  payload: fakeParticip,
});
export const removeParticipantAction = (id) => ({
  type: REMOVE_PARTICIPANT,
  payload: id,
});

/*
participantsListReducer; const initialState = [];

participant object from firestore colection:
  {congregation: 'a',  
  meetingId: 'df54',              
  participantsQuantity: 1,
  userId: 'fghbdss',
  zoomName: 'ffgggh',}
*/
