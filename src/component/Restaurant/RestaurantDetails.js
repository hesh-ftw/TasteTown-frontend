import React, { useDebugValue, useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import MenuCard from './MenuCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getRestaurantById } from '../State/Restaurant/Action';
import Address from '../Profile/Address';
import { getAllMenuItems } from '../State/Menu/Action';

const foodTypes = [
    { label: "All", value: "all" },
    { label: "Veg", value: "vegetarian" },
    { label: "Non-Veg", value: "non-vegetarian" },
    { label: "Seasonal", value: "seasonal" }
];

const menu=[1,1];

const RestaurantDetails = () => {

    const navigate = useNavigate();
    const dispatch =useDispatch();
    const jwt= localStorage.getItem("jwt");
    const {auth,restaurant,menu}= useSelector(store=>store)
    


    const {id,name,streetAddress}= useParams();
    const [foodType, setFoodType] = useState("all");


    //find the restaurant by id 
    console.log("restaurant == ", restaurant);

     useEffect(()=>{
        dispatch(getRestaurantById(jwt,id));
        dispatch(getAllMenuItems(jwt,id));
    },[]);
    
    console.log("restaurant menu----", menu);

    const handleFilter = (e) => {
       //setFoodType(e.target.value);
        console.log(e.target.value, e.target.name);
    };

    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-400  py-2 mt-10'></h3>

                <div className="pt-3 pb-5">
                    <h1 className="text-4xl font-semibold ">{restaurant.restaurant?.name}</h1>

                    <span className="text-gray-400 flex items-center gap-3 mt-7 " style={{ fontSize: 15, maxWidth: 500 }}>
                        {restaurant.restaurant?.description}
                        description of restaurant description of restaurant description of restaurant description of restaurant description of restaurant 
                    </span>

                    <div className="lg:ml-[680px] lg:mt-[-70px]">
                        <img 
                            src={restaurant.restaurant?.images[0]}

                            alt="Restaurant"
                            style={{ maxHeight: 350, maxWidth: 350 }}
                        />
                    </div>

                    {/* Location and Hours */}
                    <div className="mt-[-100px] text-sm text-gray-400 ">
                        <LocationOnIcon className="mr-2 text-gray-600" fontSize="small" />
                        <span>{restaurant.restaurant?.address?.streetAddress}</span> <br />

                        <CalendarMonthIcon className="mr-2 text-gray-600" fontSize="small" />
                        <span>{restaurant.restaurant?.openingHrs}</span>
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
                    {menu.restaurantMenu.map((item)=> <MenuCard item={item}/>)}
                </div>
              
            </section>

            
        </div>
    );
};

export default RestaurantDetails;
