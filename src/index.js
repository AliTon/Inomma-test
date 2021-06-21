import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import setupStore from './redux/setupStore';
import initConfigs from './firebaseInit';

import 'firebase/database';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

const store = setupStore({});
const rrfProps = initConfigs(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
