import React, { FormEvent, useRef } from 'react';

function AddTodo() {
  const inputRef = useRef<HTMLInputElement>(null);

  function onSubmitHandler(event: FormEvent) {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    console.log(enteredText);
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
