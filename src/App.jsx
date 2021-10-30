import React, { useRef, useEffect } from 'react';

import useFormHandler from './customHooks/useFormHandler';

import './App.css';

const App = () => {
  const inputRef = useRef();

  const initialState = { name: '', email: '' };

  const { formData, changeHandler } = useFormHandler(initialState);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <main>
      <h1>Form custom hook</h1>
      <form>
        <input
          onChange={(e) => changeHandler(e)}
          ref={inputRef}
          type='text'
          name='name'
          value={formData.name}
          placeholder='Enter your name'
        />
        <input
          onChange={(e) => changeHandler(e)}
          name='email'
          type='text'
          value={formData.email}
          placeholder='Enter you email'
        />
      </form>
      <p>{formData.name}</p>
      <p>{formData.email}</p>
    </main>
  );
};

export default App;
