import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    items: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
    filter: ''
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'add':
            return { ...state, items: [...state.items, payload] };
        
        case "filter":
            return { ...state, filter: payload };
        
        case 'deleteItem':
            const filteredList = list => (list.filter(e => e.id !== payload));
            return { ...state, items: filteredList(state.items) };
        
        default:
            return state;
    };
};
const rootReducer = combineReducers({ contacts: reducer });
export const store = createStore(rootReducer, composeWithDevTools());

