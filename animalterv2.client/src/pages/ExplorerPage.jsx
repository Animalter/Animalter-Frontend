import React, { useEffect, useState } from 'react'
import Example from '../assets/animalter-example-img.jpg'
import AnimalCard from '../components/AnimalCard';
import axios from 'axios';

const ExplorerPage = () => {

  const [data,setData]=useState([]);
  //infinite scroll kullanılabilir
  const getAnimal=()=>{
  axios.get("http://localhost:8641/Animal").then((res)=>{

    setData(res.data);
    console.log(res);
    console.log(res.data);
    

  }).catch((err)=>{

    console.log(err);

  })
}

useEffect(()=>{

  getAnimal();

},[])

  return (
    <div className='my-8 px-8'>

      <h1 className='font-bold text-xl mb-8'>Explore New Friends</h1>
      {
        
        //data.map((animal)=>(
          
          <AnimalCard name={"name"} type={"type"} genus={"genus"} age={"age"} image={Example}/>
          
        //))
      }
      
    </div>
  )
}

export default ExplorerPage
