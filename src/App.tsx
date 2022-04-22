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

  function deleteTodoHandler(id: number) {
    console.log(id);
    setTodoData((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-blue-500 text-3xl mt-5'> Typescript Todo app</h1>
      <AddTodo addTodoHandler={addTodoHandler} />
      <TodoList todos={todoData} deleteTodoHandler={deleteTodoHandler} />
    </div>
  );
}

export default App;
