import toast from "react-hot-toast";
import { api } from "../../../Config/api";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS } from "./ActionType";

//create order
export const createOrder=(reqData)=>{
    return async(dispatch)=>{

        dispatch({type: CREATE_ORDER_REQUEST})

        try {
            const {data}= await api.post('/api/orders/create', reqData.order,{
                headers:{
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });

            if(data.paymentUrl){
                //redirect to the url if exist
                window.location.href= data.paymentUrl;
            }

            console.log('order created success ', data);
            dispatch({type: CREATE_ORDER_SUCCESS, payload:data})
            toast.success('order placed succss !')
           
       
            
        } catch (error) {
            console.log('error', error)
            dispatch({type: CREATE_ORDER_FAILURE, payload:error})
        }
    };
};

//get user's order list
export const getUsersOrders=(jwt)=>{
    return async(dispatch)=>{

        dispatch({type: GET_USERS_ORDERS_REQUEST})

        try {
            const {data}= await api.get('/api/orders/user',{
                headers:{
                    Authorization: `Bearer ${jwt}`
                }
            });
 
            console.log('users order list ', data);
            dispatch({type: GET_USERS_ORDERS_SUCCESS, payload:data})
            
        } catch (error) {
            console.log('error', error)
            dispatch({type: GET_USERS_ORDERS_FAILURE, payload:error})
        }
    };
};