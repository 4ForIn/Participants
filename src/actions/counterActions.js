/* eslint-disable no-console */

import {
  SET_QUANTITY,
  /* SUBMIT_USER_DATA_FORM, */
  SUBMIT_USER_DATA_FORM_FAIL,
  SUBMIT_USER_DATA_FORM_SUCESS,
} from 'actions/ActionsTypes';
import { setToDatabase } from 'services/database/databaseFasade';

// counterReducer const initialState = 0;

export const setQuantity = (quantity) => ({
  type: SET_QUANTITY,
  payload: quantity,
});
export const submitUserDataFormAction = (data) => async (dispatch) => {
  try {
    await setToDatabase(data);
    dispatch({ type: SUBMIT_USER_DATA_FORM_SUCESS });
  } catch (err) {
    console.log(err);
    dispatch({ type: SUBMIT_USER_DATA_FORM_FAIL });
  }
};
