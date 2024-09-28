import React from 'react';
import { useTodos } from './hooks/useTodos';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './styles/App.css';

const App = () => {
  const { todos, dispatch } = useTodos();

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
};

export default App;
