import { call, put } from 'redux-saga/effects';
import { getAllTasks } from './../api/Tasks';
import { actionTypes } from './../common/actionTypes';
import { WebClient } from 'bouvet-react-lib';

export function* resolveTasks() {

    try {

        console.log('Hey saga!');
        
        var client = new WebClient();
        client.url = 'https://jsonplaceholder.typicode.com/posts/42';
        const data = client.getRequest('get');

        console.log(data);

        const tasks = yield call(getAllTasks);

       yield put({
            type: actionTypes.tasks.GET_TASKS_FAIL_OR_SUCCESS,
            payload: {
                tasks,
                error: null
            }
        });

    } catch (error) {       
        console.log(error);
        yield put({
            type: actionTypes.tasks.GET_TASKS_FAIL_OR_SUCCESS,
            payload: {
                tasks: [],
                error: error
            }
        });
    }
}