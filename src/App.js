// Core
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Text, initializeIcons } from '@fluentui/react';

// Instruments
import { store } from "./init/store";

// Components
import { TaskManager } from './bus/taskManager';

initializeIcons();

export const App = () => {
    const [ inputText, setInputText ] = useState("");
    return (
        <Provider store={ store }>
            <Text variant="mega">
                App
            </Text>
            <TaskManager inputText={inputText} setInputText={setInputText}/>
        </Provider>
    )

};
