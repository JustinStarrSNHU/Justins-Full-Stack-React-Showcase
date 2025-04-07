import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetch('https://justins-fullstack-showcase-731991412305.us-central1.run.app/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const handleAddTodo = () => {
    if (input.trim()) {
      fetch('https://justins-fullstack-showcase-731991412305.us-central1.run.app/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: input, completed: false }),
      })
        .then((response) => response.json())
        .then((newTodo) => {
          setTodos([...todos, newTodo]);
          setInput('');
        });
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleEditTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo._id === id);
    setEditIndex(id);
    setInput(todoToEdit.task);
  };

  const handleSaveEdit = () => {
    fetch(`https://justins-fullstack-showcase-731991412305.us-central1.run.app/todos/${editIndex}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: input }),
    })
      .then((response) => response.json())
      .then((updatedTodo) => {
        const updatedTodos = todos.map((todo) =>
          todo._id === editIndex ? updatedTodo : todo
        );
        setTodos(updatedTodos);
        setInput('');
        setEditIndex(null);
      });
  };

  const handleDeleteTodo = (id) => {
    fetch(`https://justins-fullstack-showcase-731991412305.us-central1.run.app/todos/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setTodos(todos.filter((todo) => todo._id !== id));
    });
  };

  const handleToggleComplete = (id) => {
    const todoToToggle = todos.find((todo) => todo._id === id);
    fetch(`https://justins-fullstack-showcase-731991412305.us-central1.run.app/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !todoToToggle.completed }),
    })
      .then((response) => response.json())
      .then((updatedTodo) => {
        const updatedTodos = todos.map((todo) =>
          todo._id === id ? updatedTodo : todo
        );
        setTodos(updatedTodos);
      });
  };

  return (
    <div className="padding-bottom">
      <h1>ToDo List</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder={editIndex !== null ? "Edit this task" : "Add a new task"}
      />
      <button onClick={editIndex !== null ? handleSaveEdit : handleAddTodo}>
        {editIndex !== null ? "Save" : "Add"}
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.task}
            <button className="edit-button" onClick={() => handleEditTodo(todo._id)}>Edit</button>
            <button className="delete-button" onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
            <button className="complete-button" onClick={() => handleToggleComplete(todo._id)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;