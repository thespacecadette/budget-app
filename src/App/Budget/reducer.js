import {
    LOAD_BUDGET,
    LOAD_BUDGET_FAIL,
    LOAD_INCOMEEXPENSE,
    CREATE_INCOMEEXPENSE,
    CREATE_INCOMEEXPENSE_FAIL,
    RESET_INCOMEEXPENSE,
    REMOVE_INCOMEEXPENSE,
    REMOVE_INCOMEEXPENSE_FAIL,
} from './actions';

const initalState = {
    budgetId: '',
    status: null,
    incomeExpenses: [],
    total: 0,
    // incomeExpenses: [{
    //     incomeExpenseId: 'expense_groceries_09as0d98asd',
    //     name: 'Groceries',
    //     amount: 150,
    //     frequency: 'ongoing',
    //     type: 'expense',
    //     desc: 'Vegan goodies, household things and cat food.'
    // },
    // {
    //     incomeExpenseId: 'income_salary_09as0d98asd',
    //     name: 'Salary',
    //     amount: 2150,
    //     frequency: 'ongoing',
    //     type: 'income',
    //     desc: 'Income from Acme Inc'
    // }],
    // total: 2000.00,
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
                total: action.payload.total,
                status: action.payload.status,
            })
        case CREATE_INCOMEEXPENSE_FAIL:
            return Object.assign({}, state, {
                status: action.payload.status,
            })
        case REMOVE_INCOMEEXPENSE:
            let incomeExpenses = [];
            
            incomeExpenses = _.remove(state.incomeExpenses, (item) => {
                return item.incomeExpenseId !== action.payload.incomeExpenseId;
            });

            return Object.assign({}, state, {
                incomeExpenses,
                total: action.payload.total,
                status: action.payload.status,
            })
        case REMOVE_INCOMEEXPENSE_FAIL:
            return Object.assign({}, state, {
                status: action.payload.status,
            })
        case RESET_INCOMEEXPENSE:
            return Object.assign({}, state, {
                status: null,
            })

        default:
            return state
    }
}