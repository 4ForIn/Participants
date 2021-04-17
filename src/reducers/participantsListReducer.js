import { participantsObjects } from 'utils/DammyData';
import { ADD_PARTICIPANT, REMOVE_PARTICIPANT } from 'actions/ActionsTypes';

export default function participantsListReducer(state = participantsObjects, action) {
  const { payload, type } = action;
  switch (type) {
    case ADD_PARTICIPANT:
      return [...payload];
    case REMOVE_PARTICIPANT:
      return [...state];
    case 'ADD_FAKE':
      return [...state];
    default:
      return state;
  }
}

/*
  const initialState = [];
 
  participant object from firestore colection:
  {congregation: 'a',  
  meetingId: 'df54',              
  participantsQuantity: 1,
  userId: 'fghbdss',
  zoomName: 'ffgggh',}
 */
