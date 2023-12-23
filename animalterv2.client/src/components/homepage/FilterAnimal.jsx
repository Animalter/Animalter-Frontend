import React, { useId, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FilterAnimal = () => {

  //hangi url ile gönderilecek
  //gelen veri diğer sayfaya nasıl gidecek

  const id=useId();
  const navigate=useNavigate();

  const [name,setName]=useState();
  const [type,setType]=useState();
  const [genus,setGenus]=useState();
  const [age,setAge]=useState();


  const handleSubmit=()=>{

    //const data={
    //  Name:name,
    //  Type:type,
    //  Genus:genus,
    //  Age:age,
    //}
    //const url="/";
    //axios.post(url,data).then(()=>{

      navigate(`/search/${name}-${type}-${genus}-${age}`)
    //}).catch((err)=>{
    //  console.log(err);
    //});

     
  }

  return (
    <div className='flex flex-col xs:items-center lg:items-start xs:h-96 lg:h-128 xs:bg-filter-field-responsive lg:bg-filter-field bg-cover xs:w-9/10 lg:w-4/5 m-auto my-6 py-5 px-10 rounded-md'>
      
     <h2 className='text-xl text-white underline underline-offset-8 font-semibold '>Detailed Search</h2>

     <form action="" className='flex flex-col items-end lg:w-1/3 xs:mt-10 lg:mt-20 '>

      <div className='mb-6 flex gap-5'>
        <label htmlFor={id+'name'} className='font-bold text-white '>Name</label>
        <input type="text" id={id+'name'} value={name} onChange={(e)=>setName(e.target.value)} className='rounded-lg outline-none px-1 py-0.5'/>
      </div>

      <div className='mb-6 flex gap-7'>
        <label htmlFor={id+'type'} className='font-bold text-white '>Type</label>
        <input type="text" id={id+'type'} value={type} onChange={(e)=>setType(e.target.value)} placeholder='Dog, Cat, Bird, Fish etc.' className='rounded-lg outline-none px-1 py-0.5'/>
      </div>

      <div className='mb-6 flex gap-4'>
        <label htmlFor={id+'genus'} className='font-bold text-white '>Genus</label>
        <input type="text" id={id+'genus'} value={genus} onChange={(e)=>setGenus(e.target.value)} placeholder='British, Golden etc.' className='rounded-lg outline-none px-1 py-0.5'/>
      </div>

      <div className='mb-6 flex gap-8'>
        <label htmlFor={id+'age'} className='font-bold text-white'>Age</label>
        <input type="text" id={id+'age'} value={age} onChange={(e)=>setAge(e.target.value)} className='rounded-lg outline-none px-1 py-0.5'/>
      </div>

      <button onClick={handleSubmit} className='xs:w-full lg:w-3/4 px-2 py-1 bg-[#009D69] rounded-full text-white border border-white hover:border-[#009D69]'>Search</button>

     </form>

    </div>
  )
}

export default FilterAnimal
