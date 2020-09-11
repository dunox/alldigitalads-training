// Core
import { put, call, delay } from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';

export function* fetchTasks() {
    try {
        // Spinner on
        const response = yield call(api.tasks.getAll);
        const tasks = yield call( [response, response.json]);

        if( response.status !== 200) {
            throw new Error('Some error');
        }
        yield delay(2000);
        yield put(taskManagerActions.fillTasks(tasks));
    } catch (e) {
        // Put an Error in Redux
    } finally {
        // Spinner off
    }
}