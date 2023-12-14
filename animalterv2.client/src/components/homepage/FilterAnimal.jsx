import React, { useId, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FilterAnimal = () => {

  const id=useId();
  const navigate=useNavigate();

  const filters=[];

  const handleSubmit=async(e)=>{

    //e.preventDefault();

    const name=e.target[0].value;
    filters.push(name);
    const type=e.target[1].value;
    filters.push(type);
    const genus=e.target[2].value;
    filters.push(genus);
    const age=await e.target[3].value;
    filters.push(age);

    //navigate("/search/result") 

  }

  return (
    <div className='flex flex-col h-128 bg-filter-field bg-cover w-4/5 m-auto my-6 py-5 px-10'>
      
     <h2 className='text-xl text-white underline underline-offset-8 font-semibold '>Detailed Search</h2>

     <form action="" onSubmit={()=>handleSubmit(e)} className='flex flex-col items-end w-1/3 mt-20'>

      <div className='mb-6 flex gap-5'>
        <label htmlFor={id+'name'} className='font-bold text-white '>Name</label>
        <input type="text" id={id+'name'} className='rounded-lg outline-none px-1 py-0.5'/>
      </div>

      <div className='mb-6 flex gap-7'>
        <label htmlFor={id+'type'} className='font-bold text-white '>Type</label>
        <input type="text" id={id+'type'} className='rounded-lg outline-none px-1 py-0.5'/>
      </div>

      <div className='mb-6 flex gap-4'>
        <label htmlFor={id+'genus'} className='font-bold text-white '>Genus</label>
        <input type="text" id={id+'genus'} className='rounded-lg outline-none px-1 py-0.5'/>
      </div>

      <div className='mb-6 flex gap-8'>
        <label htmlFor={id+'age'} className='font-bold text-white'>Age</label>
        <input type="text" id={id+'age'} className='rounded-lg outline-none px-1 py-0.5'/>
      </div>

      <button type='submit' className='w-3/4 px-2 py-1 bg-[#009D69] rounded-full text-white border border-white hover:border-[#009D69]'>Search</button>





     </form>

    </div>
  )
}

export default FilterAnimal
