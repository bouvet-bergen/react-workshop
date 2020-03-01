import { actionTypes } from './../common/actionTypes';

const initialState = {
    tasks: [],
    fetching: false,
    error: null
};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        // Get tasks
        case actionTypes.tasks.GET_TASKS:
            return { ...state, fetching: action.payload.fetching, error: action.payload.error, tasks: action.payload.tasks };
        // Return default
        default:
            return state;
    }
}