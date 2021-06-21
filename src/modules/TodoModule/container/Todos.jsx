import React from 'react';
import "./Todos.styles.scss";
import {isEmpty, isLoaded, useFirebaseConnect} from "react-redux-firebase";
import {useSelector} from "react-redux";
import TodosItem from "../components/TodosItem";
import Form from "../components/Form";

const Todos = ({firebase}) => {
  useFirebaseConnect([
    'todos' // { path: '/todos' } // object notation
  ])



  function handleRemove(id) {
    console.log(firebase, id)
    // firebase.set(`todos/${id}`,{name: "Karo"})
    firebase.remove(`todos/${id}`)
  }

  const todos = useSelector((state) => state.firebase.ordered.todos)

  if (!isLoaded(todos)) {
    return <div>Loading...</div>
  }

  if (isEmpty(todos)) {
    return  <Form firebase={firebase} />
  }

  return (
      <div>
        <ul>
          {Object.keys(todos).map((key, id) => {
            return <TodosItem remove={() => handleRemove(todos[key].key)} data={todos[key]}/>
          })}
        </ul>
        <Form firebase={firebase} />
      </div>
  )
}

export default Todos;