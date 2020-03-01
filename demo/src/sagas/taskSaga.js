import { call, put } from 'redux-saga/effects';
import { getAllTasks } from './../api/Tasks';
import { actionTypes } from './../common/actionTypes';

export function* resolveTasks() {

    let payload = {
        tasks: [],
        fetching: true,
        error: null
    };

    try {       

        yield put({
            type: actionTypes.tasks.GET_TASKS,
            payload: payload
        });

        payload.tasks = yield call(getAllTasks);
        payload.fetching = false;

       yield put({
            type: actionTypes.tasks.GET_TASKS,
            payload: payload
        });

    } catch (error) {
        payload.tasks = [];
        payload.fetching = false;
        payload.error = error;

        yield put({
            type: actionTypes.tasks.GET_TASKS,
            payload: payload
        });
    }
}