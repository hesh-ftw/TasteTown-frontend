import { Button, Card } from '@mui/material'
import React, { useEffect } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { green } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../State/store';
import { createOrder } from '../State/Orders/CustomerOrders/Action';
import toast from 'react-hot-toast';

const AddressCard = ({item, showButton}) => {

  const dispatch = useDispatch()
  const {cart}= useSelector(store=>store)


  const handleSelectAddress=(item)=>{

    const data={
          jwt: localStorage.getItem("jwt"),
          order:{
            restaurantId: cart.cartItems[0].food?.restaurant.id,
            deliveryAddress:{
              postalCode: item.streetAddress,
              streetAddress:item.postalCode
            }
          }
        }
        dispatch(createOrder(data))
        //toast.success("Order Placed Successfully !")
        console.log('order created with exisitng adddress ', data)
  }   
  return (

    

    <Card className='flex gap-5 w-64 p-5' style={{background:'grey'}}>
      <LocationOnIcon/>
      <div className='space-y-3 text-grey-400'>
        
        <p>
            Street Address : {item.streetAddress} <br/>
            postal code    : {item.postalCode}
        </p>

        {showButton && (
        <Button className='item-center'  style={{background:'white', color:'black'}} 
        variant="contained" fullWidth onClick={()=> handleSelectAddress(item)}> Delever Here</Button>
        )}
        </div>
        
    </Card>
   
  )
}

export default AddressCard
