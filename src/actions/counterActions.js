// first try:
import { SET_QUANTITY } from 'utils/ActionsTypes';

// counterReducer const initialState = 0;

export const setQuantity = (quantity) => ({
  type: SET_QUANTITY,
  payload: quantity,
});
