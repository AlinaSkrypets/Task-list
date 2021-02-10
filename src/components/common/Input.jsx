import React from 'react';
import TextField from '@material-ui/core/TextField';

function Input(props) {
    return(
        <TextField className="create-todo__input" onChange={props.taskInputHandler} id="standard-basic" label="Enter Task"/>
    )
}

export default Input
