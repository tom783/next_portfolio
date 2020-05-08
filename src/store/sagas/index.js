import { all, fork } from "redux-saga/effects";
import testSaga from './testSaga';

export default function* rootSaga() {
  yield all([fork(testSaga)]);
}
