// Core
import React, {useState} from 'react';

// Components
import { Text, TextField } from '@fluentui/react';
import { IconButton } from "office-ui-fabric-react";
import { List } from './components/list';

//Hooks
import {useAddTaskManager} from "./hooks/useAddTaskManager";
import {useChangeTaskStatus} from "./hooks/useChangeTaskStatus";
import {useRemoveTaskManager} from "./hooks/useRemoveTaskManager";
import { useTaskManager } from './hooks/useTaskManager'

// Other
import classes from './TaskManager.module.css'
import {Preloader} from "../../elements/preloader";


export const TaskManager = ({ inputText , setInputText }) => {
    const [ flag, setFlag ] = useState(false);
    const { tasks, setTasks, isFetching } = useTaskManager(flag, setFlag);
    const updateTask = useChangeTaskStatus();
    const addTask = useAddTaskManager();
    const removeTask = useRemoveTaskManager();

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTaskHandler = (e) => {
        if (inputText.length > 0) {
            e.preventDefault();
            addTask(inputText);
            setInputText("");
            setFlag(true);
        } else {
            return;
        }

    }

    return (
       <div>
       <Text variant="xLarge">
            Task Manager
        </Text>
       <div className={classes.input}>
           <TextField
               value={inputText}
               onChange={inputTextHandler}
           />
           <IconButton
               iconProps={{iconName: 'Add'}}
               title="Add"
               aria-label="Add"
               onClick={submitTaskHandler}
           />
           <Preloader isFetching={isFetching}/>
       </div>

        <List items={tasks} updateTask={updateTask} removeTask={removeTask} setFlag={setFlag}/>
    </div> 
    )
};