import * as types from 'actions/ActionsTypes';
import reducer from '../counterReducer';

describe('CounterRducer', () => {
  it('return initial state', () => {
    expect(reducer(undefined, {})).toEqual(0);
  });
  it(`handle ${types.SET_QUANTITY}`, () => {
    const quantity = 3;
    expect(
      reducer(0, {
        type: types.SET_QUANTITY,
        payload: quantity,
      }),
    ).toEqual(quantity);
  });
});
