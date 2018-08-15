import { combineReducers } from 'redux';
import authenticationReducer from './authentication/reducers';

const rootReducer = combineReducers({
  authentication: authenticationReducer
});

export default rootReducer;
