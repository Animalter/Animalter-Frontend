import React from 'react'
import { useParams } from 'react-router-dom'

const AnimalType = () => {

  const params =useParams();

  return (
    <div>
      <h1 className='capitalize'>{params.animaltype}</h1>
      
    </div>
  )
}

export default AnimalType
