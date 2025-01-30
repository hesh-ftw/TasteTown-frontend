import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function AddNewAddress() {
  const [formValues, setFormValues] = React.useState({
    street: '',
    postalCode: ''
  });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    console.log('Form submitted with values:', formValues);
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit} // Attach submit handler
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
          sx={{ backgroundColor: 'gray', color: 'white', mt: 1, ml:1 }} 
        > 
          Submit 
        </Button>
      </div>
    </Box>
  );
}
