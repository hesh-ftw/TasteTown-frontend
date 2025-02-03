import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';


// menu icons of profile page
const menu=[
    {title: "orders", icon: <ShoppingBagIcon/>},
    {title: "favourites", icon: <FavoriteIcon/>},
    {title: "address", icon: <HomeIcon/>},
    {title: "payment", icon: <AttachMoneyIcon/>},
    {title: "logout", icon: <LogoutIcon/>}
];

const ProfileNavigation = (open, handleClose) => {
    const isSmallScreen= useMediaQuery("(max-width:1080)");

    const navigate= useNavigate();

    const handleNavigate=(item)=>{
      navigate(`/my-profile/${item.title.toLowerCase()}`)
    }

  return (
    
    <div>
       <Drawer variant={isSmallScreen ? "temporary": "permnent"}
       onClose={handleClose}
        open={open} 
        anchor='left' 
        sx={{zIndex:0, position:'relative'}}>

            <div className="w-[50vw] 1g:w-[20vw] h-[100vh] flex flex-col
                    justify-center text-x1 gap-8 pt-16" style={{ color:'white', background:'gray', width:200}}>

                {menu.map((item, i) => (
                  <React.Fragment key={i}>
                    <div
                      onClick={() => handleNavigate(item)}
                      className="px-5 flex items-center space-x-5 cursor-pointer"
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    {i !== menu.length - 1 && <Divider />}
                  </React.Fragment>
                 ))}      
            </div>  
       </Drawer>
    </div>
  );
};

export default ProfileNavigation;
