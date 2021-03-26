import { participantsObjects } from 'utils/DammyData';
import { ADD_PARTICIPANT } from 'utils/ActionsTypes';

// const initialState = [];

export default function participantsListReducer(state = participantsObjects, action) {
  switch (action.type) {
    case ADD_PARTICIPANT:
      return [...state, action.payload];
    case 'ADD_FAKE':
      return [...state, action.payload];
    default:
      return state;
  }
}

/**
 * participant object =
 * {congregation: '', isSignedIn: bool, meetingId: '', name: '', participantsQuantity: 1, userId: '', zoomName: ''}
 */
