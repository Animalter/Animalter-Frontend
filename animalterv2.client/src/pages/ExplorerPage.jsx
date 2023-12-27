import React, { useEffect, useState } from 'react'
import Example from '../assets/animalter-example-img.jpg'
import AnimalCard from '../components/AnimalCard';
import axios from 'axios';
import { useGetAnimalsQuery } from '../store/slices/apiSlice';

const ExplorerPage = () => {

  const [data,setData]=useState([]);
  //infinite scroll kullanılabilir
  const animals=useGetAnimalsQuery();
  console.log(animals)


useEffect(()=>{

  window.scrollTo({ top: 0, behavior: 'smooth' });

},[])


  return (
    <div className='my-8 px-8'>

      <h1 className='font-bold text-xl mb-8'>Explore New Friends</h1>
      <div className='flex gap-12'>
      {
        
        animals?.data?.map((animal)=>(
          
          <AnimalCard id={animal.animalId} name={animal.animalName} type={"type"} genus={"genus"} age={animal.animalAgeYear} image={Example}/>
          
        ))
      }
      </div>
      
    </div>
  )
}

export default ExplorerPage
