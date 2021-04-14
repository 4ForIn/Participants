import { participantsObjects } from 'utils/DammyData';
import { ADD_PARTICIPANT } from 'actions/ActionsTypes';

export default function participantsListReducer(state = participantsObjects, action) {
  const { payload, type } = action;
  switch (type) {
    case ADD_PARTICIPANT:
      return [...state, payload];
    case 'ADD_FAKE':
      return [...state, payload];
    default:
      return state;
  }
}

/**
 * const initialState = [];
 * participant object =
 * {congregation: '', isSignedIn: bool, meetingId: '', name: '', participantsQuantity: 1, userId: '', zoomName: ''}
 */
