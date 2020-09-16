// Types
import { types } from "./types";

const initialState = {
    isFetching: false,
    tasks: [],
};

export const taskManagerReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case types.TASK_MANAGER_START_FETCHING_TASKS:
            return {
                ...state,
                isFetching: true
            }
        case types.TASK_MANAGER_FILL_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case types.TASK_MANAGER_END_FETCHING_TASKS:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state;
    }
};