import { fork } from 'redux-saga/effects';
import authenticationnSaga from './authentication';

function* rootSaga() {
  yield [fork(authenticationnSaga)];
}

export default rootSaga;
