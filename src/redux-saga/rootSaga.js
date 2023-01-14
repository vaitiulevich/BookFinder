import { all } from 'redux-saga/effects';
import { volumeListSaga } from './volumes';

function* rootSaga() {
  yield all([volumeListSaga()]);
}

export default rootSaga;
