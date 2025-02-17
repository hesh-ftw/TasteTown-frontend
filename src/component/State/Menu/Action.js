import { api } from "../../Config/api"
import { CREATE_CATEGORY_FAILURE } from "../Restaurant/ActionType";
import { CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST } from "./ActionType"


//create menu item in restaurant
export const createMenuItem=(reqData)=> async(dispatch)=>{

    console.log("reqData: ", reqData); // Check reqData structure 
    dispatch({type: CREATE_MENU_ITEM_REQUEST})

    try {
        
        const {data}= await api.post('/api/food/create', reqData.data, {
            headers:{
                Authorization: `Bearer ${reqData.jwt}`
            }
        });

        dispatch({type: CREATE_MENU_ITEM_SUCCESS, payload:data})
        console.log('created menu item: ', data)
        
    } catch (error) {      
        console.log("error ",error);
        dispatch({type: CREATE_CATEGORY_FAILURE, payload:error})
          
    }
};

//menu item availability update
export const updateMenuItemAvailability =(reqData)=> async(dispatch)=>{
    dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST})

    try {
        
        const {data}= await api.put(`/api/food/${reqData.foodId}`, {}, {
            headers:{
                Authorization: `Bearer ${reqData.jwt}`
            }
        });

        dispatch({type: CREATE_MENU_ITEM_SUCCESS, payload:data});
        console.log('updated item availablty: ', data)

        
    } catch (error) {
        dispatch({type: CREATE_CATEGORY_FAILURE, payload:error})
        console.log("error ",error);

    }
};

//delete a food from restaurnat
export const deleteMenuItem =(foodId,jwt)=> async(dispatch)=>{
    dispatch({type: DELETE_MENU_ITEM_REQUEST})

    try {
        
        const {data}= await api.put(`/api/food/${foodId}`, {
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        });

        console.log("item deleted :", data);
        dispatch({type: DELETE_MENU_ITEM_SUCCESS, payload:foodId})
        
    } catch (error) {
        console.log("error ",error);
        dispatch({type: DELETE_MENU_ITEM_FAILURE, payload:error})
    }
};


//get all menu items in a restaurant
export const getAllMenuItems =(jwt,restaurantId)=> async(dispatch)=>{
    dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST})

    try {
        
        const {data}= await api.get(`/api/food/restaurant/${restaurantId}`,{
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        });

        console.log(" restaurant menu items :", data);
        dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload:data})
        
    } catch (error) {
        console.log("error ",error);
        dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload:error})
    }
};


//search menu items in a restaurant
export const searchMenuItems =(keyword,jwt)=> async(dispatch)=>{
    dispatch({type: SEARCH_MENU_ITEM_REQUEST})

    try {
        const {data}= await api.get(`/api/food/search?keyword=${keyword}`, {
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        });

        console.log(" searched menu item :", data);
        dispatch({type: SEARCH_MENU_ITEM_SUCCESS, payload:data})
        
    } catch (error) {
        console.log("error ",error);
        dispatch({type: SEARCH_MENU_ITEM_FAILURE, payload:error})
    }
};