import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const exampleTodos = [
  {
    text: "Make a Todo List",
    completed: true,
  },
  {
    text: "Make a Task list",
    completed: true,
  },
  {
    text: "Add a new entry",
    completed: false,
  }
];

const App = () => {
  const [todos, setTodos] = useState(exampleTodos);
  const [filterType, setFilterType] = useState("allTasks");

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        text,
        completed: false,
      },
    ]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const setFilter = (filterType) => {
    setFilterType(filterType);
  };

  return (
    <>
    <Helmet>
        <title>Todo List</title>
       <link rel="icon"
          href='./icon.png'/>
        </Helmet>
    <div className="app-wrapper shadow-lg">
      <h1 className="display-6 p-4 text-center">Todo List</h1>
      <Filters setFilter={setFilter} />
      <TodoList
        todos={todos}
        filterType={filterType}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
      <TodoForm addTodo={addTodo} />
    </div>
    </>
  );
};


const Filters = ({ setFilter }) => {
  const [activeFilter, setActiveFilter] = useState("allTasks");

  const handleFilterClick = (filter) => {
    setFilter(filter);
    setActiveFilter(filter);
  };

  return (
    <div className="filters-wrapper">
      <button
        onClick={() => handleFilterClick("allTasks")}
        className={activeFilter === "allTasks" ? "active" : ""}
      >
        <span>ALL TASKS</span>
      </button>
      <button
        onClick={() => handleFilterClick("incomplete")}
        className={activeFilter === "incomplete" ? "active" : ""}
      >
        <span>IN PROGRESS</span>
      </button>
      <button
        onClick={() => handleFilterClick("complete")}
        className={activeFilter === "complete" ? "active" : ""}
      >
        <span>FINISHED</span>
      </button>
    </div>
  );
};


export default App;
