import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_RESTAURANTS_ORDER_FAILURE, GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCCESS, GET_USERS_ORDERS_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType";

const initialState={
    success: null,
    loading: null,
    error: null,
    orders: []
}



export const restaurantOrderReducer=(state= initialState, {type,payload})=>{
    switch (type) {
        case GET_RESTAURANTS_ORDER_REQUEST :
        case UPDATE_ORDER_STATUS_REQUEST:
            return { ... state, error: null, loading: true };
            
        case GET_RESTAURANTS_ORDER_SUCCESS :
            return { ... state, error: null, loading: false, orders: payload, success:true };


        case UPDATE_ORDER_STATUS_SUCCESS:
            const updatedOrders = state.orders.map((order)=>
            order.id=== payload.id? payload:order)
            return{
                ...state,
                loading:false,
                error:false,
                orders: updatedOrders
            };
        
            case GET_RESTAURANTS_ORDER_FAILURE:
            case UPDATE_ORDER_STATUS_FAILURE:
            return { ... state, error: payload.error, loading: false };
        
        default:
            return state;
    }
}