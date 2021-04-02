import React from 'react';
import Header from '../Header';
import renderWithReduxState from '../utils/HeaderTestSetup';

const initUser = {
  congregation: 'initCongr',
  isSignedIn: false,
  meetingId: 'initId',
  name: 'InitName',
  participantsQuantity: 1,
  userId: 'initID',
  zoomName: 'initZoomName',
};

describe('Header component', () => {
  it('render user name from initState', () => {
    const { container } = renderWithReduxState(<Header />, { initialState: { user: initUser } });
    expect(container).toHaveTextContent(initUser.name);
  });
});

/*

const rootReducer = combineReducers({
  appState: appStateReducer,
  counter: counterReducer,
  participantsList: participantsListReducer,
  user: userReducer,
}); 
*/
