import React, { useEffect } from 'react'
import AnimalCard from '../components/AnimalCard';

const SearchResult = () => {

  //loading component (veri hook ile alınırsa [create api] bu yapı için daha uygundur)
  //sayfa açıldığında gerekli verinin istenmesi

  const results=[];

  useEffect(()=>{
    
  },[])

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
