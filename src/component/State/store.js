import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import { restaurantReducer } from "./Restaurant/Reducer";
import { MenuItemReducer } from "./Menu/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { userOrderReducer } from "./Orders/CustomerOrders/Reducer";
import { restaurantOrderReducer } from "./Orders/RestaurantOrders/Reducer";

//root reducer
const rootReducer= combineReducers({
    auth: authReducer,
    restaurant : restaurantReducer,
    menu : MenuItemReducer,
    cart: cartReducer,
    userOrders: userOrderReducer,
    restaurantOrders: restaurantOrderReducer,
    
})

//create the redux store with redux thunk middleware
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

