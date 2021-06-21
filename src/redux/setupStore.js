import { createStore } from 'redux';
import rootReducer from './reducers';

function setupStore(initialState = {}) {
  const store = createStore(rootReducer, initialState);

  return store;
}

export default setupStore;
