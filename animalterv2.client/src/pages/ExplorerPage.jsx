import React from 'react'
import Example from '../assets/animalter-example-img.jpg'
import AnimalCard from '../components/AnimalCard';

const ExplorerPage = () => {

  const explorerAnimals=[];
  //infinite scroll kullanılabilir

  return (
    <div className='my-8 px-8'>

      <h1 className='font-bold text-xl mb-8'>Explore New Friends</h1>
      {
        
        //explorerAnimals.map((animal)=>(
          
          <AnimalCard name={"name"} type={"type"} genus={"genus"} age={"age"} image={Example}/>
          
        //))
      }
      
    </div>
  )
}

export default ExplorerPage
