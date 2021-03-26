import { SET_QUANTITY } from 'actions/ActionsTypes';

const initialState = 0;

export default function counterReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case SET_QUANTITY:
      // eslint-disable-next-line no-console
      console.log(payload);
      return payload;

    default:
      return state;
  }
}
