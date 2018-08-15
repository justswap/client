import { call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { login, refreshToken } from '../data/authentication';
import { getToken } from '../store/selectors';
import {
  loginError,
  loginInProgress,
  loginSuccess,
  logout,
  networkError,
  setJWT,
  tokenExpired,
  tokenRefreshUnknownError
} from '../store/actions';
import { LOGIN, LOGOUT, REFRESH_TOKEN, TOKEN_EXPIRED } from '../store/constants';

function* loginSaga(action) {
  const MAX_RETRIES = 3;
  let retiresCounter = 0;
  while (retiresCounter < MAX_RETRIES) {
    try {
      yield put(loginInProgress(true));
      const JWT = yield call(login, action.payload.email, action.payload.password);
      yield put(setJWT(JWT));
      yield put(loginSuccess());
      break;
    } catch (e) {
      retiresCounter += 1;
    }
  }
  if (retiresCounter === MAX_RETRIES) {
    yield put(loginError());
  }
  yield put(loginInProgress(false));
}

function* logoutSaga() {
  yield put(setJWT(''));
}

function* refreshSaga() {
  const oldJWT = yield select(getToken);
  if (oldJWT) {
    try {
      const newJWT = yield call(refreshToken, 'asdfsadf');
      yield put(setJWT(newJWT));
    } catch (error) {
      const { data } = error.response;
      if (typeof error.response === 'undefined') {
        yield put(networkError());
      } else if (error.response.status === 400) {
        if (data.non_fields_errors && data.non_fields_errors.find('Refresh has expired.')) {
          yield put(tokenExpired());
        } else {
          yield put(tokenRefreshUnknownError());
        }
      } else {
        yield put(tokenRefreshUnknownError());
      }
    }
  }
}

function* tokenExpiredSaga() {
  yield put(logout());
}

function* authenticationSagas() {
  yield [
    fork(takeLatest, LOGIN, loginSaga),
    fork(takeLatest, LOGOUT, logoutSaga),
    fork(takeLatest, REFRESH_TOKEN, refreshSaga),
    fork(takeLatest, TOKEN_EXPIRED, tokenExpiredSaga)
  ];
}

export default authenticationSagas;
