import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MenuCard = () => {
  return (
    <Accordion defaultExpanded style={{backgroundColor:"grey"}}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >  
      <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
                <img
                className="w-[7rem] h-[7rem] object-cover"
                src="https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_640.jpg"
                alt=""
                />
                <div className="space-y-1 lg:space-y-5 lg:max-w-2x1">
                    <p className="font-semibold text-xl">Burger</p>
                    <p>Rs.499</p>
                </div>
            </div>
        </div>
    
    <Typography component="span"></Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>

      <div className="pt-5">
            <Button style={{backgroundColor:'black'}} variant="contained" disabled={false} type="submit">
              {true ? "Add to Cart" : "Out Of Stock"}
            </Button>
          </div>

    </AccordionDetails>
  </Accordion>
  )
}

export default MenuCard
