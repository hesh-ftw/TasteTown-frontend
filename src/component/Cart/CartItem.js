import { Chip, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from "react";


const CartItem = () => {
  const cart= [1,1,1,1];
  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src="https://tse4.mm.bing.net/th?id=OIP.QwZZ3QVzEOUZNPdEuUZMwwHaE8&pid=Api&P=0&h=220"
            alt="hotdog"
          />
        </div>

        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full  ">
            <p>hotdog</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
            
                <IconButton style={{color:"grey"}}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                  <div className="w-5 h-5 text-xs flex items-center justify-center">
                   {5}
                  </div>
                
                <IconButton style={{color:"grey"}}>
                  <AddCircleOutlineIcon/>
                </IconButton>

              </div>

              <div className="justify-between items-center">
                {`Rs.`+ 500}
              </div>

              

            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default CartItem;
