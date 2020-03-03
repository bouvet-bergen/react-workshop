import { actionTypes } from './../common/actionTypes';

const initialState = {
    tasks: [],
    fetching: false,
    error: null
};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.tasks.GET_TASKS:
            return { ...state, fetching: true, error: null, tasks: [] };
        case actionTypes.tasks.GET_TASKS_FAIL_OR_SUCCESS:
            return { ...state, fetching: false, error: action.payload.error, tasks: action.payload.tasks };
        default:
            return state;
    }
}