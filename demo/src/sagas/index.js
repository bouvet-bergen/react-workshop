import { all, takeEvery } from "redux-saga/effects";
import { actionTypes } from './../common/actionTypes';
import { resolveTasks } from './taskSaga';

export function* sagas() {
    yield all ([
        takeEvery(actionTypes.tasks.GET_TASKS, resolveTasks)
    ]);
}