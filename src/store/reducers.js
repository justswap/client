import { combineReducers } from 'redux';

import authenticationReducer from './authentication/reducers';
import registrationReducer from './registration/reducers';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  registration: registrationReducer
});

export default rootReducer;
