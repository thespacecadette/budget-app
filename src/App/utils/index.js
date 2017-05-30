export const generateId = (prefix) => {
    const date = new Date();
    const id = date.getTime();

    return `${prefix}__${id}`;
}