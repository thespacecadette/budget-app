import { toNumber } from './../utils/';

export const calculateTotal = (item, total) => {
    const addToTotal = item.type === 'expense' ? false : true;
    const amountNumber = toNumber(item.amount);
    let newTotal = 0;

    if (addToTotal) {
        newTotal = total + amountNumber;
    } else {
        newTotal = total - amountNumber;
    }

    return newTotal;
};