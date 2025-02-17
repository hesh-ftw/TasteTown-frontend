import axios from "axios"
import { CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS, GET_ALL_RESTAURANTS_FAILURE, GET_ALL_RESTAURANTS_REQUEST, GET_ALL_RESTAURANTS_SUCCESS, GET_RESTAURANTS_BY_ID_FAILURE, GET_RESTAURANTS_BY_ID_REQUEST, GET_RESTAURANTS_BY_ID_SUCCESS, GET_RESTAURANTS_BY_USERID_FAILURE, GET_RESTAURANTS_BY_USERID_REQUEST, GET_RESTAURANTS_BY_USERID_SUCCESS, SEARCH_RESTAURANTS_BY_NAME_FAILURE, SEARCH_RESTAURANTS_BY_NAME_REQUEST, SEARCH_RESTAURANTS_BY_NAME_SUCCESS, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS, UPDATE_RESTAURANT_SUCCESS } from "./ActionType"
import { api, API_URL } from "../../Config/api"


//creeate restaurant 
export const createRestaurant= (reqData) => async(dispatch)=> {
    console.log('jwt ---', reqData.token);
    dispatch({type: CREATE_RESTAURANT_REQUEST})

    try {
        const {data}= await api.post(`/api/admin/restaurants/create`, reqData.data, {
            headers: {
                Authorization: `Bearer ${reqData.token}`
            }
        });
        
        dispatch({type: CREATE_RESTAURANT_SUCCESS, payload:data});
        console.log('restaurant created ',data)

    } catch (error) {
        dispatch({type:CREATE_RESTAURANT_FAILURE},error)
    }
}

//update restaurant 
export const updateRestaurant= (reqData) => async(dispatch)=> {
    console.log('jwt ---', reqData.token);
    dispatch({type: UPDATE_RESTAURANT_REQUEST})

    try {
        const {data}= await api.post(`/api/admin/restaurants/${reqData.restaurnatId}`, reqData.data,{
            headers: {
                Authorization: `Bearer ${reqData.token}`
            }
        });
        
        dispatch({type: UPDATE_RESTAURANT_SUCCESS, payload:data});
        console.log('restaurant updated ',data)

    } catch (error) {
        dispatch({type:UPDATE_RESTAURANT_FAILURE},error)
    }
}

//delete restaurant 
export const deleteRestaurant= (restaurantId,jwt) => async(dispatch)=> {
    dispatch({type: DELETE_RESTAURANT_REQUEST})

    try {
        const response= await api.delete(`/api/admin/restaurants/${restaurantId}`,{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        
        dispatch({type: DELETE_RESTAURANT_SUCCESS, payload:response}); 
        console.log('restaurant deleted ',response.data)

    } catch (error) {
        dispatch({type:DELETE_RESTAURANT_FAILURE},error)
    }
}


//get all restaurants
export const getAllRestaurants=(jwt)=>{
    return async(dispatch)=>{
        dispatch({type: GET_ALL_RESTAURANTS_REQUEST});

        try {
            //call api endpoint
            const {data}= await axios.get(`${API_URL}/api/restaurants/all`, {
                headers:{
                    Authorization: `Bearer ${jwt}`
                },
            });

            dispatch({type: GET_ALL_RESTAURANTS_SUCCESS, payload:data});
            console.log('all restaurants ' ,data);


        } catch (error) {
            dispatch({type: GET_ALL_RESTAURANTS_FAILURE, payload:error})
            console.log(' error ', error);
        }
    }    
};

//search restaurant by Name
export const searchRestaurantsByName=(reqData)=>{
    return async(dispatch)=>{
        dispatch({type: SEARCH_RESTAURANTS_BY_NAME_REQUEST});

        try {
            //call api endpoint
            const {data}= await axios.get(`${API_URL}/api/restaurants/search/${reqData.restaurnatId}`, {
                headers:{
                    Authorization: `Bearer ${reqData.token}`
                },
            });

            dispatch({type: SEARCH_RESTAURANTS_BY_NAME_SUCCESS, payload:data});

        } catch (error) {
            dispatch({type: SEARCH_RESTAURANTS_BY_NAME_FAILURE, payload:error})
            console.log(' error ', error);
        }
    }    
};

//get restaurant by id
export const getRestaurantById=(jwt, restaurantId)=>{
    return async(dispatch)=>{
        dispatch({type: GET_RESTAURANTS_BY_ID_REQUEST});

        try {
            //call api endpoint
            const {data}= await axios.get(`${API_URL}/api/restaurants/${restaurantId}`, {
                headers:{
                    Authorization: `Bearer ${jwt}`
                },
            });

            dispatch({type: GET_RESTAURANTS_BY_ID_SUCCESS, payload:data});

        } catch (error) {
            dispatch({type: GET_RESTAURANTS_BY_ID_FAILURE, payload:error})
            console.log(' error ', error);
        }
    }    
};

//get restaurants by user id(favourite restaurant list of the user)
export const getFavRestaurantsByUserId=(reqData)=>{
    return async(dispatch)=>{
        dispatch({type: GET_RESTAURANTS_BY_USERID_REQUEST});

        try {
            //call api endpoint
            const {data}= await axios.get(`${API_URL}/api/restaurants/favouties/${reqData.userId}`, {
                headers:{
                    Authorization: `Bearer ${reqData.token}`
                },
            });

            console.log('get restaurants by user Id ', data)
            dispatch({type: GET_RESTAURANTS_BY_USERID_SUCCESS, payload:data});

        } catch (error) {
            dispatch({type: GET_RESTAURANTS_BY_USERID_FAILURE, payload:error})
            console.log(' error ', error);
        }
    }    
};

//update restaurant status request
export const updateRestaurantStatus=(reqData)=>{
    return async(dispatch)=>{
        dispatch({type: UPDATE_RESTAURANT_STATUS_REQUEST});

        try {
            //call api endpoint
            const {data}= await axios.put(`${API_URL}/api/restaurants/status/${reqData.restaurantId}`,{}, {
                headers:{
                    Authorization: `Bearer ${reqData.jwt}`
                },
            });

            console.log('response --',data)
            dispatch({type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload:data});

        } catch (error) {
            dispatch({type: UPDATE_RESTAURANT_STATUS_FAILURE, payload:error})
            console.log(' error ', error);
        }
    }    
};