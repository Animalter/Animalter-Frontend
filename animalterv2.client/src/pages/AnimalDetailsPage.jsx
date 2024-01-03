import React, { useEffect } from 'react'
import Image from '../components/Image'
import Example from '../assets/animalter-example-img.jpg'
import AnimalCard from '../components/AnimalCard'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useGetAnimalByIdQuery } from '../store/slices/apiSlice'
import Carousel from '../components/Carousel'


const AnimalDetailsPage = () => {

  const [cookie,setCookie]=useCookies(['name']);
  const navigate=useNavigate();

  const params=useParams();

  const animalDetails=useGetAnimalByIdQuery(params.id);
  console.log(animalDetails);
  

  const notifyAdopt = () => toast.success("We received your adopt request. We contact you as soon as possible");
  const notifyError = () => toast.error("Operation failed. Try again");

  const adoptAnimal=(animalid,userid)=>{
    if(!cookie.name){ 
      navigate("/login")
    }
    else{  
    axios.post(`url/${animalid}/${userid}`).then((res)=>{
      
      notifyAdopt();

    }).catch((err)=>{
      console.log(err);
      notifyError();
    })
    }
  }

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])


  return (
    <div className='my-10'>

    <ToastContainer position="top-right" autoClose={false} />

      <div className='xs:w-9/10 lg:w-3/4 mx-auto flex xs:flex-col lg:flex-row xs:gap-8 lg:gap-20 xs:mb-10 lg:mb-20'>

        <div className='xs:w-full lg:w-1/2 '>
          <Image src={Example} className={"h-156"}/>
        </div>

        <div className='flex flex-col xs:gap-6 lg:gap-0 justify-between lg:max-w-md'>

          <div>      
            <h3 className='text-lg font-semibold capitalize'>{animalDetails?.data?.animalName}</h3>
            <p className='capitalize'>{animalDetails?.data?.typee}</p>
            <p className='capitalize'>{animalDetails?.data?.genuss}</p>
            <p>{animalDetails?.data?.animalAgeYear} Years, {animalDetails?.data?.animalAgeMouth} Months</p>
            <p className='capitalize'>{animalDetails?.data?.animalGender}</p>

          </div>
          
          <div>
            <h6 className='font-semibold text-lg'>Explication</h6>
            <p>{animalDetails?.data?.animalAbout}</p>
          </div>

          <button disabled={"animal.adopt=='adopted' "} onClick={()=>adoptAnimal("animal.id","user.id")} className='w-full text-white p-2 border border-white bg-[#009D69] rounded-full hover:border-[#009D69]'>Adopt</button>
          
        </div>

      </div>

      <div className='xs:w-9/10 lg:w-3/4 mx-auto'>
        <h3 className='font-semibold text-lg my-5'>Similar</h3>

        <Carousel data={[]}/>

        

      </div>

      <div className='xs:w-9/10 lg:w-3/4 mx-auto'>
        <h3 className='font-semibold text-lg mb-5 mt-10'>Recommedations</h3>

        <Carousel data={[]}/>

      </div>
      
    </div>
  )
}

export default AnimalDetailsPage
