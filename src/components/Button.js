import React from 'react';

function Button({texto, isClick, clickHandler}){
    return (
        <button 
            className={isClick ? "clickButton" : "resetButton"}
            onClick={clickHandler}>
            {texto}
        </button>
    );
}

export default Button;