import React from "react";
import { useState } from "react";
import Button from "./Button";
import "../style-sheets/Button.css";
import "../style-sheets/Counter.css";

function Counter(){

    const [numClicks, setNumClicks] = useState(0);

    const handleClick=() => {
        setNumClicks(numClicks + 1);
    }

    const resetCounter=() => {
        setNumClicks(0);
    }
    
    return(
        <div className='contenedor-counter'>
            <h1 className="page-title">Click counter</h1>
            <div className="counter">
                {numClicks}
            </div>
            <Button
                texto='Click'
                isClick={true}
                clickHandler={handleClick}/>
            <Button 
                texto='Reset'
                isClick={false}
                clickHandler={resetCounter}/>
        </div>
    );
}

export default Counter;