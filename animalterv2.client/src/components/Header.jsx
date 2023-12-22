import React, { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import Logo from '../assets/animalter-logo.svg'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const Header = () => {

  const [cookie,setCookie]=useCookies(['role','name','id']);

  const [data,setData]=useState([]);

  const getTypes=()=>{
    axios.get("http://localhost:8641/Typee").then((res)=>{

    setData(res.data);
    
  }).catch((err)=>{

    console.log(err);

  })
  }

  useEffect(()=>{

    getTypes();
  },[])

  return (
    <header className='bg-[#0093E9] text-white w-full h-16 flex items-center justify-between px-8'>
      
      <Link to="/">
      <div className='flex items-center gap-3 '>
        <ReactSVG src={Logo} />

        <h1 className='text-xl font-bold'>Animalter</h1>

      </div>
      </Link>

      <nav className='flex gap-5'>

        {data.map((e,i)=>(
          <NavLink key={i} to={`animal/${e.typeee}-${e.typeId}` }className={({ isActive }) => isActive ? 'text-black ' : 'hover:underline underline-offset-4'}>{e.typeee}</NavLink>
        ))}

        
        
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-black' : 'hover:underline underline-offset-4'}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-black' : 'hover:underline underline-offset-4'}>Contact</NavLink>
        <NavLink to="/faq" className={({ isActive }) => isActive ? 'text-black ' : 'hover:underline underline-offset-4'}>FAQ</NavLink>
        {cookie.role=="user" && (
          <NavLink to={`/user/${cookie.id}`} className={({ isActive }) => isActive ? 'text-black ' : 'hover:underline underline-offset-4'}>{cookie.name}</NavLink>
        )}
        {cookie.role=="admin" && (
          <NavLink to={`/admin/${cookie.id}`} className={({ isActive }) => isActive ? 'text-black ' : 'hover:underline underline-offset-4'}>Admin Panel</NavLink>
        )}
        {!cookie.role && (
          <NavLink to="/login" className={({ isActive }) => isActive ? 'text-black ' : 'hover:underline underline-offset-4'}>Login</NavLink>
        )}
        


              

      </nav>

    </header>
  )
}

export default Header
