import { Button, Card } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { green } from '@mui/material/colors';

const AddressCard = ({item, showButton, handleSelectAddress}) => {
   
  return (

    <Card className='flex gap-5 w-64 p-5' style={{background:'grey'}}>
      <LocationOnIcon/>
      <div className='space-y-3 text-grey-400'>
        
        <p>
            cdcdcdcdc cdcdc 253/2c
        </p>

        {showButton && (
        <Button  style={{background:'white', color:'black'}} 
        variant="contained" fullWidth onClick={()=> handleSelectAddress(item)}> select</Button>
        )}
        </div>
    </Card>
   
  )
}

export default AddressCard
