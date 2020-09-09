// Core
import React from 'react';

// Components
import { Text, TextField } from '@fluentui/react';
import { IconButton } from "office-ui-fabric-react";
import { List } from './components/list';

// Other
import { useTaskManager } from './hooks/useTaskManager'
import classes from './TaskManager.module.css'

export const TaskManager = ({ inputText ,setInputText }) => {
    const { tasks, setTasks } = useTaskManager();
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTaskHandler = (e) => {
        e.preventDefault();
        setTasks([
            ...tasks,
            {
                id: Math.random() * 1000,
                title: inputText,
                isCompleted: false,
            }
        ]);
        setInputText("");
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
       </div>

        <List items={tasks} setItems={setTasks}/>
    </div> 
    )
};