import React from 'react'
import ProfileNavigation from './ProfileNavigation';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Orders from './Orders';
import Favourites from './Favourites';
import Address from './Address';
import Payment from './Payment';

const Profile = () => {
  return (
    <div className='lg:flex justifty between'>
        <div className='sticky h-[80vh] lg:w-[20%]' >
            <ProfileNavigation/>
        </div>

        <div className='lg:w-[80%]'>
          <Routes>
            <Route path='/' element={<UserProfile/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/favourites' element={<Favourites/>} />
            <Route path='/address' element={<Address/>} />
            <Route path='/payment' element={<Payment/>} />
          </Routes>
            
        </div>
      
    </div>
  )
}

export default Profile
