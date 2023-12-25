import React, { useEffect } from 'react'
import Image from '../components/Image'
import Example from '../assets/animalter-example-img.jpg'
import AnimalCard from '../components/AnimalCard'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const AnimalDetailsPage = () => {

  const [cookie,setCookie]=useCookies(['name']);
  const navigate=useNavigate();

  const notifyAdopt = () => toast.success("We received your adopt request. We contact you as soon as possible");
  const notifyError = () => toast.success("Operation failed. Try again");

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
            <h3 className='text-lg font-semibold capitalize'>name</h3>
            <p className='capitalize'>type</p>
            <p className='capitalize'>genus</p>
            <p>age</p>
          </div>
          
          <div>
            <h6 className='font-semibold text-lg'>Explication</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi natus, hic ipsa ullam fugiat, veniam aperiam quas aspernatur soluta, quis quisquam! Illum, adipisci est rerum asperiores id velit? Quaerat, id.
            Eius dolorum quam natus at. Quaerat voluptatum voluptatibus unde itaque saepe ipsam, dolore corporis accusamus est aperiam numquam molestiae aspernatur porro impedit molestias nihil odit ullam autem. Doloribus, aliquid dolorum?
            Quas maiores ipsum esse voluptate debitis expedita velit nesciunt cum, labore ullam accusantium, error laudantium? Accusantium, fuga velit. Ex cum eum dolores quisquam? Facilis quasi, laboriosam cupiditate adipisci magni sit.
            Beatae molestiae labore perferendis maiores sint impedit delectus aut sit pariatur eveniet harum numquam laboriosam veritatis eligendi esse neque laborum quasi, sed aliquam dolorum. Veritatis ea est qui eius quam..</p>
          </div>

          <button disabled={"animal.adopt=='adopted' "} onClick={()=>adoptAnimal("animal.id","user.id")} className='w-full text-white p-2 border border-white bg-[#009D69] rounded-full hover:border-[#009D69]'>Adopt</button>
          
        </div>

      </div>

      <div className='xs:w-9/10 lg:w-3/4 mx-auto'>
        <h3 className='font-semibold text-lg my-5'>Similar</h3>

        <Swiper  breakpoints={{320: {slidesPerView: 3,},720: {slidesPerView: 4,},1040: { slidesPerView: 5,},}}>

          <SwiperSlide><AnimalCard name={"name"} type={"type"} genus={"genus"} age={"age"} image={Example}/></SwiperSlide>
          <SwiperSlide><AnimalCard name={"name"} type={"type"} genus={"genus"} age={"age"} image={Example}/></SwiperSlide>
          <SwiperSlide><AnimalCard name={"name"} type={"type"} genus={"genus"} age={"age"} image={Example}/></SwiperSlide>
          <SwiperSlide><AnimalCard name={"name"} type={"type"} genus={"genus"} age={"age"} image={Example}/></SwiperSlide>
          <SwiperSlide><AnimalCard name={"name"} type={"type"} genus={"genus"} age={"age"} image={Example}/></SwiperSlide>
          <SwiperSlide><AnimalCard name={"name"} type={"type"} genus={"genus"} age={"age"} image={Example}/></SwiperSlide>
        </Swiper>

        

      </div>

      <div className='xs:w-9/10 lg:w-3/4 mx-auto'>
        <h3 className='font-semibold text-lg mb-5 mt-10'>Recommedations</h3>

        <Swiper slidesPerView={5} >

          { //recommended.map((animal)=>{

          <SwiperSlide><AnimalCard name={"name"} type={"type"} genus={"genus"} age={"age"} image={Example}/></SwiperSlide>

          //}) 
          }
          
        </Swiper>

      </div>
      
    </div>
  )
}

export default AnimalDetailsPage
