// API
import { api } from '../../api';

export const useChangeTaskStatus = () => {
    return (id, isCompleted) => {
        api.tasks.updateTaskStatus(id, isCompleted);
    };
}