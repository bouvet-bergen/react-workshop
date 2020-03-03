import { actionTypes } from './../common/actionTypes';


export function getTasks() {
    return {
        type: actionTypes.tasks.GET_TASKS,
        payload: null
    };
}

export function getTasksWithoutSaga(data) {
    return {
        type: actionTypes.tasks.GET_TASKS_FAIL_OR_SUCCESS,
        payload: data
    };
}

