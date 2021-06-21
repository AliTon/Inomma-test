import React from 'react';
import './Todos.styles.scss';
import { isEmpty, isLoaded, useFirebaseConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import TodoItem from '../components/TodoItem';
import Form from '../components/Form';
import LinearProgress from '@material-ui/core/LinearProgress';
import firebase from 'firebase';

const Todos = () => {
  useFirebaseConnect(['todos']);

  function handleRemove(id) {
    firebase.remove(`todos/${id}`);
  }

  const todos = useSelector((state) => state.firebase.ordered.todos);

  if (!isLoaded(todos)) {
    return <LinearProgress />;
  }

  if (isEmpty(todos)) {
    return <Form />;
  }

  return (
    <div className="todoContainer">
      <Form />

      <div className="title">Users List</div>
      <ul className="tableTitle">
        <div />
        <div>Name</div>
        <div>Surname</div>
        <div />
        <div />
        <div />
      </ul>
      <ul>
        {Object.keys(todos).map((key, id) => (
          <TodoItem
            key={todos[key].key}
            remove={() => handleRemove(todos[key].key)}
            data={todos[key]}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
