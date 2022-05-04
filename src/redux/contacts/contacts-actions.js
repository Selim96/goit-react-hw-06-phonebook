export const addContact = contact => ({
    type: "add",
    payload: contact,
});

export const addFilter = value => ({
    type: "filter",
    payload: value,
});

export const deleteItem = id => ({
    type: 'deleteItem',
    payload: id,
});