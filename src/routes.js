import React from 'react';
import { IndexRoute, Route } from 'react-router';

import AppContainer from './App/App.js';
import Budget from './App/Budget/index.js';
import BudgetSettings from './App/Settings/index.js';

const routes = (
  <Route path='/' component={AppContainer}>
    <IndexRoute component={Budget} />
    <Route path='budget-settings' component={BudgetSettings} />
  </Route>
)

export default routes
