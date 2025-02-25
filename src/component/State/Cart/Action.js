import toast from "react-hot-toast";
import { api } from "../../Config/api";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS,
     CLEARE_CART_FAILURE, CLEARE_CART_REQUEST, CLEARE_CART_SUCCESS, 
     FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS,
      GET_ALL_CART_ITEMS_FAILURE, GET_ALL_CART_ITEMS_REQUEST,
      GET_ALL_CART_ITEMS_SUCCESS, REMOVE_CARTITEM_FAILURE, REMOVE_CARTITEM_REQUEST,
       REMOVE_CARTITEM_SUCCESS, UPDATE_CARTITEM_FAILURE, UPDATE_CARTITEM_REQUEST, 
       UPDATE_CARTITEM_SUCCESS } from "./ActionType"

//find user cart 
export const findCart = (jwt)=> {

    return async(dispatch)=>{
        dispatch({type: FIND_CART_REQUEST})

        try {
           const response= await api.get('/api/cart',{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
           });
           console.log('my cart ==', response.data)

           dispatch({type: FIND_CART_SUCCESS, payload:response})

        } catch (error) {
           dispatch({type: FIND_CART_FAILURE, payload:error})
        }
    };
};

//get cart items
export const getAllCartItems = (reqData)=> {
    
    return async(dispatch)=>{
        dispatch({type: GET_ALL_CART_ITEMS_REQUEST})

        try {
           const response= await api.get(`/api/cart/items/${reqData.cartId}`,{
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
           });

           dispatch({type: GET_ALL_CART_ITEMS_SUCCESS, payload:response.data})
           console.log('cart items list', response);

        } catch (error) {
            console.log('error cart items ' ,error);
           dispatch({type: GET_ALL_CART_ITEMS_FAILURE, payload:error})
        }
    };
};

//add items to cart
export const addItemTocart = (reqData)=> {
    
    return async(dispatch)=>{
        dispatch({type: ADD_ITEM_TO_CART_REQUEST})

        try {
           const response= await api.put(`/api/cart/add`, reqData.cartItem,{
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
           });

           dispatch({type: ADD_ITEM_TO_CART_SUCCESS, payload:response.data})
           console.log('added cart item ', response);
           toast.success(' added to your cart !')

           
        } catch (error) {
            console.log('error adding cart item ' ,error);
           dispatch({type: ADD_ITEM_TO_CART_FAILURE, payload:error})
        }
    };
};

//update cart item
export const updateCartItem = (reqData)=> {
    
    return async(dispatch)=>{
        dispatch({type: UPDATE_CARTITEM_REQUEST})

        try {
           const response= await api.put(`/api/cart/cart-item/update`,reqData.data, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
           });

           dispatch({type: UPDATE_CARTITEM_SUCCESS, payload:response.data})
           console.log("item updated successfully ", response.data)
           
        } catch (error) {
            console.log('item update error', error);
           dispatch({type: UPDATE_CARTITEM_FAILURE, payload:error})
        }
    };
};

//remove cart item
export const removeCartItem = (reqData)=> {
    
    return async(dispatch)=>{
        dispatch({type: REMOVE_CARTITEM_REQUEST})

        try {
           const {data}= await api.delete(`/api/cart/cart-item/${reqData.cartItemId}/remove`, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
           });
            
           dispatch({type: REMOVE_CARTITEM_SUCCESS, payload:data});
           console.log('remove cart item --', data)
           toast.success('  item removed from your cart!')

           
        } catch (error) { 
           dispatch({type: REMOVE_CARTITEM_FAILURE, payload:error})
        }
    };
};



//clear cart 
export const clearCart = ()=> {
    
    return async(dispatch)=>{
        dispatch({type: CLEARE_CART_REQUEST})

        try {
           const {data}= await api.put(`/api/cart/clear/`,{}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
           });
            console.log('clear cart  ', data)
           dispatch({type: CLEARE_CART_SUCCESS, payload:data});
           
        } catch (error) { 
            console.log('error clear cart  ', error)

           dispatch({type: CLEARE_CART_FAILURE, payload:error})
        }
    };
};




