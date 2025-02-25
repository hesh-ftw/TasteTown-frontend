import React from 'react'
import AddressCard from '../Cart/AddressCard'
import { useSelector } from 'react-redux'
import { store } from '../State/store'

const Address = () => {

  const {auth}= useSelector(store=>store)

  return (
    <div className='overflow-y-auto max-h-[100vh] mt-10 ' style={{ position: 'relative', zIndex: 1 }}>
    <h1 className="py-5 font-semibold text-xl text-center mt-10 ">
      My Addresses
    </h1>
    <div className="flex flex-wrap justify-center gap-6 ">  

      {auth.user?.addresses?.map((item) => (
        <AddressCard  item={item} /> 
      ))}
    </div>
  </div>
  )
}

export default Address
