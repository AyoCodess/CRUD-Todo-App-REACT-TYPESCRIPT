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
    <form onSubmit={onSubmitHandler}>
      <label htmlFor='addTodo'>Add a new Todo</label>
      <input id='addTodo' type='text' ref={inputRef} />
      <button type='submit'>Add Todo</button>
    </form>
  );
}

export default AddTodo;
