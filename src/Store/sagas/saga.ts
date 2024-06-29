// src/Store/sagas/saga.ts
import { all, fork } from 'redux-saga/effects';
import { watchSaveData, watchNextMonth, watchPrevMonth } from './saveData'; // Ensure correct import path

function* rootSaga() {
    yield all([fork(watchSaveData), fork(watchNextMonth), fork(watchPrevMonth)]);
}

export default rootSaga;
