import React from 'react'
import AnimalCard from '../components/AnimalCard';

const SearchResult = () => {

  const results=[];

  return (
    <div>
      {
        //results.map((animal)=>(
          
          <AnimalCard name={""} type={""} genus={""} image={""} />

        //))
      }
      
    </div>
  )
}

export default SearchResult
