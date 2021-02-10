import React, { useEffect, useState } from 'react';
import {formatTime, formatDate} from '../../utilities/utilities';

function Time() {
    const [showTimeAndDate, setShowTimeAndDate] = useState(false)
    const [time, setTime] = useState(new Date())
    const [timeCheckbox, setTimeCheckbox] = useState(false)

    //toggle date and time block by click on "Show Date&Time" button
    const toggleTimeAndDateBlock = () => {
        setShowTimeAndDate(!showTimeAndDate)
    };

    const clockHandler = () => {
        setTime(new Date())
    }

    //toggle time checkbox
    const toggleTimeCheckbox = () => {
        setTimeCheckbox(!timeCheckbox)
    }

    // options of text inside "Show Date" button
    const buttonText = ["Hide Date", "Show Date"]

    useEffect(
        () => {
            let interval = setInterval(clockHandler,1000)
            return () => {
                clearInterval(interval);
            };
        },[]
    );

    return (
        <>
            <button className="button show-date__button" onClick={toggleTimeAndDateBlock}>{showTimeAndDate? buttonText[0] : buttonText[1]}</button>
            { showTimeAndDate &&
                (<div className="info-wrapper" >
                    <p>{formatDate(time)}</p>
                        <label><input type="checkbox" onChange={toggleTimeCheckbox} checked={timeCheckbox} />Show time</label>
                        <span className="time">{timeCheckbox? formatTime(time) : null}</span>
                </div>)
            }
        </>
    )
}

export default Time




