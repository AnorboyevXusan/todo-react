/* eslint-disable react/prop-types */
import { useState } from "react"
import { uid } from 'uid';

export default function AddTodo({ todo, setTodo }) {

    const id = uid();
    const [task, settask] = useState('');
    const [editId, setEditId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task) {
            alert('Please enter a task');
        } else if (task && editId) {
            // Handle edit case if needed
        } else {
            const newItem = { id: id, title: task, img: '' };
            setTodo([...todo, newItem]);
            settask('');
        }
    }

    return (
        <div style={addTodoStyle}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => settask(e.target.value)}
                    style={inputStyle}
                />
                <button style={buttonStyle}>Submit</button>
            </form>
        </div>
    );
}

// Define styles as objects
const addTodoStyle = {
    margin: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
};

const inputStyle = {
    padding: '8px',
    marginRight: '8px',
};

const buttonStyle = {
    padding: '8px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};
