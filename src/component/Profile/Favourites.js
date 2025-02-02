import React from 'react';
import RestaurantCard from '../Home/RestaurantCard';

const Favourites = () => {
  return (
    <div className='overflow-y-auto max-h-[100vh] ' style={{ position: 'relative', zIndex: 1 }}>
      <h1 className="py-5 font-semibold text-xl text-center mt-10 ">
        My Favourite Restaurants
      </h1>
      <div className="flex flex-wrap justify-center gap-6 ">  

        {[1, 1, 1, 1].map((item) => (
          <RestaurantCard/>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
