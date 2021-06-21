import React from 'react';
import MainLayout from './containers/MainLayout';
import ErrorBoundary from './components/ErrorBoundary';
import Todos from './modules/TodoModule';

function App() {
  return (
    <ErrorBoundary>
      <MainLayout>
        <Todos />
      </MainLayout>
    </ErrorBoundary>
  );
}

export default App;
