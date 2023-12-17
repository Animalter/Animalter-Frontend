import React, { useId } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";

const RegisterPage = () => {

  const id=useId();

  const navigate=useNavigate();

  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");

  const changeName=(value)=>{

    setName(value);

  }

  const changePassword=(value)=>{

    setPassword(value);

  }

  
  const changeEmail=(value)=>{

    setEmail(value);

  }

  const changePhone=(value)=>{

    setPhone(value);

  }

  const register=(e)=>{

    const data={
      Name:name,
      Password:password,
      Email:email,
      Phone:phone,
    }
    const url="/";
    axios.post(url,data).then(()=>{
      navigate("/");
    }).catch((err)=>{
      console.log(err);
    });
  

  }

  return (
    <div className='flex flex-col gap-8 justify-center items-center h-156 w-full bg-login-register-bg bg-cover'>

    <h3 className='text-white font-bold text-3xl underline-offset-4 underline decoration-4'>REGISTER</h3>

    <div className='flex flex-row'>

      <form action="" onSubmit={(e)=>register(e)} className='flex flex-col gap-3'>
            
        <input type="text" id={id+'name'} value={name} onChange={(e)=>changeName(e.target.value)} placeholder='Enter Your Name' className='px-3 py-1 rounded-full border border-black outline-none'/>          
                       
        <input type="password" name="" id={id+'password'} value={password} onChange={(e)=>changePassword(e.target.value)} placeholder='Enter Your Password' className='px-3 py-1 rounded-full border border-black outline-none' />

        <input type="email" id={id+'mail'} value={email} onChange={(e)=>changeEmail(e.target.value)} placeholder='Enter Your Email' className='px-3 py-1 rounded-full border border-black outline-none'/>

        <input type="tel" id={id+'phone'} value={phone} onChange={(e)=>changePhone(e.target.value)} pattern='[0]{1}[5]{1}[0-9]{9}' placeholder='Enter Your Phone Number' className='px-3 py-1 rounded-full border border-black outline-none'/>

        <button className='w-full p-2 rounded-full text-white bg-[#009D69] border border-white hover:border-[#009D69]'>Register</button>

        <p className='text-white'>Do You Have Account ? <Link to="/login" className='font-bold' >Login</Link></p>

      </form>

    </div>
    
    
  </div>
  )
}

export default RegisterPage
