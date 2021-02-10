import React, { useState } from 'react';
import ButtonComponent from "../common/ButtonComponent";

function Counter() {
    const [counter, setCounter] = useState(0)

    //Increment function
    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    //Decrement function
    const decrementCounter = () => {
        if ((counter) >= 1 ) {
            setCounter(counter - 1);
        }
    }

    // Reset function
    const resetCounter = () => {
        setCounter(0);
    }

    return (
        <div className="counter-wrapper">
            <p>Counter</p>
            <p className="counter-value">{counter} </p>
            <div className="buttons-wrapper">
                <ButtonComponent name="increment" eventHandler={incrementCounter} />
                <ButtonComponent name="decrement" eventHandler={decrementCounter} />
                <ButtonComponent name="reset" eventHandler={resetCounter} />
            </div>
        </div>
    );
}

export default Counter

