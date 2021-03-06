import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import /* You need some sort of reducer */ './reducers';

const customMiddleWare = store => next => action => {
  console.log("Middleware triggered:", action);
  next(action);
}

const store = createStore(
  () => {}, // this is the most basic reducer. Replace it.
  applyMiddleware(customMiddleWare)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
