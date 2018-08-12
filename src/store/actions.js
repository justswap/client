import { SET_JWT } from './constants';

export const setJWT = JWT => ({ type: SET_JWT, payload: JWT });
