import React, {useState} from "react";
import "../style-sheets/Form.css";
import { v4 as uuidv4 } from "uuid";

function Form(props) {

    const [input, setInput] = useState("");

    const hanldeChange = e => {
        setInput(e.target.value);
    };

    const handleSend = e => {
        e.preventDefault();
        
        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        };

        props.onSubmit(newTask);
    };

    return(
        <form 
            className="task-form"
            onSubmit={handleSend}
        >
            <input 
                className="task-input"
                type="text"
                placeholder="Escribe una tarea"
                name="texto"
                onChange={hanldeChange}
            />
            <button className="task-button">
                Agregar tarea
            </button>
        </form>
    );
}

export default Form;