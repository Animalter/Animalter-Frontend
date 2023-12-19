import React from 'react'
import { useParams } from 'react-router-dom'
import AnimalCard from '../components/AnimalCard';
import Example from '../assets/animalter-example-img.jpg'

const AnimalType = () => {

  const params =useParams();
  const animalsbygenus=[];

  //carousel
  //data boyutuna göre infinite scroll kullanılabilir

  return (
    <div className='p-8 '>
      <h1 className='capitalize text-2xl font-bold mb-8'>{params.animaltype}</h1>

      <div>
        <h3 className='font-semibold text-lg capitalize'>Genus 1</h3>
        {
          //animalsbygenus.map((animal)=>(
            <AnimalCard name={"name"} type={"type"} genus={"genus"} age={"age"} image={Example}/>
          //))

        }
      </div>
      
    </div>
  )
}

export default AnimalType
