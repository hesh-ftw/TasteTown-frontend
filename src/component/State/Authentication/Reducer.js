import { isPresentInFavourites } from "../../Config/logic";
import { ADD_TO_FAVOURITE_FALIURE, ADD_TO_FAVOURITE_REQUEST, ADD_TO_FAVOURITE_SUCCESS, 
    GET_USER_FALIURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FALIURE, LOGIN_REQUEST,
     LOGIN_SUCCESS, LOGOUT, REGISTER_FALIURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

const initialState={
    user: null,
    jwt: null,
    isLoading: null,
    favourites: [],
    error:null,
    success:null
}

 export const authReducer=(state=initialState, action)=>{

    switch (action.type) {


        //if any of below actions encounted
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVOURITE_REQUEST:
            return{ ...state, isLoading:true, error:null, success:null}; //return these states


        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return{...state, isLoading:false, error:null, success:"Register Success", jwt:action.payload};// add jwt in local storage
        

        case GET_USER_SUCCESS:
            return{...state, isLoading:false, user:action.payload};
            
        
        case ADD_TO_FAVOURITE_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:null,
                jwt:action.payload, 
                favourites:isPresentInFavourites(state.favourites, action.payload) // check the retaurant come inside action.payload
                    ?state.favourites.filter((item)=> item.id!==action.payload.id)
                    :[action.payload,...state.favourites] //add restaurant to fav list
                };

            case REGISTER_FALIURE:
            case LOGIN_FALIURE:
            case GET_USER_FALIURE:
            case ADD_TO_FAVOURITE_FALIURE: 
               return{...state, isLoading:false, error:action.payload, success:null}

            case LOGOUT:
                return {initialState}
    
        default:
            return state;
    }

}