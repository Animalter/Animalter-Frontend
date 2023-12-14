import React, { useId } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

  const id=useId();

  const navigate=useNavigate();

  const info=[];

  const register=(e)=>{

    e.preventDefault();

    const name=e.target[0].value;
    info.push(name);
    const password=e.target[1].value;
    info.push(password);
    const mail=e.target[2].value;
    info.push(mail);
    const phone=e.target[3].value;
    info.push(phone);

    navigate("/");

  }

  return (
    <div className='flex flex-col gap-8 justify-center items-center h-156 w-full bg-login-register-bg bg-cover'>

    <h3 className='text-white font-bold text-3xl underline-offset-4 underline decoration-4'>REGISTER</h3>

    <div className='flex flex-row'>

      <form action="" onSubmit={(e)=>register(e)} className='flex flex-col gap-3'>
            
        <input type="text" id={id+'name'} placeholder='Enter Your Name' className='px-3 py-1 rounded-full border border-black outline-none'/>          
                       
        <input type="password" name="" id={id+'password'} placeholder='Enter Your Password' className='px-3 py-1 rounded-full border border-black outline-none' />

        <input type="email" id={id+'mail'} placeholder='Enter Your Email' className='px-3 py-1 rounded-full border border-black outline-none'/>

        <input type="tel" id={id+'phone'} pattern='[0]{1}[5]{1}[0-9]{9}' placeholder='Enter Your Phone Number' className='px-3 py-1 rounded-full border border-black outline-none'/>

        <button className='w-full p-2 rounded-full text-white bg-[#009D69] border border-white hover:border-[#009D69]'>Register</button>

        <p className='text-white'>Do You Have Account ? <Link to="/login" className='font-bold' >Login</Link></p>

      </form>

    </div>
    
    
  </div>
  )
}

export default RegisterPage
