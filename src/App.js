// Core
import React, { useState } from 'react';
import { Text, initializeIcons } from '@fluentui/react';

// Components
import { TaskManager } from './bus/taskManager';

initializeIcons();

export const App = () => {
    const [ inputText, setInputText ] = useState("");
    return (
        <>
            <Text variant="mega">
                App
            </Text>
            <TaskManager inputText={inputText} setInputText={setInputText}/>
        </>
    )

};
