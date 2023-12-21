import React, { useEffect, useId, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {
  
  const [showForm,setShowForm]=useState(false);
  const [deleteSection,setDeleteSection]=useState(false);

  const id=useId();
  const navigate=useNavigate();
  const [cookie,setCookie]=useCookies(['name']);

  const notifyUpdate = () => toast.success("Profile Info Updated");
  
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");

  const changeName=(value)=>{ setName(value);  }

  const changePassword=(value)=>{  setPassword(value);  }
  
  const changeEmail=(value)=>{  setEmail(value);  }

  const changePhone=(value)=>{  setPhone(value);  }

  const editProfile=(id)=>{

    const data={
      Id:id,
      Name:name,
      Password:password,
      Email:email,
      Phone:phone,
    }
    const url=`/url/${id}`;
    axios.put(url,data).then(()=>{
      
      notifyUpdate();     

    }).catch((err)=>{
      console.log(err);
    });

  }

  const deleteProfile=(id)=>{

    axios.delete(`/url/${id}`).then((res)=>{
      
      if(res.status===200)  navigate("/");

    }).catch((err)=>{
      console.log(err);
    });

  }

  const logout=()=>{

    setCookie('name',"");
    navigate("/");
    
  }

  useEffect(()=>{

    if(!cookie.name) navigate('/login');

  },[])

  const adoptedAnimals=[];

  return (
    <div className='flex w-3/4 mx-auto my-10 '>

      <ToastContainer position="top-right" autoClose={5000} />

      <div className='w-1/2 pr-3 border-r-2 border-black h-screen'>

        <div className='flex justify-between items-center mb-12'>
                    
          <h1 className='font-bold text-3xl '>Profile Info</h1>

          <div className='flex gap-3 items-center'>
            <i className={`fa-solid ${showForm ? 'fa-x':'fa-pen'}`} onClick={()=>{setShowForm((prev)=>!prev); setDeleteSection(false);}}></i>
            <i className={`fa-solid ${deleteSection ? 'fa-x':'fa-trash'}`} onClick={()=>{setDeleteSection((prev)=>!prev); setShowForm(false);}}></i>
            <i class="fa-solid fa-right-from-bracket text-white p-1 rounded-lg bg-red-500" onClick={()=>logout()}></i>
          </div>
          
          
        </div>

        <div className='flex flex-col gap-3'>

        <h3 className='font-bold text-lg'>Name</h3>
        
        <p>Password</p>
        <p>Email</p>
        <p>Phone</p>

        </div>

        {showForm && (

        <div className='mt-12'>          

          <form action="" onSubmit={(e)=>editProfile(e)} className=' flex flex-col gap-5'>

            <input type="text" id={id+'name'} value={name} onChange={(e)=>changeName(e.target.value)} placeholder='Enter Your Name' className='px-3 py-1 rounded-full border border-black outline-none'/>          
               
            <input type="password" name="" id={id+'password'} value={password} onChange={(e)=>changePassword(e.target.value)} placeholder='Enter Your Password' className='px-3 py-1 rounded-full border border-black outline-none' />
       
            <input type="email" id={id+'mail'} value={email} onChange={(e)=>changeEmail(e.target.value)} placeholder='Enter Your Email' className='px-3 py-1 rounded-full border border-black outline-none'/>
       
            <input type="tel" id={id+'phone'} value={phone} onChange={(e)=>changePhone(e.target.value)} pattern='[0]{1}[5]{1}[0-9]{9}' placeholder='Enter Your Phone Number' className='px-3 py-1 rounded-full border border-black outline-none'/>
       
            <button onClick={()=>editProfile("id")} className='w-full p-2 rounded-full text-white bg-[#009D69] border border-white hover:border-[#009D69]'>Update</button>               

          </form>

        </div>

        )} 

        {deleteSection && (
            
          <div>

            <p className='font-bold mt-12 text-center mb-5'>Are You Sure Delete This Profile</p>

            <button onClick={()=>deleteProfile("id")} className='w-full p-2 rounded-full text-white bg-[#FF566A] border border-white hover:border-[#FF566A]'>Delete</button>

          </div>
        )}

      </div>

      <div className='flex flex-col items-center w-1/2'>

        <h3 className='font-bold text-3xl mb-12'>Adopted Animals</h3>
        {
          //adoptedAnimals.map((animal)=>(

            <div className='flex justify-evenly w-full pb-2 border-b border-black '>
              <h3>name</h3>
              <p>type</p>
              <p>genus</p>
              <p>age</p>
              <p>adopt state</p>

            </div>

          //))
        }
      </div>     
      
      
    </div>
  )
}

export default UserProfile
