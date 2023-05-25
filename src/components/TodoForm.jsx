import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Your Task Here"
        />
        <button type="submit">
        <i class="bi bi-arrow-left-short"></i>
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
