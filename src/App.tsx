import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const Todos = [
  { id: 1, task: 'go to school' },
  { id: 2, task: 'go to gym' },
];

function App() {
  return (
    <div className=''>
      <AddTodo />
      <TodoList todos={Todos} />
    </div>
  );
}

export default App;
