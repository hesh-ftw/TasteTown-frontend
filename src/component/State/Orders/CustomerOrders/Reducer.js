import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS,
     GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST,
      GET_USERS_ORDERS_SUCCESS } from "./ActionType";

const initialState={
    success: null,
    loading: null,
    error: null,
    orders: []
}



export const userOrderReducer=(state= initialState, {type,payload})=>{
    switch (type) {
        case GET_USERS_ORDERS_REQUEST:
        case CREATE_ORDER_REQUEST:
            return { ... state, error: null, loading: true };
            
        case GET_USERS_ORDERS_SUCCESS :
            return { ... state, error: null, loading: false, orders: payload, success:true };

        case CREATE_ORDER_SUCCESS:
            return{...state, error: null, loading:false, orders:[...state.orders, payload]} // add new order to exisitng orders
        
            case GET_USERS_ORDERS_FAILURE:
            case CREATE_ORDER_FAILURE:
            return { ... state, error: payload, loading: false };
        
        default:
            return state;
    }
}