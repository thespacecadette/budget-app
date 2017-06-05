import { generateUniqueKey, toNumber } from './../utils/';
import { removeItemFromTotal, calculateTotal as calcTotalFunction } from './functions';

export const LOAD_BUDGET = 'LOAD_BUDGET';
export const LOAD_BUDGET_FAIL = 'LOAD_BUDGET_FAIL';
export const CREATE_INCOMEEXPENSE = 'CREATE_INCOMEEXPENSE';
export const CREATE_INCOMEEXPENSE_FAIL = 'CREATE_INCOMEEXPENSE_FAIL';
export const RESET_INCOMEEXPENSE_STATUS = 'RESET_INCOMEEXPENSE_STATUS';
export const REMOVE_INCOMEEXPENSE = 'REMOVE_INCOMEEXPENSE';
export const REMOVE_INCOMEEXPENSE_FAIL = 'REMOVE_INCOMEEXPENSE_FAIL';

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
    type: RESET_INCOMEEXPENSE_STATUS,
});

export const removeIncomeExpenseFail = () => ({
    type: REMOVE_INCOMEEXPENSE_FAIL,
    payload: {
        status: REMOVE_INCOMEEXPENSE_FAIL
    }
});

export const loadBudgetFail = () => ({
    type: LOAD_BUDGET_FAIL,
    payload: {
        status: LOAD_BUDGET_FAIL
    }
});

export const createIncomeExpense = (item, total) => ({
    type: CREATE_INCOMEEXPENSE,
    payload: {
        item,
        status: `${item.name} has been added as an ${item.type} to your budget.`,
        total,
    }
});

export const removeIncomeExpenseItem = (incomeExpenseId, total) => ({
    type: REMOVE_INCOMEEXPENSE,
    payload: {
        status: `${incomeExpenseId} has been removed from your budget.`,
        total,
        incomeExpenseId,
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

export const removeIncomeExpense = (incomeExpenseId, amount, type, total) => {
    return dispatch => {
        if(!incomeExpenseId || !amount || !type || !total) {
            dispatch(removeIncomeExpenseFail());
        }

        const newTotal = removeItemFromTotal({
            amount,
            type,
        }, total);

        dispatch(removeIncomeExpenseItem(incomeExpenseId, newTotal));
    };
};

export const calculateBudgetTotal = (newItem, type, total) => {
    return dispatch => {
        if(!newItem || !type || !total) {
            dispatch(calculateTotalFail());
        }

        const newTotal = calcTotalFunction(newItem, type, total);

        dispatch(calculateTotal(newTotal));
    };
};

export const createNewIncomeExpense = (item) => {
    return dispatch => {
        if(!item) {
            dispatch(createIncomeExpenseFail());
        }
        const incomeExpenseId = generateUniqueKey(item.type);
        const amount = toNumber(item.amount);

        const incomeExpense = {
            incomeExpenseId,
            name: item.name,
            amount,            
            frequency: item.frequency,
            desc: item.desc,
            type: item.type,
        };

        const newTotal = calcTotalFunction(item, item.total);
        
        dispatch(createIncomeExpense(incomeExpense, newTotal))
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
