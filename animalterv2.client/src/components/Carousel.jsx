import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carousel = ({data}) => {
  return (
    <Swiper  breakpoints={{320: {slidesPerView: 3,},720: {slidesPerView: 4,},1040: { slidesPerView: 5,},}}>

    {data?.map((e,i)=>(

      <SwiperSlide key={i}>
        <AnimalCard name={"name"} type={"type"} genus={"genus"} age={"age"} image={Example} id={"1"}/>
      </SwiperSlide>

    ))}
    
    
  </Swiper>
  )
}

export default Carousel
