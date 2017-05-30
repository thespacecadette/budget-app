const babelRegister = require('babel-register');
babelRegister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
// import es6promise from 'es6-promise';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './src/App/App.js';
import rootReducer from './src/reducers';

// es6promise.polyfill();

const store = createStore(
	rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      logger,
    )
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
