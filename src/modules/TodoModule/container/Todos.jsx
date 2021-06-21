import React from 'react';
import './Todos.styles.scss';
import { isEmpty, isLoaded, useFirebaseConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import TodosItem from '../components/TodosItem';
import Form from '../components/Form';
import LinearProgress from '@material-ui/core/LinearProgress';

const Todos = ({ firebase }) => {
  useFirebaseConnect([
    'todos' // { path: '/todos' } // object notation
  ]);

  function handleRemove(id) {
    firebase.remove(`todos/${id}`);
  }

  const todos = useSelector((state) => state.firebase.ordered.todos);

  if (!isLoaded(todos)) {
    return <LinearProgress />;
  }

  if (isEmpty(todos)) {
    return <Form firebase={firebase} />;
  }

  return (
    <div className="todoContainer">
      <div className="title">Users List</div>
      <ul>
        {Object.keys(todos).map((key, id) => {
          console.log(todos, '>>>>>>>>>>> todos');
          console.log(todos[key], '>>>>>>>>>>> todos[key]');
          console.log(todos[key].key, '>>>>>>>>>>> todos[key].key');
          return (
            <TodosItem
              remove={() => handleRemove(todos[key].key)}
              data={todos[key]}
              firebase={firebase}
            />
          );
        })}
      </ul>
      <Form firebase={firebase} />
    </div>
  );
};

export default Todos;
