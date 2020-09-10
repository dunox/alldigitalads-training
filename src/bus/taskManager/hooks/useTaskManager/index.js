// Core
import { useEffect, useState } from 'react';

// API
import { api } from '../../api';


export const useTaskManager = ( flag, setFlag ) => {
    const [ tasks, setTasks ] = useState([]);

    useEffect( () => {
        ( async () => {
            const tasks = await api.tasks.getAll();
            setTasks(tasks);
        })();
    }, []);

    useEffect( () => {
        ( async () => {
            if(flag === true){
                const tasks = await api.tasks.getAll();
                setTasks(tasks);
                setFlag(false);
            }

        })();
    }, [flag]);
    return {
        tasks,
        setTasks
    };
};