import { REGISTER, REGISTER_NETWORK_ERROR, REGISTER_SUCCESS } from './constants';

export const register = (email, username, password) => ({ type: REGISTER, payload: { email, username, password } });
export const registerNetworkError = () => ({ type: REGISTER_NETWORK_ERROR });
export const registerSuccess = () => ({ type: REGISTER_SUCCESS });