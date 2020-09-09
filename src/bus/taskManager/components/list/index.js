// Core
import React from 'react';

// Elements
import { Task } from '../../../../elements/task';

export const List = ({ items, setItems }) => {
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
            setItems={setItems}
            items={items}
        />
    ))

    return (
        <>
            {listJSX}
        </>
    );    
};