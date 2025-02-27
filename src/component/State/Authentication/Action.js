import axios from "axios"
import { ADD_TO_FAVOURITE_FALIURE, ADD_TO_FAVOURITE_REQUEST, ADD_TO_FAVOURITE_SUCCESS, 
     GET_USER_FALIURE, 
     GET_USER_REQUEST, 
     GET_USER_SUCCESS, 
     LOGIN_FALIURE, 
     LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FALIURE, REGISTER_REQUEST, REGISTER_SUCCESS, 
     REMOVE_FROM_FAVOURITE_SUCCESS} from "./ActionType"
import { api, API_URL } from "../../Config/api"
import toast, { Toaster } from "react-hot-toast"

//register a new user
export const registerUser=(reqData)=> async(dispatch)=>{
    dispatch({type: REGISTER_REQUEST}) // tell redux that registration request has started

    try{
        //make api req
        const response= await axios.post(`${API_URL}/auth/signup`,reqData.userData)
        const data= response.data; //extract response data property 

        
        //save jwt in local storage
        if(data.jwt)localStorage.setItem("jwt", data.jwt); 
        
        
        if(data.role === "ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        }
        else{
            reqData.navigate("/")
        }

        dispatch({type:REGISTER_SUCCESS,payload:data.jwt}) // if register success redux store the jwt 
        console.log("register success", data)


    } catch(error){
        dispatch({type:REGISTER_FALIURE, payload:error})
        console.log("error", error)
    }
    
}

//login a new user
export const loginUser=(reqData)=> async(dispatch)=>{
    dispatch({type: LOGIN_REQUEST}) // tell redux that login request has started

    try{
        //make api req
        const response= await axios.post(`${API_URL}/auth/signin`,reqData.userData)
        const data= response.data; //extract response data property 

        
        //save jwt in local storage
        if(data.jwt)localStorage.setItem("jwt", data.jwt); 
        
        //save user in local storage
        if (data.user) localStorage.setItem("user", JSON.stringify(data.user));

        if(data.role === "ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        }
        else{
            reqData.navigate("/")
        }

        dispatch({type:LOGIN_SUCCESS,payload:data}) 
        console.log("login success", data)

    } catch(error){
        dispatch({type:LOGIN_FALIURE, payload:error})

        console.log("error", error)
    }
    
}


//authorize exisitng user on login page and get user details
export const getUser=(jwt)=> async(dispatch)=>{
    dispatch({type: GET_USER_REQUEST}) 
    try{
        //make api req
        const response= await axios.get(`${API_URL}/api/users/profile`,{
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        })
        const data= response.data; 
       

        dispatch({type:GET_USER_SUCCESS,payload:data}) 
        console.log("user profile", data)

    } catch(error){
        dispatch({type:GET_USER_FALIURE, payload:error})
        console.log("error", error)
    }
    
}



//add to favourite method
export const addToFavourite =(jwt,restaurantId)=> async(dispatch)=>{

    dispatch({type: ADD_TO_FAVOURITE_REQUEST}) 
    try{
        console.log("Calling addToFavourite with:", restaurantId);
       

        //make api req
        const {data}= await api.put(`/api/restaurants/fav/${restaurantId}`,{},{
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        })       

        dispatch({type:ADD_TO_FAVOURITE_SUCCESS,payload:data}) 

        toast.success(' restaurant added to favourite !')
        
        console.log(" user favourite ", data)

    } catch(error){
        dispatch({type:ADD_TO_FAVOURITE_FALIURE, payload:error})
        console.log("error", error)
    }
    
};

//remove item from fav list of
export const removeFromFavourite = (jwt, restaurantId) => async (dispatch) => {
    //dispatch({ type: REMOVE_FROM_FAVOURITE_REQUEST });

    try {
        const { data } = await api.delete(`/api/restaurants/fav/remove/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        dispatch({ type: REMOVE_FROM_FAVOURITE_SUCCESS, payload: data });
        toast.success(' restaurant removed from favourite !')

    } catch (error) {
        //dispatch({ type: REMOVE_FROM_FAVOURITE_FAILURE, payload: error.message });
        console.error("Error removing from favourites:", error);
    }
};



//logout method
export const logout =()=> async(dispatch)=>{
    dispatch({type: LOGOUT}) 
    try{

        localStorage.clear(); //remove jwt when logout
        dispatch({type:LOGOUT}) 
        console.log(" logout success ")

    } catch(error){
        
        console.log("error", error)
    }
    
}