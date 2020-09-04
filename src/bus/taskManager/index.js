// Core
import React from 'react';
import { Text } from '@fluentui/react';

// Elements
import { List } from './components/list';

import { useTaskManager } from './hooks/useTaskManager'

export const TaskManager = () => {
    const { tasks } = useTaskManager();
    return (
       <div>
       <Text variant="xLarge">
            Task Manager
        </Text>
        <List items={tasks} />
    </div> 
    )
};