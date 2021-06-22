import React, { useState } from 'react';
import firebase from 'firebase';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Form.styles.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState(false);
  const [surnameErrorMessage, setSurNameErrorMessage] = useState(false);

  function addSampleTodo() {
    if (!name) {
      setNameErrorMessage(true);
      if (!surname) {
        setSurNameErrorMessage(true);
      }
      return;
    }
    if (!surname) {
      setSurNameErrorMessage(true);
      if (!name) {
        setNameErrorMessage(true);
      }
      return;
    }
    const sampleTodo = { name, surname };
    firebase.push('todos', sampleTodo);
    setName('');
    setSurName('');
  }
  return (
    <div className="container">
      <div className="inputGroup">
        <TextField
          id="outlined-basic1"
          label="name"
          variant="outlined"
          type="text"
          value={name}
          error={!!nameErrorMessage}
          onChange={({ target }) => {
            setNameErrorMessage(false);
            setName(target.value);
          }}
        />
        {nameErrorMessage && (
          <span style={{ color: 'red' }}>Name is a required field*</span>
        )}
      </div>
      <div className="inputGroup">
        <TextField
          id="outlined-basic2"
          label="surname"
          variant="outlined"
          type="text"
          value={surname}
          error={!!surnameErrorMessage}
          onChange={({ target }) => {
            setSurNameErrorMessage(false);
            setSurName(target.value);
          }}
        />
        {surnameErrorMessage && (
          <span style={{ color: 'red', fontSize: '12px' }}>
            Surname is a required field*
          </span>
        )}
      </div>

      <Button
        variant="contained"
        className="formButton"
        color="primary"
        onClick={addSampleTodo}
      >
        Add new user
      </Button>
    </div>
  );
};

export default Form;
