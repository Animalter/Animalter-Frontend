import React from 'react'
import { Link } from 'react-router-dom';

const AnimalTable = ({data,setSelectedId,selectedId,setShowPopup,editData}) => {
  return (
    <div>

        <div className='flex justify-between border-b-2 border-black mb-5 pb-1'>
          <p className='w-1/5 font-semibold xs:text-sm lg:text-md'>Name</p>
          <p className='font-semibold xs:text-sm lg:text-md'>Image</p>
          <p className='font-semibold xs:text-sm lg:text-md xs:hidden lg:block'>Id</p>
          <p className='font-semibold xs:text-sm lg:text-md'>Type</p>
          <p className='font-semibold xs:text-sm lg:text-md'>Genus</p>
          <p className='font-semibold xs:text-sm lg:text-md'>Gender</p>
          <p className='font-semibold xs:text-sm lg:text-md'>Age</p>
          <p className='font-semibold xs:text-sm lg:text-md'>Edit</p>
        </div>

        {data && (
            data?.map((element,i)=>(
              <div key={i} className='flex justify-between items-center border-b border-black py-2'>
                <h3 className='font-bold text-lg w-1/5 xs:text-sm md:text-md '>{element.animalName}</h3>

                <Link to={element.animaiImageUrl} ><i className='fa-solid fa-x xs:text-sm md:text-md '></i></Link>
                <p className='xs:text-sm md:text-md xs:hidden lg:block'>{element.animalId}</p>
                <p className='xs:text-sm md:text-md '>type</p>
                <p className='xs:text-sm md:text-md '>{element.genusId }</p>
                <p className='xs:text-sm md:text-md '>{element.animalGender}</p>
                <p className='xs:text-sm md:text-md '>{element.animalAgeYear }</p>

                <div className='flex gap-3'>
                  <i className='fa-solid fa-pen' onClick={()=>{setSelectedId("data.id"); editData(selectedId);  setShowPopup(true);}}></i>
                  <i className='fa-solid fa-trash xs:hidden md:flex' onClick={()=>{setSelectedId("data.id"); editData(selectedId); setShowPopup(true);}}></i>
                </div>

              </div>
            ))
        )}



    </div>
  )
}

export default AnimalTable
