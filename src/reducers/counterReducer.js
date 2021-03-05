import { DECREMENT, INCREMENT, SET_QUANTITY } from 'utils/ActionsTypes';

const initialState = 0;

export default function counterReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case SET_QUANTITY:
      // eslint-disable-next-line no-console
      console.log(payload);
      return payload;

    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
}
