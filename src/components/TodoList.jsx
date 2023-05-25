import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, filterType, removeTodo, toggleTodo }) => (
  <div className="todos-wrapper">
    <ul className="todos-list">
      {todos
        .filter((t) => {
          if (filterType === "complete") {
            return t.completed === true;
          } else if (filterType === "incomplete") {
            return t.completed === false;
          }
          return t;
        })
        .reverse()
        .map((t) => (
          <TodoItem
            text={t.text}
            completed={t.completed}
            index={todos.indexOf(t)}
            key={t.text}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
    </ul>
  </div>
);

export default TodoList;
