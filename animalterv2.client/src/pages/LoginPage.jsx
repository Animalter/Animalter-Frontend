import React, { useId, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


const LoginPage = () => {

  const id=useId();
  const navigate=useNavigate();
  const [cookie,setCookie]=useCookies(["name"]);

  const [name,setName]=useState("");
  const [password,setPassword]=useState("");

  const changeName=(value)=>{  setName(value);  }

  const changePassword=(value)=>{  setPassword(value);  }


  const login=(e)=>{

    const data={
      Name:name,
      Password:password,
    }
    const url="/";
    axios.post(url,data).then((res)=>{
      setCookie('name',name);
      //setCookie('id',res.id);
      //setCookie('role',res.role);
      //token ?  id ve role değerinin get ile alınması (res ile döndürülebilir mi)
      navigate("/");
    }).catch((err)=>{
      console.log(err);
    });

  }

  return (
    <div className='flex flex-col gap-8 justify-center items-center h-156 w-full bg-login-register-bg bg-cover'>

      <h3 className='text-white font-bold text-3xl underline-offset-4 underline decoration-4'>LOGIN</h3>

      <div className=''>

        <form action="" onSubmit={(e)=>login(e)} className='flex flex-col gap-3'>
              
          <input type="text" id={id+'name'} value={name} onChange={(e)=>changeName(e.target.value)} placeholder='Enter Your Name' className='px-3 py-1 rounded-full border border-black outline-none'/>          
                         
          <input type="password" name="" id={id+'password'} value={password} onChange={(e)=>changePassword(e.target.value)}  placeholder='Enter Your Password' className='px-3 py-1 rounded-full border border-black outline-none' />

          <button onClick={login} className='w-full p-2 rounded-full text-white bg-[#009D69] border border-white hover:border-[#009D69]'>Login</button>

          <p className='text-white'>Do You Have Account ? <Link to="/register" className='font-bold' >Register</Link></p>

        </form>

      </div>
      
      
    </div>
  )
}

export default LoginPage
