// API
import { api } from '../../api';

export const changeTaskStatusManager = ( id, isCompleted) => {
    const resp = api.tasks.changeTaskStatus(id, isCompleted).then().then();
}