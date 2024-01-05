import React, { useState, useEffect } from "react";
import Task from "./Task";

function List() {
    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
        fetch("/todo-data")
            .then(response => response.json())
            .then(data => {
                setBackendData(data);
                console.log(data);
            });
    }, []);

    return <div>
        <h1>Task List</h1>
        <ul>
            {backendData.map(task => (
                <Task
                    id={task.id}
                    content={task.description}
                    dueTime={task.dueTime}
                />

            ))}

        </ul>

    </div>
}

export default List;