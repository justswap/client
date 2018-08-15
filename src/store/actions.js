import {
  SET_JWT,
  LOGIN,
  LOGOUT,
  LOGIN_IN_PROGRESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  REFRESH_TOKEN,
  TOKEN_EXPIRED,
  NETWORK_ERROR,
  TOKEN_REFRESH_UNKNOWN_ERROR
} from './constants';

export const setJWT = JWT => ({ type: SET_JWT, payload: JWT });
export const login = (email, password) => ({ type: LOGIN, payload: { email, password } });
export const logout = () => ({ type: LOGOUT });
export const loginInProgress = inProgress => ({ type: LOGIN_IN_PROGRESS, payload: inProgress });
export const loginError = () => ({ type: LOGIN_ERROR });
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const refreshToken = () => ({ type: REFRESH_TOKEN });
export const tokenExpired = () => ({ type: TOKEN_EXPIRED });
export const networkError = () => ({ type: NETWORK_ERROR });
export const tokenRefreshUnknownError = () => ({ type: TOKEN_REFRESH_UNKNOWN_ERROR });
