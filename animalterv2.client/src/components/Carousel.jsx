import React from 'react'

const Carousel = ({data}) => {
  return (
    <Swiper  breakpoints={{320: {slidesPerView: 3,},720: {slidesPerView: 4,},1040: { slidesPerView: 5,},}}>

    {data.map((e)=>(

      <SwiperSlide>
        <AnimalCard name={"name"} type={"type"} genus={"genus"} age={"age"} image={Example} id={"1"}/>
      </SwiperSlide>

    ))}
    
    
  </Swiper>
  )
}

export default Carousel
