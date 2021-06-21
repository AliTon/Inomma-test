import MainLayout from "./containers/MainLayout";
import ErrorBoundary from "./components/ErrorBoundary";
import firebase from "firebase";
import Todos from "./modules/TodoModule";

function App() {
  return (
      <ErrorBoundary>
        <MainLayout>
         <Todos firebase={firebase}/>
        </MainLayout>
      </ErrorBoundary>
  );
}

export default App;
