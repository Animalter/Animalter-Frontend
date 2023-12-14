import React from 'react'
import Example from '../assets/animalter-example-img.jpg'
import AnimalCard from '../components/AnimalCard';

const ExplorerPage = () => {

  const explorerAnimals=[];

  return (
    <div className='my-8 px-8'>
      {
        
        //explorerAnimals.map((animal)=>(
          
          <AnimalCard name={"name"} type={"type"} genus={"genus"} age={"age"} image={Example}/>
          
        //))
      }
      
    </div>
  )
}

export default ExplorerPage
