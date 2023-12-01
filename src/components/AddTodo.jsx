import { useState } from "react";
import { uid } from 'uid';

export default function AddTodo({ todo, setTodo }) {
  const id = uid();
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      alert('Please enter a task');
    } else if (task && editId) {
      const updatedTodos = todo.map((item) =>
        item.id === editId ? { ...item, title: task } : item
      );
      setTodo(updatedTodos);
      setTask('');
      setEditId(null);
    } else {
      const newItem = { id: id, title: task, img: '' };
      setTodo([...todo, newItem]);
      setTask('');
    }
  };

  const handleEdit = (id, title) => {
    setTask(title);
    setEditId(id);
  };

  return (
    <div style={addTodoStyle}>
      <form onSubmit={handleSubmit}>
        <div style={inputContainerStyle}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            {editId ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
      {editId && (
        <button style={editButtonStyle} onClick={() => setEditId(null)}>
          Cancel Edit
        </button>
      )}
      <ul style={todoListStyle}>
        {todo.map((item) => (
          <li key={item.id} style={todoItemStyle}>
            {item.title}
            <button style={editButtonStyle} onClick={() => handleEdit(item.id, item.title)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
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

const inputContainerStyle = {
  display: 'flex',
};

const inputStyle = {
  flex: '1',
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

const editButtonStyle = {
  padding: '8px',
  backgroundColor: '#ffcc00',
  color: 'black',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '8px',
};

const todoListStyle = {
  listStyleType: 'none',
  padding: '0',
};

const todoItemStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  margin: '4px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
