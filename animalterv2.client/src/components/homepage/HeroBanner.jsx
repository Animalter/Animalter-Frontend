import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroBanner = () => {

  const navigate=useNavigate();

  return (
    <div className=' flex justify-end h-112 bg-hero-section bg-cover w-4/5 m-auto my-6'>
      
      <div className='h-full flex flex-col justify-around items-center pr-16'>

        <h1 className='text-4xl font-extrabold text-white'>You are Right Place <br /> for Faithful Friend</h1>

        <button className='text-white px-3 py-2 bg-[#FF566A] rounded-full border border-white hover:border-[#FF566A]' onClick={()=>navigate("/explorer")}>Find a Friend</button>
      
      </div>

    </div>
  )
}

export default HeroBanner
