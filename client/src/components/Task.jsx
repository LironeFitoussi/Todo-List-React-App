import React from "react";

function Task(props) {
    console.log(props.id);
    const handleDelete = async () => {
        try {
            const response = await fetch('/remove-task', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: props.id }), // Use props.id instead of props.key
            });

            if (response.ok) {
                console.log('Resource deleted successfully');
                window.location.reload(false);
            } else {
                console.error('Failed to delete resource');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <li>{props.content} , {props.dueTime}</li>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Task;