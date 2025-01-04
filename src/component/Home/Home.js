import React from 'react';
import LandingImage1 from './home.png'; // Adjust the path as per your file structure
// import '../style.css';
import MultiItemCarousel from './MultiItemCarousel.js';
import RestaurantCard from './RestaurantCard.js';

function Home() {

  const restaurant=[1,1,1,1];
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
                style={{color:'grey', padding:"10", marginBottom:50,  marginTop:150, marginLeft:70}}> Top Meals
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
            {restaurant.map((item)=><RestaurantCard/>)}
          </div>
        

    </div>
   
  );
}

export default Home;
