import React from "react";
import "../style-sheets/Calc.css"
import CalcButton from "./CalcButton";
import Display from "./Display";
import ClearButton from "./ClearButton";
import { useState } from "react";
import { evaluate } from "mathjs";

function Calc(){

    const [input, setInput] = useState('');

    const addInput = val => {
        setInput(input + val);
    };

    const calcResult = () => {
        if (input) {
            setInput( evaluate(input) );
        } else {
            alert("Por favor ingrese valores para realizar los cálculos")
        }
        
    };


    return(
        <div className="contenedor-calc">
            <h1 className="page-title">Calc</h1>
            <div className="calc">
                <Display input={input}/>
                <div className="row">
                    <CalcButton clickHandler={addInput}>1</CalcButton>
                    <CalcButton clickHandler={addInput}>2</CalcButton>
                    <CalcButton clickHandler={addInput}>3</CalcButton>
                    <CalcButton clickHandler={addInput}>+</CalcButton>
                </div>
                <div className="row">
                    <CalcButton clickHandler={addInput}>4</CalcButton>
                    <CalcButton clickHandler={addInput}>5</CalcButton>
                    <CalcButton clickHandler={addInput}>6</CalcButton>
                    <CalcButton clickHandler={addInput}>-</CalcButton>
                </div>
                <div className="row">
                    <CalcButton clickHandler={addInput}>7</CalcButton>
                    <CalcButton clickHandler={addInput}>8</CalcButton>
                    <CalcButton clickHandler={addInput}>9</CalcButton>
                    <CalcButton clickHandler={addInput}>*</CalcButton>
                </div>
                <div className="row">
                    <CalcButton clickHandler={calcResult}>=</CalcButton>
                    <CalcButton clickHandler={addInput}>0</CalcButton>
                    <CalcButton clickHandler={addInput}>.</CalcButton>
                    <CalcButton clickHandler={addInput}>/</CalcButton>
                </div>
                <div className="row">
                    <ClearButton clickHandler={() => setInput('')}>
                        Clear
                    </ClearButton>
                </div>
            </div>
        </div>
        
    );
}

export default Calc;