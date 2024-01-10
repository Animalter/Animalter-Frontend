import React from 'react'
import { useParams } from 'react-router-dom'
import AnimalCard from '../components/AnimalCard';
import Example from '../assets/animalter-example-img.jpg'
import { useEffect } from 'react'
import { useGetSameTypeAnimalsQuery } from '../store/slices/apiSlice';
import Loading from '../components/Loading';

const AnimalType = () => {

  const params =useParams();
  const parameteres=params.animaltype.split("-");

  const filteredAnimals=useGetSameTypeAnimalsQuery(parameteres[1]);
  

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])

  return (
    <div className='p-8 lg:w-3/4 mx-auto'>
      <h1 className='capitalize text-2xl font-bold mb-8'>{parameteres[0]}</h1>

      <div>
        
        {!filteredAnimals.data ? (

          <Loading/>

        ):(

          //animals.data.map((animal)=>(
            <AnimalCard name={"name"} type={"type"} genus={"genus"} age={"age"} image={Example} id={"1"}/>
          //))

        )}
      </div>
      
    </div>
  )
}

export default AnimalType
