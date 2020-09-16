// Core
import React from 'react';

// Elements
import { Task } from '../../../../elements/task';

export const List = ({ items, updateTask, removeTask , setFlag}) => {
    const listJSX = items.map((
        {
            id,
            title,
            isCompleted
        }
    ) => (
        <Task
            id={id}
            label={title}
            isCompleted={isCompleted}
            items={items}
            updateTask={updateTask}
            removeTask={removeTask}
            setFlag={setFlag}
        />
    ))

    return (
        <>
            {listJSX}
        </>
    );    
};