import React, { useEffect, useState } from 'react'
import Example from '../assets/animalter-example-img.jpg'
import AnimalCard from '../components/AnimalCard';
import axios from 'axios';
import { useGetAnimalsQuery } from '../store/slices/apiSlice';

const ExplorerPage = () => {

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
        
        animals?.data?.map((animal,i)=>{

          return(
          <AnimalCard key={i} id={animal.animalId} name={animal.animalName} type={animal.typeee} genus={animal.genuss} age={animal.animalAgeYear} image={animal.animaiImageUrl}/>
          )
          })
      }
      </div>
      
    </div>
  )
}

export default ExplorerPage
