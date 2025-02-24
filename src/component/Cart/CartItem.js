import {IconButton} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem, updateCartItem } from "../State/Cart/Action";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const CartItem = ({item}) => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jwt");

  const cart = useSelector((store)=>store.cart.cartItems)

  if(cart.length===0){
    return <p className="text-center text-gray-500">Your cart is empty.</p>;
  }

  //change the quantity of the cart item
    const handleUpdateCartItem=(value)=>{
    if(value === -1 && item.quantity === 1){
    handleRemoveCartItem()
    }

    //update the cart item with the changed quantity
    const data={cartItemId: item.id, quantity:item.quantity+value}
    dispatch(updateCartItem({data,jwt}))

  }

    const handleRemoveCartItem=()=>{
    dispatch(removeCartItem({cartItemId:item.id, jwt},[]))
    }

 // const [count, setCount] = useState(0);
  



  return (
    <div className="px-5">
          
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src={item.food.images[0]}
            alt=""
          />
        </div>

        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full  ">
            <p>{item.food.name}  <RemoveShoppingCartIcon onClick={handleRemoveCartItem} style={{fontSize:15}}/></p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
            
                <IconButton onClick={()=>handleUpdateCartItem(-1)} style={{color:"grey"}}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                    <div className="w-5 h-5 text-xs flex items-center justify-center">
                    {item.quantity}
                    </div>
                <IconButton onClick={()=>handleUpdateCartItem(1)} style={{color:"grey"}}>
                  <AddCircleOutlineIcon />
                </IconButton>

              </div>

              <div className="justify-between items-center">
               Rs. {item.totalPrice}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default CartItem;
