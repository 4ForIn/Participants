import { DECREMENT, INCREMENT, SET_QUANTITY } from 'utils/ActionsTypes';

const initialState = 0;

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUANTITY:
      return action.payload;
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
}
