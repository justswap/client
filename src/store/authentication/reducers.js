import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { SET_JWT, LOGIN, LOGIN_ERROR, LOGIN_SUCCESS } from './constants';

const initialState = {
  JWT: '',
  loginInProgress: false
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JWT:
      return { ...state, JWT: action.payload };
    case LOGIN:
      return { ...state, loginInProgress: true };
    case LOGIN_ERROR:
      return { ...state, loginInProgress: false };
    case LOGIN_SUCCESS:
      return { ...state, loginInProgress: false };
    default:
      return state;
  }
};

const authenticationPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['JWT']
};

export default persistReducer(authenticationPersistConfig, authenticationReducer);
