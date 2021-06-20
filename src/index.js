import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import setupStore from './redux/setupStore';

import firebase from 'firebase/app'
import 'firebase/database'
// import 'firebase/auth'
// import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
// import { createStore, combineReducers, compose } from 'redux'
import {
    ReactReduxFirebaseProvider,
} from 'react-redux-firebase'
// import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

const store = setupStore({});

const fbConfig = {
    apiKey: "AIzaSyDhUmKfUYolvpg-T5Z1_bMMOej0AnWKLak",
    authDomain: "inomma-testtask.firebaseapp.com",
    databaseURL: "https://inomma-testtask-default-rtdb.firebaseio.com",
    projectId: "inomma-testtask",
    storageBucket: "inomma-testtask.appspot.com",
    messagingSenderId: "157538096229",
    appId: "1:157538096229:web:cb082ef87070afd2cce28c",
    measurementId: "G-9T7GG2Z8SX"
}

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users'
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
// firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable


// Create store with reducers and initial state

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
    // createFirestoreInstance // <- needed if using firestore
}

// Setup react-redux so that connect HOC can be use




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