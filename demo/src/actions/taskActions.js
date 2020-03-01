import { actionTypes } from './../common/actionTypes';

export function getTasks(data) {
    return {
        type: actionTypes.tasks.GET_TASKS,
        payload: {
            tasks: data.tasks,
            fetching: data.fetching,
            error: data.error
        }
    };
}