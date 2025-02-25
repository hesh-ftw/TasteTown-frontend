import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_RESTAURANTS_ORDER_FAILURE, GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCCESS, GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType";

//create order
export const updateOrderStatus=(orderId,orderStatus,jwt)=>{
    return async(dispatch)=>{

        dispatch({type: UPDATE_ORDER_STATUS_REQUEST})

        try {
            const {data}= await api.put(`/api/orders/admin/${orderId}/${orderStatus}`, {},{
                headers:{
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });

            console.log('updated order status ', data);
            dispatch({type: UPDATE_ORDER_STATUS_SUCCESS, payload:data})
            
        } catch (error) {
            console.log('error', error)
            dispatch({type: UPDATE_ORDER_STATUS_FAILURE, payload:error})
        }
    };
};

//get restaurant's order list
export const getRestaurantOrders=(jwt,restaurantId,orderStatus)=>{
    return async(dispatch)=>{

        dispatch({type: GET_RESTAURANTS_ORDER_REQUEST})

        try {
            const {data}= await api.get(`/api/orders/admin/restaurant/${restaurantId}`,{
                params: {order_status: orderStatus},
                headers:{
                    Authorization: `Bearer ${jwt}`
                },
            });
 
            console.log('restaurant orders list ', data);
            dispatch({type: GET_RESTAURANTS_ORDER_SUCCESS, payload:data})
            
        } catch (error) {
            console.log('error', error)
            dispatch({type: GET_RESTAURANTS_ORDER_FAILURE, payload:error})
        }
    };
};