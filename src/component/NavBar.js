import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Avatar, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from './Cart/Cart';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

function NavBar() {


  const navigate= useNavigate();

  return (

    <AppBar >
      <div className='px-5 py-0 bg-[grey] lg:px[20] lg:px-10 flex justify-between '>
      

        
        <div className='lg: mr-10 cursor-pointer flex item-center space-x-4'>
              <p className='font-semibold py-2'
                onClick={()=>{navigate("/")}}
                >
                  Taste Town
              </p>
        </div>

        <div className='flex item-center'>
              <div className='py-1'>
                  <IconButton>
                      <SearchIcon style={{color: 'white', fontSize:"20"}}/>
                  </IconButton>
              </div>

              <div>
                  <IconButton >
                      <ShoppingCartIcon
                        onClick={()=>{navigate("/cart")}}
                        style={{fontSize:"20",color:"white" , marginTop:5}}> 
                      </ShoppingCartIcon>
                  </IconButton>
              
              </div>

              <div className=''>
                
                     {false?  <Avatar onClick={()=>{navigate("/my-profile/")}} className='mt-2 ' style={{width: 25, height: 25,}}> C </Avatar>:
                     <IconButton onClick={()=>{navigate("/account/register")}}>
                      <PersonIcon/>
                     </IconButton>
                     }                       
              </div>

        </div>      
      </div>
    </AppBar>
  )
}

export default NavBar
