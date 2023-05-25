import React from 'react';

const TodoItem = ({ text, completed, index, removeTodo, toggleTodo }) => (
  <li>
    <button className="remove-todo" onClick={() => removeTodo(index)}>
      <i className="bi bi-x" aria-hidden="true"></i>
    </button>
    <span>{text}</span>
    <button
      className={completed ? "toggle-todo completed-todo" : "toggle-todo"}
      onClick={() => toggleTodo(index)}
    >
      <i className="bi bi-check" aria-hidden="true"></i>
    </button>
  </li>
);

export default TodoItem;
