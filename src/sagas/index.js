import { fork } from 'redux-saga/effects';
import authenticationSaga from './authentication';

function* rootSaga() {
  yield [fork(authenticationSaga)];
}

export default rootSaga;
