// src/Store/sagas/saveData.ts
import { takeLatest, put } from 'redux-saga/effects';
import { saveDataRequest, saveNextMonthRequest, savePrevMonthRequest } from '../action';
import { SaveDataAction, SaveMonthAction } from '../constants/actionTypes';

function* saveDataSaga(action: SaveDataAction) {
    try {
        // Perform save data logic here
        yield put({ type: 'SAVE_DATA', payload: action.payload });
    } catch (error) {
        console.error('Error saving data:', error);
    }
}

function* nextMonthSaga(action: SaveMonthAction) {
    try {
        // Perform next month logic here
        yield put({ type: 'SET_NEXT_MONTH', payload: action.payload });
    } catch (error) {
        console.error('Error setting next month:', error);
    }
}

function* prevMonthSaga(action: SaveMonthAction) {
    try {
        // Perform previous month logic here
        yield put({ type: 'SET_PREV_MONTH', payload: action.payload });
    } catch (error) {
        console.error('Error setting previous month:', error);
    }
}

export function* watchSaveData() {
    yield takeLatest(saveDataRequest.type, saveDataSaga);
}

export function* watchNextMonth() {
    yield takeLatest(saveNextMonthRequest.type, nextMonthSaga);
}

export function* watchPrevMonth() {
    yield takeLatest(savePrevMonthRequest.type, prevMonthSaga);
}
