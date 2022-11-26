import React from 'react';
const TodoItem = ({ id, text, complate, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <input type="checkbox" onChange={() => toggleTodo(id)} checked={complate} />
      {!complate ? (
        <span>{text}</span>
      ) : (
        <span>
          <del>{text}</del>
        </span>
      )}

      <button onClick={() => deleteTodo(id)}>x</button>
    </div>
  );
};

export default TodoItem;
