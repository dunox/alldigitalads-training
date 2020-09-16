// Core
import React from "react";

// Components
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

// Other
import  classes  from './Preloader.module.css';


export const Preloader = ( { isFetching } ) => {
    const loadingJSX = isFetching ? (
        <>
            <div className={classes.overlay}></div>
            <Spinner
                className={classes.preloader}
                size={SpinnerSize.large}
                label="Loading is in progress..."
            />
        </>
        ) : " ";

    return (
        <>
            {loadingJSX}
        </>
    )
}