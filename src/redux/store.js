import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    items: [],
    filter: ''
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'add':
            const items = [...state.items, payload];
            return { ...state, items };
        
        default:
            return state;
    }
};
const rootReducer = combineReducers({contacts: reducer})
export const store = createStore(rootReducer, composeWithDevTools());

