import { applyMiddleware, compose, createStore } from 'redux';
import createRootReducer from './reducers';
import thunk from 'redux-thunk';
import { getHistory } from '../lib/get-history';

let store;

export const getStore = () => {
  if (!store) {
    const composeArgs = [
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ];

    store = compose(...composeArgs)(createStore)(createRootReducer(getHistory()));
  }

  return store;
}
