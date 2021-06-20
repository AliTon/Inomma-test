import MainLayout from "./containers/MainLayout";
import ErrorBoundary from "./components/ErrorBoundary";
import {isLoaded, isEmpty, useFirebaseConnect} from "react-redux-firebase";
import {useSelector} from "react-redux";
import firebase from "firebase";

function Todos() {
    useFirebaseConnect([
        'todos' // { path: '/todos' } // object notation
    ])

    function addSampleTodo() {
        const sampleTodo = { name: 'Albert', surname: 'Tonoyan' }
        return firebase.push('todos', sampleTodo)
    }

    function handleREmove(id) {
        console.log(firebase, id)
        // firebase.set(`todos/${id}`,{name: "Karo"})
        firebase.remove(`todos/${id}`)
    }

    const todos = useSelector((state) => state.firebase.ordered.todos)

    if (!isLoaded(todos)) {
        return <div>Loading...</div>
    }

    if (isEmpty(todos)) {
        return  <button onClick={addSampleTodo}>Add</button>

    }

    return (
        <div>
            <ul>
                {Object.keys(todos).map((key, id) => {
                    return <h1 onClick={() => handleREmove(todos[key].key)}>{todos[key].value.name} </h1>
                })}
            </ul>
            <button onClick={addSampleTodo}>Add</button>
        </div>
    )
}

function App() {
  return (
      <ErrorBoundary>
        <MainLayout>
         <Todos/>
        </MainLayout>
      </ErrorBoundary>
  );
}

export default App;
