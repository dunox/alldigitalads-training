// Core
import React from 'react';

import { Checkbox } from '@fluentui/react';

export const Task = ( { isCompleted, label } ) => (
    <div>
       <Checkbox 
            label={label}
            checked={isCompleted}
       />
       <br/>
    </div>
    
);