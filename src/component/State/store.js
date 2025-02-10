import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";

//root reducer
const rootReducer= combineReducers({
    auth: authReducer,
})

//create the redux store with redux thunk middleware
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

