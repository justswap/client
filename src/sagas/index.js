import { fork } from 'redux-saga/effects';
import authenticationSaga from './authentication';
import registrationSaga from './registration';

function* rootSaga() {
  yield [fork(authenticationSaga), fork(registrationSaga)];
}

export default rootSaga;
