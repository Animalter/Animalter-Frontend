import React, { useId, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ForgotPassword = () => {

    const id=useId();

    const [email,setEmail]=useState("");

    const notifyError = () => toast.error("Operation Failed Try Again");
    const notifySuccess=()=>toast.success("Your Password Sent to Mail Address");

    const changePassword=()=>{
        //input'tan gelen maili kontrol et (aynı mail mi)
        //şifre bilgisini mail gönder

    }

  return (
    <div className='flex xs:h-156  md:h-screen justify-center items-center xs:bg-login-register-bg-responsive lg:bg-login-register-bg bg-cover'>
      <div className='xs:w-4/5 lg:w-1/2 xs:h-1/3 lg:h-1/2 flex flex-col xs:justify-around md:justify-evenly lg:justify-around items-center'>
        <h1 className='text-white font-bold xs:text-3xl md:text-4xl lg:text-3xl underline-offset-8 underline  decoration-4'>Change Password</h1>

        <form action="" className='flex flex-col gap-3 xs:w-full md:w-1/2 lg:w-3/4'>
              
          <input required type="text" id={id+'email'} value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email' className='px-3 py-1 rounded-full border border-black outline-none'/>          
                                       
          <button onClick={()=>changePassword()} className='w-full p-2 rounded-full text-white bg-[#009D69] border border-white hover:border-[#009D69]'>Send Mail</button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
