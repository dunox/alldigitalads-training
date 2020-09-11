// Core
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

// API
import { api } from '../../api';
import {taskManagerActions} from "../../actions";

// const mockData = [
//     {
//         id: 'A-1',
//         title: 'Learn Git',
//         isCompleted: false
//     }
// ];

export const useTaskManager = ( flag, setFlag ) => {
    const dispatch = useDispatch();
    // const [ tasks, setTasks ] = useState([]);
    const { tasks } = useSelector( (state) => state.taskManager);

    useEffect( () => {
        dispatch(taskManagerActions.fetchTasksAsync(tasks))
    }, [dispatch]);

    // useEffect( () => {
    //     ( async () => {
    //         if(flag === true){
    //             const tasks = await api.tasks.getAll();
    //             // setTasks(tasks);
    //             setFlag(false);
    //         }
    //
    //     })();
    // }, [flag]);
    return {
        tasks,
        // setTasks
    };
};