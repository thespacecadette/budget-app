export const generateUniqueKey = (prefix) => {
    const date = new Date();
    const id = date.getTime();

    return `${prefix}__${id}`;
}

export const toNumber = (value) => {
    if(!value) return value;

    const number = Number(value.replace(/[^0-9\.-]+/g,''));

    return number;
};

export const formatCurrency = (value) => {
    if(!value) return value;

    if(isNaN(value)) {
        const num = Number(value.replace(/[^0-9\.-]+/g,''));

        return `$${number}`;
    }

    return `$${value}`;
};