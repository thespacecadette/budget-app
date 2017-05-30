import { LOAD_BUDGET, LOAD_BUDGET_FAIL } from './actions';

const initalState = {
    budgetId: '',
    status: '',
}

export const fetchBudget = (state = initalState, action) => {
    switch (action.type) {
        case LOAD_BUDGET:
            return Object.assign({}, state, {
                budget: action.payload.budget,
            })
        case LOAD_BUDGET_FAIL:
            return Object.assign({}, state, {
                status: action.payload.status,
            })
        default:
            return state
    }
}