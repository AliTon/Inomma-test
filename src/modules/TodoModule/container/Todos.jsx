import React from 'react';
import firebase from 'firebase';
import { isEmpty, isLoaded, useFirebaseConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import TodoItem from '../components/TodoItem';
import Form from '../components/Form';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './Todos.styles.scss';


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
    <>
      <Form />

      <div className="todoContainer">
        <div className="title">Users List</div>
        <Table border="1">
          <TableHead>
            <TableRow>
              <TableCell className="tableSectionTitle">Name</TableCell>
              <TableCell className="tableSectionTitle">Surname</TableCell>
              <TableCell className="tableSectionTitle">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(todos).map((key, id) => (
              <TodoItem
                key={todos[key].key}
                remove={() => handleRemove(todos[key].key)}
                data={todos[key]}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Todos;
