import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

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
    switch (type) {
        case "filter":
            return payload;
        
        default:
            return state;
    };
};

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer
});

const rootReducer = combineReducers({ contacts: contactsReducer });
export const store = createStore(rootReducer, composeWithDevTools());