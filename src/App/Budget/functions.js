import { toNumber } from './../utils/';

export const calculateTotal = (item, total) => {
    const addToTotal = item.type === 'income';
    const amountNumber = toNumber(item.amount);
    const totalNumber = toNumber(total);

    let newTotal = 0;

    if (addToTotal) {
        newTotal = Number(totalNumber) + Number(amountNumber);
    } else {
        newTotal = Number(totalNumber) - Number(amountNumber);
    }

    return newTotal;
};