import React, { useId, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {

  //delete profile
  

  const [showPopup,setShowPopup]=useState(false);
  const [updateMessage,setUpdateMessage]=useState("");

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

  const editProfile=(e)=>{

    const data={
      Name:name,
      Password:password,
      Email:email,
      Phone:phone,
    }
    const url="/";
    axios.post(url,data).then(()=>{
      setUpdateMessage("Profile Updated");

      const timer=setTimeout(()=>{

        setUpdateMessage("");
      },5000);

    }).catch((err)=>{
      console.log(err);
    });

  }

  const deleteProfile=()=>{

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

  const adoptedAnimals=[];

  return (
    <div className='flex w-3/4 mx-auto my-10 '>

      <div className='w-1/2 pr-3 border-r-2 border-black h-screen'>

        <div className='flex justify-between items-center mb-12'>
                    
          <h1 className='font-bold text-3xl '>Profile Info</h1>

          <div className='flex gap-3'>
            <i className={`fa-solid ${showPopup ? 'fa-x':'fa-pen'}`} onClick={()=>setShowPopup(!showPopup)}></i>
            <i class="fa-solid fa-trash"></i>

          </div>
          
          
        </div>

        <div className='flex flex-col gap-3'>

        <h3 className='font-bold text-lg'>Name</h3>
        
        <p>Password</p>
        <p>Email</p>
        <p>Phone</p>

        </div>

        {showPopup && (

        <div className='mt-12'>          

          <form action="" onSubmit={(e)=>editProfile(e)} className=' flex flex-col gap-5'>

            <input type="text" id={id+'name'} value={name} onChange={(e)=>changeName(e.target.value)} placeholder='Enter Your Name' className='px-3 py-1 rounded-full border border-black outline-none'/>          
               
            <input type="password" name="" id={id+'password'} value={password} onChange={(e)=>changePassword(e.target.value)} placeholder='Enter Your Password' className='px-3 py-1 rounded-full border border-black outline-none' />
       
            <input type="email" id={id+'mail'} value={email} onChange={(e)=>changeEmail(e.target.value)} placeholder='Enter Your Email' className='px-3 py-1 rounded-full border border-black outline-none'/>
       
            <input type="tel" id={id+'phone'} value={phone} onChange={(e)=>changePhone(e.target.value)} pattern='[0]{1}[5]{1}[0-9]{9}' placeholder='Enter Your Phone Number' className='px-3 py-1 rounded-full border border-black outline-none'/>
       
            <button className='w-full p-2 rounded-full text-white bg-[#009D69] border border-white hover:border-[#009D69]'>Update</button>               

          </form>

          {updateMessage && (

            <div>
              <p>{updateMessage}</p>

            </div>
          )}

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
