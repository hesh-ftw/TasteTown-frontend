import React from 'react'
import AddressCard from '../Cart/AddressCard'

const Address = () => {
  return (
    <div className='overflow-y-auto max-h-[100vh] mt-10 ' style={{ position: 'relative', zIndex: 1 }}>
    <h1 className="py-5 font-semibold text-xl text-center mt-10 ">
      My Addresses
    </h1>
    <div className="flex flex-wrap justify-center gap-6 ">  

      {[1, 1, 1, 1].map((item) => (
        <AddressCard/>
      ))}
    </div>
  </div>
  )
}

export default Address
