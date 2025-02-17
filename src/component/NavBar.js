import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Avatar, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';


function NavBar() {

  const {auth,cart}=useSelector(store=>store)
  const navigate= useNavigate();

  const handleAvatarClick = ()=>{
      if(auth.user.role==="ROLE_CUSTOMER"){
        navigate('/my-profile')
      }
      else{
        navigate("/admin/restaurant")
      }
  }
  //console.log("Auth state in NavBar:", auth);

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
                        style={{fontSize:"20",color:"white" , marginTop:5, marginRight:5}}> 
                      </ShoppingCartIcon>
                  </IconButton>
              
              </div>

              <div className="">
                {auth.user ? (
                  <Avatar sx={{ bgcolor: "white", color: 'gray',width: 25, height: 25 ,marginTop:1 }}
                    onClick={handleAvatarClick}
                   >
                  {auth.user?.fullName ? auth.user.fullName[0].toUpperCase() : ""}
                  </Avatar>
                ) : (
                  <IconButton onClick={() => navigate("/account/login")}>
                    <PersonIcon />
                  </IconButton>
                )}
            </div>

              {/* <div className=''>
                
                    {auth.user? ( <Avatar onClick={()=>{navigate("/my-profile/")}} className='mt-2 ' style={{width: 25, height: 25,}}> 
                      {auth.user?.fullName[0].toUpperCase()} </Avatar>):

                      ( <IconButton onClick={()=>{navigate("/account/register")}}>
                        <PersonIcon/>
                      </IconButton>)
                     }                       
              </div> */}

        </div>      
      </div>
    </AppBar>
  )
}

export default NavBar
