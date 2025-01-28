import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavBar() {
  return (
    <div className='px-5 py-0 bg-[grey] lg:px[20] lg:px-10 flex justify-between'>
      
      <div className='lg: mr-10 cursor-pointer flex item-center space-x-4'>
            <p className='font-semibold py-2'>
                Taste Town
            </p>
      </div>

      <div className='flex item-center'>
            <div className='py-1'>
                <IconButton>
                    <SearchIcon style={{color: 'white', fontSize:"20"}}/>
                </IconButton>
            </div>

            <div className=''>
                <IconButton>
                     <ShoppingCartIcon style={{fontSize:"20",color:"white" , marginTop:5}}></ShoppingCartIcon>
                </IconButton>
            
            </div>

            <div className=''>
               <IconButton>
                    <Avatar style={{width: 25, height: 25}}>
                    </Avatar> 
               </IconButton>
                               
            </div>

      </div>

      
      
    </div>
  )
}

export default NavBar
