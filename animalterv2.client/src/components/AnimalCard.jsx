import React, { useState } from 'react'
import Image from '../components/Image'
import { Link } from 'react-router-dom'
import { useGetAnimalImageQuery } from '../store/slices/apiSlice'
import Example from '../assets/animalter-example-img.jpg'

const AnimalCard = ({name,type,genus,age,image,id}) => {

console.log(image);

const [imageUrl,setImageUrl]=useState("");

const getResim = async () => {
  try {
    const response = await fetch(`http://localhost:5013/Image/imageName?imageName=c69f1bf7-f2f0-4cf6-a108-1e09f7fa167b.jpg`, {
      method: 'GET',
      headers: {
        'Content-Type': 'image/jpg',
      },
    });
console.log(response)
    const blob = await response.blob();
    console.log(blob)

    const url = URL.createObjectURL(blob);
    console.log(url)

    setImageUrl(url);
  } catch (error) {
    console.error('Hata:', error.message);
  }
};

  const animalimage=useGetAnimalImageQuery(image);

  console.log(animalimage);


  return (
    <Link to={`/animal/${type}/${id}`}>
    <div className='relative xs:h-48 lg:h-60 xs:w-24 lg:w-36'>

        <div className='absolute top-0 left-0 '>
          
          <Image src={imageUrl} className={"xs:h-48 lg:h-60"}/>
          
        </div>

        <div className='absolute bottom-0 -mb-0.5 z-10 bg-[#D9D9D9] opacity-75 w-full xs:px-1 lg:px-3 py-2 '>

          <div className='flex justify-between '>
            <p className='text-sm capitalize'>{name}</p>
            <p className='text-sm capitalize'>{type}</p>

          </div>

          <div className='flex justify-between'>
            <p className='text-sm capitalize'>{genus}</p>
            <p className='text-sm' >{age}</p>

          </div>

        </div>

    </div>
    </Link>
  )
}

export default AnimalCard
