import React, { FormEvent, useRef } from 'react';

interface addTodo {
  addTodoHandler: (text: string) => void;
}

function AddTodo({ addTodoHandler }: addTodo) {
  const inputRef = useRef<HTMLInputElement>(null);

  function onSubmitHandler(event: FormEvent) {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    console.log(enteredText);
    addTodoHandler(enteredText);
  }

  return (
    <form className='mt-5' onSubmit={onSubmitHandler}>
      <label htmlFor='addTodo'>Add a new Todo</label>
      <div className='flex gap-4'>
        <input
          id='addTodo'
          type='text'
          ref={inputRef}
          className='p-1 border border-gray-200 shadow'
        />
        <button type='submit' className='p-1 border border-gray-200 shadow'>
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
