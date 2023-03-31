import React from "react";
import Button from "./Button";
import "../style-sheets/Button.css";
import "../style-sheets/Counter.css";

class Counter extends React.Component {
    constructor(){
        super();
        this.state = { numClicks:0 };
        this.handleClick = this.handleClick.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
    }

    handleClick() {
        this.setState(({ numClicks }) => ({ numClicks : numClicks + 1 }));
    }

    resetCounter() {
        this.setState({ numClicks: 0 });
    }

    render(){
        return(
            <div className='contenedor-counter'>
                <h1 className="page-title">Click counter</h1>
                <div className="counter">
                    {this.state.numClicks}
                </div>
                <Button
                    texto='Click'
                    isClick={true}
                    clickHandler={this.handleClick}/>
                <Button 
                    texto='Reset'
                    isClick={false}
                    clickHandler={this.resetCounter}/>
            </div>
        );
    }
}

export default Counter;