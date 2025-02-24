import { Box, Button, Card, Modal  } from '@mui/material'
import React, { useEffect } from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddNewAddress from './addNewAddress';
import { useDispatch, useSelector } from 'react-redux';
import { findCart, getAllCartItems } from '../State/Cart/Action';
import { createOrder } from '../State/Orders/CustomerOrders/Action';


//cart items
const items=[1,1];

const Cart = () => {

  const {cart,auth}= useSelector(store => store)
  
  const jwt= localStorage.getItem("jwt")
  const dispatch = useDispatch()
  
  useEffect(() => {
   dispatch(findCart(jwt));
    
  }, [dispatch, jwt]);


  const createOrderUsingSelectedAddress=()=>{

  }
  useEffect(() => {
    console.log('Updated cart:--> ', cart);
  }, [cart]); 

  // extract cart Items array from the redux sotre of cart
 // const cartItems = cart?.cart?.data?.item || [];
 // console.log('all cart Items ', cartItems)


  //add new address pop up modal
  const handleOpenAddressModal=()=>setOpen(true);


  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

   const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    boxShadow: 24,
    p: 4,
  };

  // cart items total price
  const Citems= useSelector((store)=> store.cart.cartItems || [])
  let cartTotal=0;

      Citems.forEach(item => {
        cartTotal += item.totalPrice;
      })
    console.log('total items value =', cartTotal);



    const deliveryFee= cart?.cartItems.length===0? 0.00 :300.00;

  //total bill price
  const totalBill=( cartTotal+ deliveryFee + cartTotal*0.05);



  const handleSubmit=(values)=>{
    const data={
      jwt: localStorage.getItem("jwt"),
      order:{
        restaurantId: cart.cartItems[0].food?.restaurant.id,
        deliveryAddress:{
          postalCode: values.pincode,
          streetAddress:values.streetAddress
        }
      }
    }
    dispatch(createOrder(data))
    console.log("form values :", values)
  }

  return (
    <div>
      <main className='lg:flex justify-between mt-10'>

        <section className='lg:w-[40%] space-y-6 lg:min-h-screen pt-10'>
           { cart.cartItems.map((item)=>(
            <CartItem item={item} />
            )) 
          } 
           

          <div className="billDetails px-5 text-sm w-full py-5">
              <p className="py-5">Bill Details</p>

              <div className="space-y-3" style={{color:"grey"}}>
                <div className="flex justify-between w-full">
                  <p>Item Total</p>
                  <p className="text-right w-24">Rs.{(cartTotal).toFixed(2)}</p>
                </div>

                <div className="flex justify-between w-full">
                  <p>Delivery Fee</p>
                  <p className="text-right w-24">
                      Rs.{deliveryFee}.00
                   </p>
                </div>

                <div className="flex justify-between w-full">
                  <p>Service Charge</p>
                  <p className="text-right w-24">Rs.{(cartTotal*0.05).toFixed(2)}</p>
                </div>

                {/* divider line -horizontal */}
                <div className="border-t border-gray-400 my-3 w-full"></div>
              </div>

              <div className="flex justify-between w-full">
                  <p>Total Pay</p>
                  <p className="text-right w-24">Rs.{(totalBill).toFixed(2)}</p>
              </div>
              
          </div>
        </section>

          {/* verticle divider*/}
        <div>
        <div className="h-full w-[1px] bg-gray-400 mx-3 "></div>
        </div> 


      {/* choose exisiting addresses */}
        <div className="flex flex-col items-center w-full mt-10">
            <h1 className="text-center font-semibold text-2xl py-5">
              Choose Delivery Address
            </h1>

          <div className="flex gap-5 flex-wrap justify-center">
          {auth.user?.addresses?.map((item)=> (
            <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true} />
            ))}
          </div>

        {/* add a new delivery address */}

          <Card className= "flex gap-5 w-64 p-5 m-5"  sx={{background:'gray'}}>
          <LocationOnIcon/>
          <div className='space-y-3 text-black-500'> 
            <h1 className=' text-lg'> Add New Address</h1>

              <Button variant='contained' sx={{background:'black', color:'white'}} fullWidth onClick={handleOpenAddressModal}> Add</Button>
          </div>
        </Card>

        </div>
      </main>


{/* mui model to add new addresses */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddNewAddress/>
        </Box>
      </Modal>

      

    </div>
  )
}

export default Cart