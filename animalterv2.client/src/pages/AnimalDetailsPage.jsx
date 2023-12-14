import React from 'react'
import Image from '../components/Image'
import Example from '../assets/animalter-example-img.jpg'
import AnimalCard from '../components/AnimalCard'

const AnimalDetailsPage = () => {
  return (
    <div className='my-10'>

      <div className='w-3/4 mx-auto flex gap-20 mb-20'>

        <div className='w-1/2 '>
          <Image src={Example} className={"h-156"}/>
        </div>

        <div className='flex flex-col justify-between max-w-md'>

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

          <button className='w-full text-white p-2 border border-white bg-[#009D69] rounded-full hover:border-[#009D69]'>Adopt</button>
          
        </div>

      </div>

      <div className='w-3/4 mx-auto'>
        <h3 className='font-semibold text-lg my-5'>Similar</h3>

        <AnimalCard name={"name"} type={"type"} genus={"genus"} age={"age"} image={Example}/>

      </div>

      <div className='w-3/4 mx-auto'>
        <h3 className='font-semibold text-lg mb-5 mt-10'>Recommedations</h3>

        <AnimalCard name={"name"} type={"type"} genus={"genus"} age={"age"} image={Example}/>

      </div>
      
    </div>
  )
}

export default AnimalDetailsPage
