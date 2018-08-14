import { call, put, takeLatest, fork } from 'redux-saga/effects';
import { login } from '../data/authentication';
import { setJWT, loginInProgress } from '../store/actions';
import { LOGIN, LOGOUT } from '../store/constants';

function* loginAction(action) {
  try {
    yield put(loginInProgress(true));
    const JWT = yield call(login, action.payload.email, action.payload.password);
    yield put(setJWT(JWT));
    yield put(loginInProgress(false));
  } catch (e) {
    console.log(e);
  }
}

function* logoutAction() {
  try {
    yield put(setJWT(''));
  } catch (e) {
    console.log(e);
  }
}

function* authenticationSagas() {
  yield [
    fork(takeLatest, LOGIN, loginAction),
    fork(takeLatest, LOGOUT, logoutAction)
  ];
}

export default authenticationSagas;
