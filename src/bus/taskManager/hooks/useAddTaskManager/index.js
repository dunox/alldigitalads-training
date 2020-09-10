// API
import { api } from '../../api';

export const useAddTaskManager = () => {
    return (title) => {
        api.tasks.addTask(title);
    };
}