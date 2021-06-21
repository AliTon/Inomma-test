import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import './Form.styles.scss';

const Form = ({ firebase }) => {
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');

  function addSampleTodo() {
    const sampleTodo = { name, surname };
    firebase.push('todos', sampleTodo);
    setName('');
    setSurName('');
    return firebase;
  }
  return (
    <div className="container">
      <input
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <input
        type="text"
        value={surname}
        onChange={({ target }) => setSurName(target.value)}
      />
      <Button variant="contained" color="primary" onClick={addSampleTodo}>
        Add new user
      </Button>
    </div>
  );
};

export default Form;
