import React from 'react'
import { ReactSVG } from 'react-svg'
import Logo from '../assets/animalter-logo.svg'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-[#0093E9] text-white w-full h-16 flex items-center justify-between px-8'>
      
      <Link to="/">
      <div className='flex items-center gap-3 '>
        <ReactSVG src={Logo} />

        <h1 className='text-xl font-bold'>Animalter</h1>

      </div>
      </Link>

      <nav className='flex gap-5'>

        <NavLink to="animal/dog" className={({ isActive }) => isActive ? 'text-black ' : 'hover:underline underline-offset-4'}>Dog</NavLink>
        <NavLink to="animal/cat" className={({ isActive }) => isActive ? 'text-black ' : 'hover:underline underline-offset-4'}>Cat</NavLink>
        <NavLink to="animal/bird" className={({ isActive }) => isActive ? 'text-black ' : 'hover:underline underline-offset-4'}>Bird</NavLink> 
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-black' : 'hover:underline underline-offset-4'}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-black' : 'hover:underline underline-offset-4'}>Contact</NavLink>
        <NavLink to="/faq" className={({ isActive }) => isActive ? 'text-black ' : 'hover:underline underline-offset-4'}>FAQ</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? 'text-black ' : 'hover:underline underline-offset-4'}>Login</NavLink>      

      </nav>

    </header>
  )
}

export default Header
