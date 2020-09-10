// Core
import React, {useState} from 'react';

// Components
import { Checkbox } from '@fluentui/react';
import { IconButton } from "office-ui-fabric-react";

// Other
import  classes  from './Task.module.css';

export const Task = ( { isCompleted, label, id, updateTask, removeTask, setFlag } ) => {
    const [completed, setCompleted] = useState(isCompleted);

    const onUpdateHandler = ( e, checked ) => {
        setCompleted(checked);
        updateTask(id, checked);
    };
    const onDeleteHandler = ( )  => {
        removeTask(id);
        setFlag(true);
    }
    return (
        <div className={classes.task}>
            <Checkbox
                label={label}
                onChange={onUpdateHandler}
                checked={completed}
            />
            <IconButton
                iconProps={{iconName: 'Delete'}}
                title="Delete"
                aria-label="Delete"
                onClick={onDeleteHandler}
            />
            <br/>
        </div>
    )

};