import React from 'react';

interface TodosProps {
  todos: { id: number; task: string }[];
  deleteTodoHandler: (id: number) => void;
}

function TodoList({ todos, deleteTodoHandler }: TodosProps) {
  return (
    <>
      <ul className='flex flex-col gap-2 mt-5 p-2 border border-gray-300 rounded-md shadow'>
        {todos.map((todo) => (
          <li className='' key={todo.id}>
            <div className='flex justify-between'>
              <span>
                Id: {todo.id} Task: {todo.task}
              </span>
              <button
                className='p-1 border border-gray-200 shadow'
                type='button'
                onClick={() => deleteTodoHandler(todo.id)}>
                DELETE
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
