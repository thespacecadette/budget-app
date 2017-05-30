import {
    LOAD_BUDGET,
    LOAD_BUDGET_FAIL,
    LOAD_INCOMEEXPENSE,
    CREATE_INCOMEEXPENSE,
    CREATE_INCOMEEXPENSE_FAIL
} from './actions';
import { } from './constants.js';

const initalState = {
    budgetId: '',
    status: null,
    incomeExpenses: [],
}

export const fetchBudget = (state = initalState, action) => {
    switch (action.type) {
        case LOAD_BUDGET:
            return Object.assign({}, state, {
                budget: action.payload.budget,
                status: null,
            })
        case LOAD_BUDGET_FAIL:
            return Object.assign({}, state, {
                status: action.payload.status,
            })
        case LOAD_INCOMEEXPENSE:
            return Object.assign({}, state, {
                status: null,
            })
        case CREATE_INCOMEEXPENSE:
            const newState = state.incomeExpenses;

            newState.push(action.payload.item)

            return Object.assign({}, state, {
                incomeExpenses: newState,
                status: `${action.payload.item.name} has been added as an ${action.payload.item.type} to your budget.`,
            })
        case CREATE_INCOMEEXPENSE_FAIL:
            return Object.assign({}, state, {
                status: action.payload.status,
            })
        default:
            return state
    }
}