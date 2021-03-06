import { participantsObjects } from 'utils/DammyData';
import { CORRECT_QUANTITY, SET_QUANTITY } from 'utils/ActionsTypes';

// const initialState = [];

export default function participantsListReducer(state = participantsObjects, action) {
  // console.log('participantsListReducer :)');
  switch (action.type) {
    case 'ADD_TO_LIST':
      return [...state, action.payload];
    case 'REMOVE_FROM_LIST':
      return [...state, action.payload];
    case CORRECT_QUANTITY:
      return [...state, action.payload];
    case SET_QUANTITY:
      return [...state, action.payload];
    default:
      return state;
  }
}

/**
 * participant object =
 * {congregation: '', isSignedIn: bool, meetingId: '', name: '', participantsQuantity: 1, userId: '', zoomName: ''}
 */
