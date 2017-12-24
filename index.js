const babelRegister = require('babel-register');
babelRegister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
// import es6promise from 'es6-promise';
// es6promise.polyfill();
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './src/App/App.js';
import rootReducer from './src/reducers';

import routes from './src/routes';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      logger,
    )
  ),
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
