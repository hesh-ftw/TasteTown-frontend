import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionType";

const initialState= {
    restaurantMenu:[],
    isLoading: null,
    search: [],
    error:null,
    success:null,
    message:null
}

export const MenuItemReducer= (state= initialState, action)=>{
    switch (action.type) {

        case CREATE_MENU_ITEM_REQUEST:
        case UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST:
        case SEARCH_MENU_ITEM_REQUEST:
        case DELETE_MENU_ITEM_REQUEST:
        case GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
            return{...state, isLoading:true, error:null, message:null };

        case CREATE_MENU_ITEM_SUCCESS:
        return {...state, 
            success:true, 
            isLoading:false, 
            restaurantMenu:[...state.restaurantMenu, action.payload], //this will add the new item to the array without replacing whole array
            message:'food created successfully'
        };

        case GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
            return{
                ...state,
                success:true,
                isLoading:false,
                restaurantMenu: action.payload
            };

        case DELETE_MENU_ITEM_SUCCESS:
            return{
                ...state,
                success:true,
                isLoading:false,
                restaurantMenu: state.restaurantMenu.filter(
                    (item)=>item.id !== action.payload
                )};
        
        case UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS:
            return {...state,
                success:true, 
                isLoading:false,
                restaurantMenu: state.restaurantMenu.map(
                    (item)=> item.id === action.payload.id? action.payload:item
                )
            };  

            case SEARCH_MENU_ITEM_SUCCESS:
                return{...state, isLoading:false, search:action.payload};
            

            case CREATE_MENU_ITEM_FAILURE:
            case UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE:
            case SEARCH_MENU_ITEM_FAILURE:
            case DELETE_MENU_ITEM_FAILURE:
            case GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE: 
                return{
                    ...state,
                    isLoading:false,
                    error:action.payload,
                    message:null
                };
           
        default:
            return state;
          
    }
}