import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { addItemTocart } from '../State/Cart/Action';

const MenuCard = ({item}) => {

console.log("menu items", item)
const dispatch = useDispatch()


const handleAddItemToCart=()=>{
  const reqData={
    jwt: localStorage.getItem("jwt"),
    cartItem: {
      foodId: item.id,
      quantity: 1,      
    },
  };
  console.log("req data", reqData );

  dispatch(addItemTocart(reqData));

}



  return (
    <Accordion style={{backgroundColor:"grey"}}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >  
      <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
                <img
                className="w-[7rem] h-[7rem] object-cover"
                src={item.images[0]}
                alt=""
                />
                <div className="space-y-1 lg:space-y-5 lg:max-w-2x1">
                    <p className="font-semibold text-xl">{item.name}</p>
                    <p>{item.price}</p>
                </div>
            </div>
        </div>
    
    <Typography component="span"></Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        {item.description}
      </Typography>

      <div className="pt-5">
            <Button onClick={handleAddItemToCart} style={{backgroundColor:'black'}} variant="contained" disabled={false} type="submit">
              {true ? "Add to Cart" : "Out Of Stock"}
            </Button>
          </div>

    </AccordionDetails>
  </Accordion>
  )
}

export default MenuCard
