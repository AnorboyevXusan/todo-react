/* eslint-disable react/prop-types */
export default function Todo({ todo, removeItem, liked }) {
    return (
      <div style={todoListStyle}>
        <h2 style={headerStyle}>All Todos</h2>
        {todo.map((item) => {
          const { id, title } = item;
          return (
            <div key={id} style={todoItemStyle}>
              <h2 style={titleStyle}>{title}</h2>
              <button style={buttonStyle} onClick={() => removeItem(id)}>
                Remove
              </button>
              <button style={buttonStyle}>Edit</button>
              <button style={buttonStyle} onClick={() => liked(id)}>
                Like
              </button>
            </div>
          );
        })}
      </div>
    );
  }
  

  const todoListStyle = {
    margin: '20px',
  };
  
  const headerStyle = {
    textAlign: 'center',
    color: 'blue',
  };
  
  const todoItemStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
  };
  
  const titleStyle = {
    margin: '0',
  };
  
  const buttonStyle = {
    padding: '8px',
    margin: '4px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  
