import React from 'react';
import { Card, IconButton } from '@mui/material'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addToFavourite, removeFromFavourite } from '../State/Authentication/Action';
import { isPresentInFavourites } from '../Config/logic';


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
    <Card className="mb-8 mt-8 w-[18rem] h-[22rem] flex flex-col justify-between" style={{ backgroundColor: "grey" }}>
    <div className="relative cursor-pointer">
      <img
        className="w-full h-[10rem] rounded-t-md object-cover"
        src={item.images?.[0] || item.image?.[0] || "fallback-image.jpg"}
        alt="Restaurant"
      />
    </div>
  
    <div className="p-4 textPart flex flex-col flex-grow">
      <p onClick={navigateToRestaurant} className="font-semibold text-lg cursor-pointer">
        {item.name || item.title}
      </p>
      
      <p className="text-gray-5900 text-sm line-clamp-4">
        {item.description}
      </p>
  
      <div className="mt-auto flex justify-end">
        <IconButton onClick={handleAddToFav}>
          {isPresentInFavourites(auth.favourites, item) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </div>
    </div>
  </Card>
  
    

  );
};

export default RestaurantCard;
