// Core
import { all } from 'redux-saga/effects';

// Watchers
import { watchTaskManager} from '../bus/taskManager/watchers';


export function* rootSaga() {
    yield all[ watchTaskManager() ];
}