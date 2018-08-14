import { SET_JWT, LOGIN, LOGOUT, LOGIN_IN_PROGRESS } from './constants';

export const setJWT = JWT => ({ type: SET_JWT, payload: JWT });
export const login = (email, password) => ({ type: LOGIN, payload: { email, password } });
export const logout = () => ({ type: LOGOUT });
export const loginInProgress = inProgress => ({ type: LOGIN_IN_PROGRESS, payload: inProgress });
