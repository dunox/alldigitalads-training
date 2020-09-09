// Core
import React from 'react';

// Components
import { Checkbox } from '@fluentui/react';
import { IconButton } from "office-ui-fabric-react";

// Other
import  classes  from './Task.module.css';
import {changeTaskStatusManager} from "../../bus/taskManager/hooks/changeTaskStatus";

export const Task = ( { isCompleted, label, items, setItems, id } ) => {
    const changeStatusHandler = () => {
        setItems( items.map((item) => {
            if( id === item.id){
                item.isCompleted = !isCompleted;
            }
            return item;
        }))
        changeTaskStatusManager(id, isCompleted);
    }
    const deleteTaskHandler = () => {
        setItems( items.filter( (item) => item.id !== id));
    }
    return (
        <div className={classes.task}>
            <Checkbox
                label={label}
                onChange={changeStatusHandler}
                checked={isCompleted}
            />
            <IconButton
                iconProps={{iconName: 'Delete'}}
                title="Delete"
                aria-label="Delete"
                onClick={deleteTaskHandler}
            />
            <br/>
        </div>
    )

};