import React from 'react';
import { Card, IconButton } from '@mui/material'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addToFavourite, removeFromFavourite } from '../State/Authentication/Action';
import { isPresentInFavourites } from '../Config/logic';
import toast from 'react-hot-toast';


const RestaurantCard = ({item}) => {
  const navigate= useNavigate();
  const dispatch= useDispatch();
  const {auth}= useSelector(store=>store);
  const jwt = localStorage.getItem("jwt")


  const handleAddToFav= ()=>{
  if (!isPresentInFavourites(auth.favourites, item)) {
   // console.log('check is present or not t/f ',isPresentInFavourites)
    dispatch(addToFavourite(jwt, item.id)); 
  } else {
    dispatch(removeFromFavourite(jwt, item.id)); 
  }
  }

  //navigate to the exact restaurant profile after click 
  const navigateToRestaurant=()=>{
      navigate(`/restaurant/${item.name}/${item.id}`)
    
  }


  return (
    <Card className="mb-8 mt-8 w-[18rem]" style={{backgroundColor:"grey"}} >
      <div className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}>
        <img
          className="w-full h-[10rem] rounded-t-md object-cover" 
          src={item.images?.[0] || item.image?.[0] || "fallback-image.jpg"}
          alt="Restaurant"
        />

      </div>
        
      {/* <Chip
      size="small"
      className='absolute top-2 left-2'
      color={true? "success":"error"}
      label={true? "open": 'closed'}/> */}

      <div className="p-4 textPart lg:flex w-full justify-between ">
          <div className="space-y-1">
              <p onClick={navigateToRestaurant} className="font-semibold text-lg cursor-pointer" >{item.name || item.title}</p>
              <p className="Otext-gray-500 text-sm">
              {item.description}
              </p>
          </div>
          <div>
              <IconButton onClick={handleAddToFav} >
                  {isPresentInFavourites(auth.favourites,item)?<FavoriteIcon/> :  <FavoriteBorderIcon/>}
              </IconButton>
          </div>
      </div>
    </Card>
    

  );
};

export default RestaurantCard;
