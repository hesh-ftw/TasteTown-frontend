import { Box, Button, Card, Modal  } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddNewAddress from './addNewAddress';


//cart items
const items=[1,1];

const Cart = () => {

  const createOrderUsingSelectedAddress=()=>{
  }


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

  return (
    <div>
      <main className='lg:flex justify-between mt-10'>

        <section className='lg:w-[40%] space-y-6 lg:min-h-screen pt-10'>
          { items.map((item)=>(
            <CartItem/>
            )) 
          }

          <div className="billDetails px-5 text-sm w-full py-5">
              <p className="py-5">Bill Details</p>

              <div className="space-y-3" style={{color:"grey"}}>
                <div className="flex justify-between w-full">
                  <p>Item Total</p>
                  <p className="text-right w-24">Rs.500</p>
                </div>

                <div className="flex justify-between w-full">
                  <p>Delivery Fee</p>
                  <p className="text-right w-24">Rs.200</p>
                </div>

                <div className="flex justify-between w-full">
                  <p>Service Charge</p>
                  <p className="text-right w-24">Rs.200</p>
                </div>

                {/* divider line -horizontal */}
                <div className="border-t border-gray-400 my-3 w-full"></div>
              </div>

              <div className="flex justify-between w-full">
                  <p>Total Pay</p>
                  <p className="text-right w-24">Rs.2000</p>
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
          {[1,1,1].map((item)=> (
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