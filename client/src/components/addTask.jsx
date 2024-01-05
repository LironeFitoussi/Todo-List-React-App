import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NewTaskForm from "./NewTaskWindow";
const AddTask = ({ onAddTask }) => {
    const [showNewTaskWindow, setShowNewTaskWindow] = useState(false);

    const addNewTask = () => {
        setShowNewTaskWindow(true);
    };

    return (
        <div>
            <button onClick={addNewTask}>
                <FontAwesomeIcon icon={faPlus} />
            </button>

            {showNewTaskWindow && (
                <div className="new-task-window">
                    <NewTaskForm />
                </div>
            )}
        </div>
    )
}

export default AddTask;
