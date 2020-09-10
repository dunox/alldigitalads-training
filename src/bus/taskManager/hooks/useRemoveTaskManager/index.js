// API
import { api } from '../../api';

export const useRemoveTaskManager = () => {
    return (id) => {
        api.tasks.removeTask(id);
    };
}