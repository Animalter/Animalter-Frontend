import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ForgotPassword = () => {

    const [email,setEmail]=useState("");

    const notifyError = () => toast.error("Operation Failed Try Again");
    const notifySuccess=()=>toast.success("Your Password Sent to Mail Address");

    const changePassword=()=>{
        //input'tan gelen maili kontrol et (aynı mail mi)
        //şifre bilgisini mail gönder

    }

  return (
    <div>
      <form action="" className='flex flex-col gap-3'>
              
        <input required type="text" id={id+'email'} value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email' className='px-3 py-1 rounded-full border border-black outline-none'/>          
                                       
        <button onClick={()=>changePassword()} className='w-full p-2 rounded-full text-white bg-[#009D69] border border-white hover:border-[#009D69]'>Send Password</button>

      </form>
    </div>
  )
}

export default ForgotPassword
