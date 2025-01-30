import React from 'react';
import { Card, IconButton } from '@mui/material'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
  return (
    <Card className="mb-8 mt-8 w-[18rem]" style={{backgroundColor:"grey"}} >
      <div className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}>
        <img
          className="w-full h-[10rem] rounded-t-md object-cover" 
          src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3xq93xzfbqhtudigv2.jpg"
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
              <p className="font-semibold text-lg" >Indian Fast Food</p>
              <p className="Otext-gray-500 text-sm">
              Craving it all? Dive into our global fla ...
              </p>
          </div>
          <div>
              <IconButton>
                  {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
              </IconButton>
          </div>
      </div>
    </Card>
    

  );
};

export default RestaurantCard;
