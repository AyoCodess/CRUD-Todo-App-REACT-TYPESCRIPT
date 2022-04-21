import React from 'react';

interface TodosProps {
  todos: { id: number; task: string }[];
}

function TodoList({ todos }: TodosProps) {
  return (
    <>
      {todos.map((todo) => (
        <ul>
          <li>
            Id: {todo.id} Task: {todo.task}
          </li>
        </ul>
      ))}
    </>
  );
}

export default TodoList;
