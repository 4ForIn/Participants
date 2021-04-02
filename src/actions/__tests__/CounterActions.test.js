import * as actions from '../CounterActions';
import * as types from '../ActionsTypes';

describe('CounterActions', () => {
  it(`should create action ${types.SET_QUANTITY}`, () => {
    const quantity = 1;
    const expectedAction = {
      type: types.SET_QUANTITY,
      payload: quantity,
    };
    expect(actions.setQuantity(quantity)).toEqual(expectedAction);
  });
});
