// Types
import { types } from "./types";

export const taskManagerActions = {
    // Sync
    fillTasks: (tasks) => ({
        type: types.TASK_MANAGER_FILL_TASKS,
        payload: tasks,
    }),
    startFetchingTasks: () => ({
        type: types.TASK_MANAGER_START_FETCHING_TASKS
    }),
    endFetchingTasks: () => ({
        type: types.TASK_MANAGER_END_FETCHING_TASKS
    }),
    // Async
    fetchTasksAsync: () => ({
        type: types.TASK_MANAGER_FETCH_TASKS_ASYNC,
    })
}