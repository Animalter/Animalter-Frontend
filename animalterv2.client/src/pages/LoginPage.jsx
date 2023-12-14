import React, { useId } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const LoginPage = () => {

  const id=useId();

  const navigate=useNavigate();

  const info=[];

  const login=(e)=>{

    e.preventDefault();

    const name=e.target[0].value;
    info.push(name);
    const password=e.target[1].value;
    info.push(password);

    navigate("/");

  }

  return (
    <div className='flex flex-col gap-8 justify-center items-center h-156 w-full bg-login-register-bg bg-cover'>

      <h3 className='text-white font-bold text-3xl underline-offset-4 underline decoration-4'>LOGIN</h3>

      <div className=''>

        <form action="" onSubmit={(e)=>login(e)} className='flex flex-col gap-3'>
              
          <input type="text" id={id+'name'} placeholder='Enter Your Name' className='px-3 py-1 rounded-full border border-black outline-none'/>          
                         
          <input type="password" name="" id={id+'password'} placeholder='Enter Your Password' className='px-3 py-1 rounded-full border border-black outline-none' />

          <button className='w-full p-2 rounded-full text-white bg-[#009D69] border border-white hover:border-[#009D69]'>Login</button>

          <p className='text-white'>Do You Have Account ? <Link to="/register" className='font-bold' >Register</Link></p>

        </form>

      </div>
      
      
    </div>
  )
}

export default LoginPage
