import React from "react";
import "../style-sheets/Tasks.css"
import List from "./List"


function Tasks(){

    return(
        <div className="contenedor-tasks">
            <h1 className="page-title">Tasks</h1>
            <div className="myTasks">
                <h1>Mis tareas</h1>
                <List />
            </div>
        </div>
        
    );
}

export default Tasks;