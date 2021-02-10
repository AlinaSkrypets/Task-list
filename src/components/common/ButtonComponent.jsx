import React from 'react';
import Button from '@material-ui/core/Button';

function ButtonComponent({eventHandler , name, disabledProp}) {
    return(
        <Button variant="contained" disabled={disabledProp} onClick={eventHandler} color="secondary"> {name} </Button>
    )
}

ButtonComponent.defaultProps = {
    eventHandler:()=>{},
}

export default ButtonComponent