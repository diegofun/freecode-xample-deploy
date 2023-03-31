import React from "react";
import Form from "./Form";
import "../style-sheets/List.css"
import { useState } from "react";
import Task from "./Task";

function List() {

    const [tasks, setTasks] = useState([]);

    const addTask = tarea => {
        if (tarea.text.trim()){
            tarea.text = tarea.text.trim();
            console.log(tarea);
            const updatedTasks = [tarea, ...tasks];
            setTasks(updatedTasks);
        }
    };

    const deleteTask = id => {
        const updatedTasks = tasks.filter(tarea => tarea.id !== id);
        setTasks(updatedTasks);
    };

    const completeTask = id => {
        const updatedTasks = tasks.map( tarea => {
            if (tarea.id === id){
                tarea.completed = !tarea.completed;
            }
            return tarea;
        });
        setTasks(updatedTasks);
    };

    return(
        <>
            <Form onSubmit={ addTask }/>
            <div className="list-container">
                {
                    tasks.map(tarea =>
                        <Task
                            key={tarea.id}
                            id={tarea.id}
                            text={tarea.text}
                            completed={tarea.completed}
                            completeTask={completeTask}
                            deleteTask={deleteTask}
                        />
                    )
                }
            </div>
        </>
    );
}

export default List;