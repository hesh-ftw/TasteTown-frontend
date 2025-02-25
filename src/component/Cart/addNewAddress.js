// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Button } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { store } from '../State/store';
// import { createOrder } from '../State/Orders/CustomerOrders/Action';

// export default function AddNewAddress() {
//   const [formValues, setFormValues] = React.useState({
//     street: '',
//     postalCode: ''
//   });

//   const handleChange = (event) => {
//     setFormValues({ ...formValues, [event.target.name]: event.target.value });
//   };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault(); // Prevents page reload
//   //   console.log('Form submitted with values:', formValues);
//   // };


//   const {cart,auth} = useSelector(store=>store)
//   const dispatch= useDispatch()
  
//     const handleSubmitAddress=()=>{
//       const data={
//         jwt: localStorage.getItem("jwt"),
//         order:{
//           restaurantId: cart.cartItems[0].food?.restaurant.id,
//           deliveryAddress:{
      
//             postalCode: formValues.postalCode,
//             streetAddress:formValues.street
//           }
//         }
//       }
//       dispatch(createOrder(data))
//       console.log("address submit form values :", data)
//     }


//   return (
//     <Box
//       component="form"
//       sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
//       noValidate
//       autoComplete="off"
//       onSubmit={handleSubmitAddress} // Attach submit handler
//     >
//       <h1 className="text-white text-lg font-semibold mb-3">Add New Address</h1>

//       <div>
//         <TextField
//           label="Street Address"
//           name="street"
//           value={formValues.street}
//           onChange={handleChange}
//           placeholder="Enter street"
//           size="small"
//           InputLabelProps={{ style: { color: 'white' } }} // Label color
//           inputProps={{ style: { color: 'white' } }} // Input text color
//           sx={{
//             '& .MuiOutlinedInput-root': {
//               '& fieldset': { borderColor: 'white' }, // Border color
//               '&:hover fieldset': { borderColor: 'white' }, // Hover effect
//               '&.Mui-focused fieldset': { borderColor: 'white' }, // Focus effect
//             },
//           }}
//         />

//         <TextField
//           label="Postal Code"
//           name="postalCode"
//           value={formValues.postalCode}
//           onChange={handleChange}
//           placeholder="Enter postal code"
//           size="small"
//           InputLabelProps={{ style: { color: 'white' } }} // Label color
//           inputProps={{ style: { color: 'white' } }} // Input text color
//           sx={{
//             '& .MuiOutlinedInput-root': {
//               '& fieldset': { borderColor: 'white' }, // Border color
//               '&:hover fieldset': { borderColor: 'white' }, // Hover effect
//               '&.Mui-focused fieldset': { borderColor: 'white' }, // Focus effect
//             },
//           }}
//         />

//         <Button 
//         onSubmit={handleSubmitAddress}
//           type="submit" 
//           variant="contained" 
//           sx={{ backgroundColor: 'gray', color: 'white', mt: 1, ml:1 }} 
//         > 
//           DELIVER HERE 
//         </Button>
//       </div>
//     </Box>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../State/Orders/CustomerOrders/Action';
import toast from 'react-hot-toast';

export default function AddNewAddress() {
  const [formValues, setFormValues] = React.useState({
    street: '',
    postalCode: ''
  });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const { cart } = useSelector(store => store);
  const dispatch = useDispatch();

  const handleSubmitAddress = (event) => {
    event.preventDefault(); // Prevents page reload

    if (!cart.cartItems || cart.cartItems.length === 0) {
      console.error("Cart is empty. Cannot place order.");
      return;
    }

    const data = {
      jwt: localStorage.getItem("jwt"),
      order: {
        restaurantId: cart.cartItems[0].food?.restaurant?.id,
        deliveryAddress: {
          postalCode: formValues.postalCode,
          streetAddress: formValues.street
        }
      }
    };

   dispatch(createOrder(data));
    console.log("Address submitted with values:", data);
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmitAddress} // Attach submit handler
    >
      <h1 className="text-white text-lg font-semibold mb-3">Add New Address</h1>

      <div>
        <TextField
          label="Street Address"
          name="street"
          value={formValues.street}
          onChange={handleChange}
          placeholder="Enter street"
          size="small"
          InputLabelProps={{ style: { color: 'white' } }} // Label color
          inputProps={{ style: { color: 'white' } }} // Input text color
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' }, // Border color
              '&:hover fieldset': { borderColor: 'white' }, // Hover effect
              '&.Mui-focused fieldset': { borderColor: 'white' }, // Focus effect
            },
          }}
        />

        <TextField
          label="Postal Code"
          name="postalCode"
          value={formValues.postalCode}
          onChange={handleChange}
          placeholder="Enter postal code"
          size="small"
          InputLabelProps={{ style: { color: 'white' } }} // Label color
          inputProps={{ style: { color: 'white' } }} // Input text color
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' }, // Border color
              '&:hover fieldset': { borderColor: 'white' }, // Hover effect
              '&.Mui-focused fieldset': { borderColor: 'white' }, // Focus effect
            },
          }}
        />

        <Button          
          type="submit" 
          variant="contained" 
          sx={{ backgroundColor: 'gray', color: 'white', mt: 1, ml: 1 }} 
        > 
          DELIVER HERE 
        </Button>
      </div>
    </Box>
  );
}

