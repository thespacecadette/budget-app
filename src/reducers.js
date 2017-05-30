import { combineReducers } from 'redux';
import { fetchBudget as budget } from './App/Budget/reducer';
import { fetchUser as user } from './App/User/reducer';

const reducer = combineReducers ({
	user,
	budget,
});

export default reducer;