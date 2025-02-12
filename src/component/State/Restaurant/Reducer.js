
//states for restaurant

import { CREATE_CATEGORY_REQUEST, CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST,
    DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS,
     GET_ALL_RESTAURANTS_FAILURE, GET_ALL_RESTAURANTS_REQUEST, GET_ALL_RESTAURANTS_SUCCESS,
      GET_RESTAURANT_CATEGORY_FAILURE, GET_RESTAURANTS_BY_ID_FAILURE, GET_RESTAURANTS_BY_ID_REQUEST,
       GET_RESTAURANTS_BY_ID_SUCCESS, GET_RESTAURANTS_BY_USERID_FAILURE, GET_RESTAURANTS_BY_USERID_SUCCESS,
        SEARCH_RESTAURANTS_BY_NAME_FAILURE, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST } from "./ActionType";

const initialState={

    restaurants:[],
    restaurant: null,
    isLoading: null,
    usersRestaurant: [],
    error:null,
    success:null
}

export const restaurantReducer=(state=initialState, action)=>{
    switch (action.type) {

            case CREATE_RESTAURANT_REQUEST :
            case  GET_ALL_RESTAURANTS_REQUEST :
            case DELETE_RESTAURANT_REQUEST :
            case  UPDATE_RESTAURANT_REQUEST :
            case  GET_RESTAURANTS_BY_ID_REQUEST :
            case  CREATE_CATEGORY_REQUEST :
                return {...state, isLoading:true, error:null };


            case GET_ALL_RESTAURANTS_SUCCESS:
                return {...state, restaurants:action.payload, success:true};

            case GET_RESTAURANTS_BY_ID_SUCCESS:
                return {...state, restaurant:action.payload, success:true};

            case GET_RESTAURANTS_BY_USERID_SUCCESS:
                return {...state, usersRestaurant:action.payload, success:true};

            case DELETE_RESTAURANT_SUCCESS:
                return {...state,
                    isLoading:false,
                    restaurants: state.restaurants.filter((item)=>(item.id !== action.payload)), //remove restaurant from payload by it's id
                     success:true};

            case CREATE_RESTAURANT_FAILURE:
            case DELETE_RESTAURANT_FAILURE:
            case UPDATE_RESTAURANT_FAILURE:
            case GET_RESTAURANTS_BY_ID_FAILURE:
            case GET_ALL_RESTAURANTS_FAILURE:
            case GET_RESTAURANTS_BY_USERID_FAILURE:
            case GET_RESTAURANT_CATEGORY_FAILURE:
            case SEARCH_RESTAURANTS_BY_NAME_FAILURE:
                return{...state, error:action.payload, isLoading:false}



 
    
        default:
            return state;
    }
}