import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEARE_CART_FAILURE, CLEARE_CART_REQUEST, CLEARE_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEMS_FAILURE, GET_ALL_CART_ITEMS_REQUEST, GET_ALL_CART_ITEMS_SUCCESS, LOGOUT, REMOVE_CARTITEM_FAILURE, REMOVE_CARTITEM_REQUEST, REMOVE_CARTITEM_SUCCESS, UPDATE_CARTITEM_FAILURE, UPDATE_CARTITEM_REQUEST, UPDATE_CARTITEM_SUCCESS } from "./ActionType";

const initialState={
    isLoading: null,
    success: null,
    cartItems:[],
    cart:null,
    error:null,
    message:null
}


export const cartReducer=(state= initialState, action)=>{
    switch (action.type) {

        case FIND_CART_REQUEST:
        case GET_ALL_CART_ITEMS_REQUEST:
        case ADD_ITEM_TO_CART_REQUEST:
        case CLEARE_CART_REQUEST:
        case REMOVE_CARTITEM_REQUEST:
        case UPDATE_CARTITEM_REQUEST:
            return{...state, error:null, isLoading:true, success:null};


        case FIND_CART_SUCCESS:
           // console.log('FIND_CART_SUCCESS payload:', action.payload);
                return {
                    ...state,
                    isLoading: false,
                    success: true,
                    cart: action.payload, 
                    cartItems: action.payload.data.item || [] 
                };
        
                case CLEARE_CART_SUCCESS:
            return{
                ...state, isLoading:false,success:true,cart:action.payload, cartItems:action.payload.items
             };

        case GET_ALL_CART_ITEMS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                success:true,
                error:null,
                cartItems: action.payload
            };

            // case UPDATE_CARTITEM_SUCCESS:
            //     return{
            //         ...state,
            //         isLoading:false,
            //         cartItems: state.cartItems.map( (item)=> 
            //             item.id === action.payload.id? action.payload : item) 
            //     };

            case UPDATE_CARTITEM_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    success:true,
                    cartItems: state.cartItems ? state.cartItems.map((item) => 
                        item.id === action.payload.id ? action.payload : item //replace exisitng item with updated one.
                    ) : [] // Default to an empty array
                };
                



            case ADD_ITEM_TO_CART_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    success:true,
                    error:null,
                    cartItems:[ ...state.cartItems, action.payload],
                    message:'item added successfully'
                };

                // case CLEARE_CART_SUCCESS:
                //     return{
                //         ...state,
                //         isLoading:false,
                //         success:true,
                //         error:null,
                //         cartItems: null,
                //         message:'cart is cleared'
                //     }

                    case REMOVE_CARTITEM_SUCCESS:
                        return{
                            ...state,
                            isLoading:false,
                            success:true,
                            error:null,
                            cartItems: state.cartItems.filter(
                                (item)=> item.id !== action.payload.cartItemId)
                        };

        case FIND_CART_FAILURE:
        case GET_ALL_CART_ITEMS_FAILURE:
        case ADD_ITEM_TO_CART_FAILURE:
        case CLEARE_CART_FAILURE:
        case REMOVE_CARTITEM_FAILURE:
        case UPDATE_CARTITEM_FAILURE:
            return{...state, error:action.payload, isLoading:false, success:false};

           case LOGOUT:
            return{
                ...state,
                cartItems:[],
                cart:null,
                success:"logout success"
            };
    
        default:
            return state;
    }
}