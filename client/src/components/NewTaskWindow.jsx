import React, { useState } from 'react';

const NewTaskForm = () => {
    const [taskData, setTaskData] = useState({
        title: '',
        dueTime: '',
    });


    const handleFormSubmit = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        try {
            await fetch('/new-task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(taskData),
            });

            // Reset the form after successful submission
            setTaskData({
                title: '',
                dueTime: '',
            });
        } catch (error) {
            console.error('Error sending POST request:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="title"
                value={taskData.title}
                placeholder="Task Title"
                onChange={handleInputChange}
            />
            <input
                type="date"
                name="due time"
                value={taskData.dueTime}
                placeholder="Task Description"
                onChange={handleInputChange}
            />
            <button type="submit">Create Task</button>
        </form>
    );
};

export default NewTaskForm;
