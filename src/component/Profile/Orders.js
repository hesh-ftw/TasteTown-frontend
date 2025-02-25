import React, { useEffect } from 'react';
import OrderCard from './OrderCard';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersOrders } from '../State/Orders/CustomerOrders/Action';
import { store } from '../State/store';

const Orders = () => {

const jwt = localStorage.getItem('jwt');
const { userOrders } = useSelector(store => store);
const dispatch= useDispatch();

useEffect(()=>{
  dispatch(getUsersOrders(jwt));
}, [dispatch,jwt]);


  return (
    <div className="flex items-center flex-col min-h-screen mt-10" style={{ position: "relative", zIndex: 1 }}> 

      <h1 className="text-xl text-center py-7 font-semibold">My Orders</h1>
      <div className="space-y-5 w-full lg:w-1/2 max-h-[70vh] overflow-y-auto p-2 "> 

        {userOrders?.orders?.map((item) => (
          <OrderCard item={item} />
        ))
        }
      </div>
    </div>
  );
};

export default Orders;
