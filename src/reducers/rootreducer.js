import { combineReducers } from 'redux';
import appStateReducer from './appStateReducer';
import counterReducer from './counterReducer';
import participantsListReducer from './participantsListReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  appState: appStateReducer,
  counter: counterReducer,
  participantsList: participantsListReducer,
  user: userReducer,
});
export default rootReducer;
