// first try:
import { DECREMENT, INCREMENT, SET_QUANTITY } from 'utils/ActionsTypes';

export const setQuantity = (quantity) => ({
  type: SET_QUANTITY,
  payload: quantity,
});
export const increment = (quantity) => ({
  type: INCREMENT,
  payload: quantity,
});
export const decrement = (quantity) => ({
  type: DECREMENT,
  payload: quantity,
});
