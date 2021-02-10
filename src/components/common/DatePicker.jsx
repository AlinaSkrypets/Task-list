import React from 'react';
import { DatePicker } from 'antd';

function DatePickerComponent(props) {
    return(
        <DatePicker className="create-todo__datepicker" value={props.pickedDateObject} onChange={props.pickDate} />
    )
}

export default DatePickerComponent