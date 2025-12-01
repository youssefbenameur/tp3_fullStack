/* Original App.jsx content (commented out) - kept for reference
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Bienvenue from './Bienvenue'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <Bienvenue nom="Yassmine" />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

import React, { useState } from 'react';
import './App.css';
import Compteur from './Compteur';
import Bienvenue from './Bienvenue';


function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleCompletion = (id) => {
    setTodos(todos.map(todo => todo.id === id ?
      { ...todo, completed: !todo.completed } : todo ));
  };

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <Bienvenue nom="Abderrahmen" />
      <h1>Todo List</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)}
        placeholder="Ajouter une tâche" />
      <button onClick={addTask}>Ajouter</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleCompletion(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTask(todo.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
        <Compteur/>
    </div>
  );
}

function App() {
  return ( <div className="App"> <TodoApp /> </div> );
}

export default App;
