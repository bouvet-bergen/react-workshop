import { call, put } from 'redux-saga/effects';
import { getAllTasks } from './../api/Tasks';
import { actionTypes } from './../common/actionTypes';

export function* resolveTasks() {

    try {  
        const tasks = yield call(getAllTasks);

       yield put({
            type: actionTypes.tasks.GET_TASKS_FAIL_OR_SUCCESS,
            payload: {
                tasks,
                error: null
            }
        });

    } catch (error) {       

        yield put({
            type: actionTypes.tasks.GET_TASKS_FAIL_OR_SUCCESS,
            payload: {
                tasks: [],
                error: error
            }
        });
    }
}