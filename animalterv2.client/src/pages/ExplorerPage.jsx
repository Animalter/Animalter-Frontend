import React, { useEffect, useState } from 'react'
import Example from '../assets/animalter-example-img.jpg'
import AnimalCard from '../components/AnimalCard';
import axios from 'axios';
import { useGetAnimalsQuery } from '../store/slices/apiSlice';

const ExplorerPage = () => {

  const animals=useGetAnimalsQuery();
  console.log(animals)

  const [genus,setGenus]=useState("");
  const [type,setType]=useState("");


useEffect(()=>{

  window.scrollTo({ top: 0, behavior: 'smooth' });

},[])


  return (
    <div className='my-8 px-8'>

      <h1 className='font-bold text-xl mb-8'>Explore New Friends</h1>
      <div className='flex gap-12'>
      {
        
        animals?.data?.map((animal,i)=>{

          
          
          axios.get(`http://localhost:5013/Genus/GetGenusById?Id=${animal.animalId}`).then((res)=>{
            let genuss;
          genuss=res.data.genuss
          setGenus(genuss);
          })
          axios.get(`http://localhost:5013/Typee/GetTypeeById?Id=${animal.animalId}`).then((res)=>{
            let typee;
          typee=res.data.typeee
          setType(typee);
          })

          return(
          <AnimalCard key={i} id={animal.animalId} name={animal.animalName} type={type} genus={genus} age={animal.animalAgeYear} image={animal.animaiImageUrl }/>
          )
          })
      }
      </div>
      
    </div>
  )
}

export default ExplorerPage
