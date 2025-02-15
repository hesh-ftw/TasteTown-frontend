import React, { useEffect } from 'react';
import RestaurantCard from '../Home/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../State/Authentication/Action';

const Favourites = () => {

  const {auth}= useSelector(store=> store)
  //const { favourites } = useSelector((store) => store.auth || { favourites: [] });
  const dispatch= useDispatch();
  useEffect(() => {
    dispatch(getUser(localStorage.jwt)); // Fetch the latest user profile including favourites
  }, [dispatch]);

  return (
    <div className='overflow-y-auto max-h-[100vh] ' style={{ position: 'relative', zIndex: 1 }}>
      <h1 className="py-5 font-semibold text-xl text-center mt-10 ">
        My Favourite Restaurants
      </h1>
      <div className="flex flex-wrap justify-center gap-6 ">  

      {auth.favourites && auth.favourites.length > 0 ? (
  auth.favourites.map((item) => <RestaurantCard key={item.id} item={item} />)
) : (
  <p>No favourite restaurants found.</p>
)}
      </div>
    </div>
  );
};

export default Favourites;
