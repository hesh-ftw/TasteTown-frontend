import React from 'react';

const OrderCard = () => {
  return (
    <div className="bg-gray-200 p-5 rounded-lg shadow-md w-full " style={{background:'gray'}}>
      <h2 className="text-lg font-semibold text-black">Order #12345</h2>
      <p className="text-sm text-gray-600">Status: Shipped</p>
      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded " style={{ background:'white', color:'black'}}>
        View Details
      </button>
    </div>
  );
};

export default OrderCard;
