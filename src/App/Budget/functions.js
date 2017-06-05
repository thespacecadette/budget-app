import _ from 'lodash';
import { toNumber } from './../utils/';

export const calculateTotal = (item, total) => {
    const addToTotal = item.type === 'income';
    const amountNumber = toNumber(item.amount);
    const totalNumber = toNumber(total);

    let newTotal = 0;

    if (addToTotal) {
        newTotal = Number(Number(totalNumber) + Number(amountNumber));
    } else {
        newTotal = Number(Number(totalNumber) - Number(amountNumber));
    }

    return newTotal;
};

export const removeIncomeExpenseItem = (incomeExpenses, incomeExpenseIdToRemove) => {
    const newIncomeExpenses = _.remove(incomeExpenses, (item) => {
        return item.incomeExpenseId !== incomeExpenseIdToRemove;
    });

    return newIncomeExpenses;
};

export const removeItemFromTotal = (item, total) => {
    const addToTotal = item.type === 'expense';
    const amountNumber = toNumber(item.amount);
    const totalNumber = toNumber(total);

    let newTotal = 0;

    if (addToTotal) {
        newTotal = Number(Number(totalNumber) + Number(amountNumber));
    } else {
        newTotal = Number(Number(totalNumber) - Number(amountNumber));
    }

    return newTotal;
}