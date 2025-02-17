import React, { useEffect } from 'react';
import LandingImage1 from './home.png'; 
import MultiItemCarousel from './MultiItemCarousel.js';
import RestaurantCard from './RestaurantCard.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurants } from '../State/Restaurant/Action.js';
import { useNavigate } from 'react-router-dom';
import { findCart, getAllCartItems } from '../State/Cart/Action.js';
 
const restaurants=[1,1,1,1];
function Home() {
  const navigate=useNavigate();
  const jwt = localStorage.getItem("jwt");
  const dispatch= useDispatch();
  
 const {restaurant}= useSelector(store=>store)
  // console.log('restaurants---',restaurant)
  // console.log('cart----', cart)

 
  useEffect(()=>{
    dispatch(getAllRestaurants(jwt))
    dispatch(findCart(jwt))
  },[dispatch, jwt])


  return (
    <div>
        <div style={{width: '600px', height: '500px' }}>
            <img 
            src={LandingImage1} 
            alt="Landing-image" 
            style={{ width: '600px', height: '500px' }}/>
        </div>

        <div style={{ textAlign: 'center', marginTop: '-300px', marginLeft: '600px', }}>
            <p 
            style={{
                fontSize: '30px',
                fontWeight: 'bold',
                color: 'grey', 
                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', // Shadow effect
                animation: 'fadeIn 2s ease-in-out',
                lineHeight: '1.5',
                wordWrap: 'break-word'
            }}
            >
            🍛 One Platform, Endless Flavors! 🌟  <br/>
            Discover, Order, and Relish – All in Just a Few Clicks. 🍹
            </p>
      </div>

          <section>
            <p className='text-2xl font-semibold'
                style={{color:'grey', padding:"10", marginBottom:40,  marginTop:140, marginLeft:70}}> Top Meals
            </p>
          </section>

          <section>
            <MultiItemCarousel/>
          </section>

          <section className='px-5 lg:px-10'>
            <h1 className='text -2x1 font-semibold py-3 m-5'
            style={{color:'grey', fontSize:'25px'}}> Available Restaurants</h1>
          </section>
      
          <div className='flex flex-wrap items-center justify-around gap-5'>
            {restaurant.restaurants.map((item)=><RestaurantCard item={item}/>)}
          </div>
        

    </div>
   
  );
}

export default Home;
