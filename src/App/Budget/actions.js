import { generateUniqueKey } from './../utils/';

export const LOAD_BUDGET = 'LOAD_BUDGET';
export const LOAD_BUDGET_FAIL = 'LOAD_BUDGET_FAIL';
export const CREATE_INCOMEEXPENSE = 'CREATE_INCOMEEXPENSE';
export const CREATE_INCOMEEXPENSE_FAIL = 'CREATE_INCOMEEXPENSE_FAIL';
export const RESET_INCOMEEXPENSE = 'RESET_INCOMEEXPENSE';

export const loadBudget = (budget) => ({
    type: LOAD_BUDGET,
    payload: {
        budget
    }
});

export const loadIncomeExpenses = () => ({
    type: LOAD_INCOMEEXPENSE,
});

export const resetNewIncomeExpense = () => ({
    type: RESET_INCOMEEXPENSE,
});

export const loadBudgetFail = () => ({
    type: LOAD_BUDGET_FAIL,
    payload: {
        status: LOAD_BUDGET_FAIL
    }
});

export const createIncomeExpense = (item) => ({
    type: CREATE_INCOMEEXPENSE,
    payload: {
        item
    }
});

export const createIncomeExpenseFail = () => ({
    type: CREATE_INCOMEEXPENSE_FAIL,
    payload: {
        status: CREATE_INCOMEEXPENSE_FAIL
    }
});

export const resetIncomeExpense = () => {
    return dispatch => {
        dispatch(resetNewIncomeExpense())
    };
};

export const createNewIncomeExpense = (item) => {
    return dispatch => {
        if(!item) {
            dispatch(createIncomeExpenseFail());
        }
        const incomeExpenseId = generateUniqueKey(item.type);
        const incomeExpense = {
            incomeExpenseId,
            name: item.name,
            amount: item.amount,            
            frequency: item.frequency,
            desc: item.desc,
            type: item.type,
        };

        dispatch(createIncomeExpense(incomeExpense))
    };
};

export const budgetReducer = (userId) => {
    return dispatch => {
        if(!userId) {
            dispatch(loadBudgetFail());
        }
        const budgetId = generateUniqueKey(`budget-${userId}`);
        const budget = {
            budgetId,
        };

        dispatch(loadBudget(budget))
    };
};
