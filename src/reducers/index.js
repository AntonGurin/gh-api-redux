import { combineReducers } from "redux";
import { legacy_createStore as createStore} from 'redux'
import { applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { forksReducer } from "./forksReducer";

const rootReducer = combineReducers({
    forks: forksReducer,
    
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

