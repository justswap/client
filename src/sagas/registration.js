import { fork, takeLatest, call, put } from 'redux-saga/effects';

import { REGISTER } from 'store/registration/constants';
import { register } from 'data/registration';
import { registerNetworkError, registerSuccess } from 'store/registration/actions';

function* registerSaga(action) {
  const { email, username, password } = action.payload;
  try {
    yield call(register, email, username, password);
    yield put(registerSuccess());
  } catch (error) {
    if (error.response === 'undefined') {
      yield put(registerNetworkError());
    }
  }
}

function* registrationSagas() {
  yield [fork(takeLatest, REGISTER, registerSaga)];
}

export default registrationSagas;
