import { SET_JWT, LOGIN_IN_PROGRESS } from './constants';

const initialState = {
  JWT: '',
  loginInProgress: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JWT:
      return { ...state, JWT: action.payload };
    case LOGIN_IN_PROGRESS:
      return { ...state, loginInProgress: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
