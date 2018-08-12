import { SET_JWT } from './constants';

const initialState = {
  JWT: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JWT:
      return { ...state, JWT: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
