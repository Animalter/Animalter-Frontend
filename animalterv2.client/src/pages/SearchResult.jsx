import React, { useEffect, useState } from 'react'
import AnimalCard from '../components/AnimalCard';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const SearchResult = () => {

  //loading component (veri hook ile alınırsa [create api] bu yapı için daha uygundur)
  //infinite scroll

  const [data,setData]=useState();
  const params=useParams();
  const filters=params.filter.split("-");
  

  const results=[];

  useEffect(()=>{

    const data={
      Name:filters[0],
      Type:filters[1],
      Genus:filters[2],
      Age:filters[3],
    }
    const url="/";
    axios.post(url,data).then((res)=>{

      setData(res.data);
    
    }).catch((err)=>{
      console.log(err);
    });
    
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
