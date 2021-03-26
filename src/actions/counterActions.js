// first try:
import { SET_QUANTITY } from 'actions/ActionsTypes';

// counterReducer const initialState = 0;

export const setQuantity = (quantity) => ({
  type: SET_QUANTITY,
  payload: quantity,
});
