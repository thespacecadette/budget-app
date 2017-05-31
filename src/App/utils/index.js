export const generateUniqueKey = (prefix) => {
    if (!prefix || !isNaN(prefix)) {
        return;
    }
    const date = new Date();
    const id = date.getTime();

    return `${prefix}__${id}`;
}

// This function will parse all numbers in a string,
// ONLY if there is one decimal, otherwise NaN will return
// E.g. asd345345.1s@234asd.asd3 - NaN
// e.g. asd234.234ssdf98 - OK (234.23498)
// USAGE: Parses formatted string currencies ('$234.345') => 234.345
export const toNumber = (value) => {
    if (!value) return value;
    if (!isNaN(value)) return value;

    const number = Number(value.replace(/[^0-9\.-]+/g, ''));

    return number;
};

export const formatCurrency = (value) => {
    let num = '';

    if (isNaN(value)) {
        num = Number(value.replace(/[^0-9\.-]+/g, ''));
        num = num.toFixed(2);
    } else {
        num = value.toFixed(2);
    }

    return `$${num}`;
};
