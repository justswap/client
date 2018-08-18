import { REGISTER } from './constants';

const initialState = {
  registrationInProgress: false
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, registrationInProgress: true };
    default:
      return state;
  }
};

export default registrationReducer;
