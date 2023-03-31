import React from "react";
import "../style-sheets/CalcButton.css"

function CalcButton(props){

    const isOperator = value => {
        return isNaN(value) && (value != '.' && (value != '='));
    }
    return(
        <div className={`button-container ${isOperator(props.children) ? 'operator' : ""}`.trimEnd()}
            onClick={() => props.clickHandler(props.children)}>
            {props.children}
        </div>
    );
}

export default CalcButton;