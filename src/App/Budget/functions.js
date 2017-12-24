import _ from 'lodash';
import { toNumber } from './../utils/';

export const calculateTotal = (item) => {
    const addToTotal = item.type === 'income';
    const amountNumber = toNumber(item.amount);
    const totalNumber = toNumber(item.total);

    let newTotal = 0;

    if (addToTotal) {
        newTotal = Number(Number(totalNumber) + Number(amountNumber));
    } else {
        newTotal = Number(Number(totalNumber) - Number(amountNumber));
    }

    return newTotal;
};

export const calcTotalExpenses = (item) => {
    const addToExpenses = item.type === 'expense';
    let newTotalExpenses = item.totalExpenses;

    if (addToExpenses) {
        const amountNumber = toNumber(item.amount);
        const totalNumber = toNumber(item.totalExpenses);

        newTotalExpenses = Number(Number(totalNumber) + Number(amountNumber));
    }

    return newTotalExpenses;
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
};

export const removeItemFromTotalExpenses = (item, totalExpenses) => {
    const removeFromTotalExpenses = item.type === 'expense';
    let newTotalExpenses = totalExpenses;

    if (removeFromTotalExpenses) {
        const amountNumber = toNumber(item.amount);
        const totalNumber = toNumber(totalExpenses);

        newTotalExpenses = Number(Number(totalNumber) - Number(amountNumber));
    }

    return newTotalExpenses;
};