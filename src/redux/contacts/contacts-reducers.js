import { combineReducers } from "redux";

const itemsReducer = (state = JSON.parse(window.localStorage.getItem('contacts')) ?? [], { type, payload }) => {
    switch (type) {
        case 'add':
            return [...state, payload];
        
        case 'deleteItem':
            const filteredList = list => (list.filter(e => e.id !== payload));
            return filteredList(state);
        
        default:
            return state;
    };
};

const filterReducer = (state = '', { type, payload }) => {
    if (type === 'filter') {
        return payload;
    }
    return state;
};

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer
});