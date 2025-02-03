import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import MenuCard from './MenuCard';

const foodTypes = [
    { label: "All", value: "all" },
    { label: "Veg", value: "vegetarian" },
    { label: "Non-Veg", value: "non-vegetarian" },
    { label: "Seasonal", value: "seasonal" }
];

const menu=[1,1,1,1,1,1];

const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all");

    const handleFilter = (e) => {
       //setFoodType(e.target.value);
        console.log(e.target.value, e.target.name);
    };

    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-400  py-2 mt-10'>Home / Pizza Hut / 1</h3>

                <div className="pt-3 pb-5">
                    <h1 className="text-4xl font-semibold ">Pizza Hut</h1>

                    <span className="text-gray-400 flex items-center gap-3" style={{ fontSize: 15, maxWidth: 500 }}>
                        Description of the restaurant. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                    </span>

                    <div className="lg:ml-[700px] lg:mt-[-100px]">
                        <img 
                            src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg"
                            alt="Restaurant"
                            style={{ maxHeight: 350, maxWidth: 350 }}
                        />
                    </div>

                    {/* Location and Hours */}
                    <div className="mt-[-100px] text-sm text-gray-400 ">
                        <LocationOnIcon className="mr-2 text-gray-600" fontSize="small" />
                        <span>Colombo 03</span> <br />

                        <CalendarMonthIcon className="mr-2 text-gray-600" fontSize="small" />
                        <span>Monday to Friday, 8 AM - 7 PM</span>
                    </div>
                </div>
            </section>

            <Divider />

            {/* Food Type Filter */}
            <section className="pt-8 lg:flex relative">
                <div className="space-y-10 lg:w-[20%] filter">
                    <div className="box space-y-5 lg:sticky top-28">
                        <Typography variant="h5" sx={{ paddingBottom: "1rem", fontSize:20}}>Food Type</Typography>
                        
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} value={foodType} name="food type">
                                {foodTypes.map((item) => (
                                    <FormControlLabel 
                                        key={item.value} 
                                        value={item.value} 
                                        control={<Radio />} 
                                        label={item.label} 
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            
             
                
                <div className="space-y-5 lg:w-[80%] lg:pl-10 m-5" >Menu
                    {menu.map((item)=> <MenuCard/>)}
                </div>
              
            </section>

            
        </div>
    );
};

export default RestaurantDetails;
