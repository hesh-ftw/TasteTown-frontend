import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const OrderCard = ({item}) => {
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
                className="w-[4rem] h-[4rem]"
                src={item.items[0]?.food?.images[0]}
                alt=""
                />
                <div className="space-y-1 lg:space-y-5 lg:max-w-2x1">
                    <p className="font-semibold text-xl">#{item.id}- {item.items[0]?.food.name} <br/>   
                    </p>
                </div>
            </div>
        </div>
    
    <Typography component="span"></Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Created On : {item.createdAt} <br/>
        Order Status : {item.orderStatus} <br/>
        Total Bill : Rs.{(item.totalPrice).toFixed(2)} <br/>
        
      
      </Typography>

    </AccordionDetails>
  </Accordion>
  );
};

export default OrderCard;
