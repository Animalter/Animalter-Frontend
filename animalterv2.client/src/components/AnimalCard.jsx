import React from 'react'
import Image from '../components/Image'
import { Link } from 'react-router-dom'

const AnimalCard = ({name,type,genus,age,image}) => {
  return (
    <Link to={`/animal/${type}/id`}>
    <div className='relative  h-60 w-36'>

        <div className='absolute top-0 left-0 '>
          <Image src={image} className={"h-60"}/>

        </div>

        <div className='absolute bottom-0 -mb-0.5 z-10 bg-[#D9D9D9] opacity-75 w-full px-3 py-2 '>

          <div className='flex justify-between'>
            <p className='capitalize'>{name}</p>
            <p className='capitalize'>{type}</p>

          </div>

          <div className='flex justify-between'>
            <p className='capitalize'>{genus}</p>
            <p>{age}</p>

          </div>

        </div>

    </div>
    </Link>
  )
}

export default AnimalCard
