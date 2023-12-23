import React from 'react'
import HeroBanner from '../components/homepage/HeroBanner'
import FilterAnimal from '../components/homepage/FilterAnimal'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigate=useNavigate();

  return (
    <div>     
      <HeroBanner/>

      <div className='bg-gpt-bg h-96 w-4/5 mx-auto bg-cover text-white p-8 flex flex-col justify-between rounded-md'>

        <p className='text-md'>chatGPT 3.5</p>

        <div className='flex flex-col gap-5'>
          <h3 className='text-4xl'>Get Advice From ChatGPT</h3>
          <p className='text-xl'>ChatGPT can tell you which animal you should adopt based on your character</p>
        </div>

        <div className='w-full flex justify-end'>
          <button onClick={()=>navigate("/chatwithgpt")} className='px-3 py-2 font-semibold  rounded-full text-white border-2 border-white hover:bg-white hover:text-black'>Chat with GPT</button>
        </div>
      </div>

      <FilterAnimal/>
    </div>
  )
}

export default HomePage
