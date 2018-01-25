import { combineReducers } from 'redux';
import { fetchBudget as budget } from './App/Budget/reducer';
import { fetchUser as user } from './App/User/reducer';
import { fetchSettings as settings } from './App/Settings/reducer';
import { routerReducer } from 'react-router-redux'

const reducer = combineReducers ({
	user,
	budget,
	settings,
	routing: routerReducer,	
});

export default reducer;