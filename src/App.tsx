import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Todo } from './todo.model';

function App() {
  const [todoData, setTodoData] = useState<Todo[]>([]);

  function addTodoHandler(text: string) {
    setTodoData((prev) => [{ id: Date.now().valueOf(), task: text }, ...prev]);
  }

  return (
    <div className=''>
      <AddTodo addTodoHandler={addTodoHandler} />
      <TodoList todos={todoData} />
    </div>
  );
}

export default App;
