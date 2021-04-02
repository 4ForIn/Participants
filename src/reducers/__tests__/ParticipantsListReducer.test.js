import * as types from 'actions/ActionsTypes';
// import { participantsObjects } from 'utils/DammyData';
import reducer from '../participantsListReducer';

const newParticipant = {
  congregation: 'A',
  isSignedIn: false,
  meetingId: '22',
  name: 'B',
  participantsQuantity: 2,
  userId: 'id',
  zoomName: 'ZB',
};

describe('participantsListReducer', () => {
  it('return initial state', () => {
    expect(reducer([], {})).toEqual([]);
  });
  it(`handle ${types.ADD_PARTICIPANT}`, () => {
    expect(
      reducer([], {
        type: types.ADD_PARTICIPANT,
        payload: newParticipant,
      }),
    ).toEqual([newParticipant]);
  });
});
