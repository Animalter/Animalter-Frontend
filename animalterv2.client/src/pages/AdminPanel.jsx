import React, { useEffect, useId, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Select from "react-select"
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetAnimalsQuery, useGetUsersQuery } from '../store/slices/apiSlice';
import AnimalTable from '../components/AnimalTable';
import PersonTable from '../components/PersonTable';


const AdminPanel = () => {

  const id=useId();
  const navigate=useNavigate();
  const [cookie,setCookie]=useCookies(['role']);

  

  const [selectedTab,setSelectedTab]=useState("animal");
  const [operationType,setOperationType]=useState("animal");
  const [showPopup,setShowPopup]=useState(false);
  const [selectedId,setSelectedId]=useState("");
  const [adoptFilter,setAdoptFilter]=useState("");
  const [data,setData]=useState();

    
  const personInfo = useGetUsersQuery();
  const animalInfo=useGetAnimalsQuery();
   

  const notifyAdd = () => toast.success("Registry Added");
  const notifyUpdate = () => toast.success("Registry Updated");
  const notifyDelete = () => toast.success("Registry Deleted");
  const notifyError = () => toast.success("Operation Failed Try Again");

  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  
  const [animalName,setAnimalName]=useState("");
  const [type,setType]=useState("");
  const [genus,setGenus]=useState("");
  const [age,setAge]=useState();
  const [image,setImage]=useState("");
  const [adoptState,setAdoptState]=useState("");
  const [gender,setGender]=useState("");
  const [about,setAbout]=useState();


  const changeName=(value)=>{  setName(value);  }

  const changePassword=(value)=>{  setPassword(value);  }

  const changeEmail=(value)=>{  setEmail(value);  }

  const changePhone=(value)=>{  setPhone(value);  }

  const changeAnimalName=(value)=>{  setAnimalName(value);  }

  const changeType=(value)=>{  setType(value);  }
  
  const changeGenus=(value)=>{  setGenus(value);  }

  const changeAge=(value)=>{  setAge(value);  }

  const changeImage=(value)=>{  setImage(value);  }


  const resetStates=()=>{

    setName("");
    setPassword("");
    setEmail("");
    setPhone("");

    setAnimalName("");
    setType("");
    setGenus("");
    setAge();
    setImage("");
    setAdoptState("");
  }

  const adoptStates=[
    {value:"adopted",label:"Adopted"},
    {value:"notadopted",label:"Not Adopted"},
    {value:"waiting",label:"Waiting"},
  ]

  const addData=()=>{

    const personUrl="http://localhost:5013/User";
    const animalUrl="http://localhost:5013/Animal";
    let data;
    let url;

    const animalData={
      animalName:animalName,
      //Type:type,
      //genus:genus,
      animalAgeYear:age,
      animalAgeMouth:0,
      animaiImageUrl:"image",
      //AdoptState:adoptState,
      animalGender:gender,
      animalAbout:about,
      genusId:1,

    }

    const personData={
      userName:name,
      userPassword:password,
      mail:email,
      phoneNumber:phone,
      //userRoles:operationType,
      roleId:1,

    }

    if(operationType=="animal") {
      data=animalData;
      url=animalUrl;
    } 
    else {
      data=personData
      url=personUrl;
    }

    console.log(data);
    console.log(url);

    axios.post(url,data).then(()=>{

      notifyAdd();
      resetStates();

    }).catch((err)=>{

      console.log(err);
      notifyError();
    })

  }

  const editData=(id)=>{

    axios.get(`/url/${id}`).then((res)=>{

      if(selectedTab=="animal"){
        setAnimalName(res.data.name);
        setType(res.data.type);
        setGenus(res.data.genus);
        setAge(res.data.age)
        setAdoptState(res.data.adoptState)
      }else{
        setName(res.data.name)
        setPassword(res.data.password)
        setEmail(res.data.email)
        setPhone(res.data.phone)
      }
    })

  }

  const updateData=(id)=>{

    const url=`/url/${id}`
    let data;

    const animalData={
      Id:id,
      Name:animalName,
      Type:type,
      Genus:genus,
      Age:age,
      Image:image,
      AdoptState:adoptState,

    }

    const personData={
      Id:id,
      Name:name,
      Password:password,
      Email:email,
      Phone:phone,
      Role:selectedTab

    }

    if(operationType=="animal") data=animalData 
    else data=personData

    axios.put(url,data).then(()=>{

      notifyUpdate();
      showData();
      resetStates();
      setShowPopup(false);

    }).catch((err)=>{

      console.log(err);
      notifyError();
    })

  }

  const deleteData=(id)=>{

    axios.delete(`url/${id}`).then((res)=>{

      if(res.status===200){
        
        notifyDelete();
        showData();
        resetStates();
        setShowPopup(false);
      }
    }).catch((err)=>{

      console.log(err);
      notifyError();
    })

  }


  const onChange = (selectedOption) => {
 
    setAdoptState(selectedOption.value);  
  
  };

  const onChangeFilter = (selectedOption) => {
 
    setAdoptFilter(selectedOption.value);  
  
  };

  const onChangeGender = (selectedOption) => {
 
    setGender(selectedOption.value);  
  
  };


  const changeOperation=(value)=>{

    setOperationType(value);   
  }

  useEffect(()=>{

    //if(cookie.role && cookie.role=="admin") showData();
    //else navigate("/login");
    
  },[])

  useEffect(()=>{

    if(adoptFilter) animalInfo.data.filter((element)=>{element.adoptstate==adoptFilter})

  },[adoptFilter])
  
  

  return (
    <div className='relative lg:h-screen my-6'>

      <ToastContainer position="top-right" autoClose={5000} />

      <h1 className='font-bold xs:text-2xl lg:text-3xl text-center'>Admin Panel</h1>

      {showPopup && (


      <div className='absolute z-20 w-full h-full backdrop-blur-sm flex flex-col  items-center'>  

      <div className='relative xs:w-9/10 lg:w-2/3 xs:h-2/3 lg:h-3/4 mx-auto bg-[#d8e2dc] flex flex-col justify-center px-8 rounded-xl'> 
       
       <i className='fa-solid fa-x absolute right-3 top-3' onClick={()=>setShowPopup(false)}></i>
        
        <div className='flex justify-center gap-5 mb-8'>
          <h5 className="text-lg capitalize font-semibold underline underline-offset-4" >{selectedTab}</h5>
          
        </div>

        {(selectedTab=="user" ) && (

        <form action="" onSubmit={(e)=>register(e)} className='flex flex-col gap-3'>
            
          <input required type="text" id={id+'name'} value={name} onChange={(e)=>changeName(e.target.value)} placeholder='Enter Name' className='px-3 py-1 rounded-full border border-black outline-none'/>          
                       
          <input required type="password" name="" id={id+'password'} value={password} onChange={(e)=>changePassword(e.target.value)} placeholder='Enter Password' className='px-3 py-1 rounded-full border border-black outline-none' />

          <input required type="email" id={id+'email'} value={email} onChange={(e)=>changeEmail(e.target.value)} placeholder='Enter Email' className='px-3 py-1 rounded-full border border-black outline-none'/>

          <input required type="tel" id={id+'tel'} value={phone} onChange={(e)=>changePhone(e.target.value)} pattern='[0]{1}[5]{1}[0-9]{9}' placeholder='Enter Phone Number' className='px-3 py-1 rounded-full border border-black outline-none'/>          

          <div>
              
            <button className='w-1/2 p-2 rounded-full text-white bg-[#B5179E] border border-white hover:border-[#B5179E]' onClick={()=>updateData(selectedId)}>Update Person</button>  
              
            <button className='w-1/2 p-2 rounded-full text-white bg-[#FF566A] border border-white hover:border-[#FF566A]' onClick={()=>deleteData(selectedId)}>Delete Person</button> 
          </div>

        </form>

        )}

        {selectedTab=="animal" && (

          <form action="" onSubmit={(e)=>register(e)} className='flex flex-col gap-3'>
            
            <input required type="text" id={id+'animalName'} value={name} onChange={(e)=>changeAnimalName(e.target.value)} placeholder="Enter Animal's Name" className='px-3 py-1 rounded-full border border-black outline-none'/>          

            <input required type="text" id={id+'type'} value={type} onChange={(e)=>changeType(e.target.value)} placeholder="Enter Animal's Type" className='px-3 py-1 rounded-full border border-black outline-none'/>          

            <input required type="text" id={id+'genus'} value={genus} onChange={(e)=>changeGenus(e.target.value)} placeholder="Enter Animal's Genus" className='px-3 py-1 rounded-full border border-black outline-none'/>          

            <input required type="text" id={id+'age'} value={age} onChange={(e)=>changeAge(e.target.value)} placeholder="Enter Animal's Age" className='px-3 py-1 rounded-full border border-black outline-none'/>   

            <Select name="gender" value={gender} options={[{label:"Male",value:"male"},{label:"Female",value:"female"}]} getOptionLabel={(option) => option.label} 
                    getOptionValue={(option) => option.value}  onChange={onChangeGender} placeholder={gender || "Select Gender"} 
                    className="xs:w-1/2 lg:w-48 text-black rounded-lg border border-black"/>                 

            <Select name="adopt" value={adoptState} options={adoptStates} getOptionLabel={(option) => option.label} 
                    getOptionValue={(option) => option.value}  onChange={onChange} placeholder={adoptState || "Select State"} 
                    className="xs:w-1/2 lg:w-48 text-black rounded-lg border border-black"/>

            <input required type="textarea" id={id+'about'} value={about} onChange={(e)=>setAbout(e.target.value)} placeholder="Write Animal About" className='px-3 py-1 rounded-full border border-black outline-none'/>   
            
            <input required style={{ display: "none" }} type="file" id={id+'image'} value={image} onChange={(e)=>changeImage(e.target.value)} placeholder="Enter Animal's Image" />
            <label htmlFor={id+'image'} className='flex gap-3 items-center '>
              <i className="fa-solid fa-images text-3xl"></i>
              <span className='font-semibold'>Update Photo</span>
            </label>
          
            <div>
              
              <button className='w-1/2 p-2 rounded-full text-white bg-[#B5179E] border border-white hover:border-[#B5179E]' onClick={()=>updateData(selectedId)}>Update Animal</button>  
              
              <button className='w-1/2 p-2 rounded-full text-white bg-[#FF566A] border border-white hover:border-[#FF566A]' onClick={()=>deleteData(selectedId)}>Delete Animal</button> 
            </div>
                

          </form>
        )}

      </div>

      </div>

      )}

      <div className='xs:w-9/10 md:w-4/5 lg:w-3/4 mx-auto flex xs:flex-col lg:flex-row xs:gap-16 lg:gap-0 lg:divide-x-2 divide-black mt-10'>

      <div className='xs:w-full lg:w-1/2 lg:pr-5'>
        <div className='flex justify-center gap-5 mb-8'>
          <h5 className={`text-lg ${operationType=="animal" ? 'font-semibold underline-offset-4 underline':''}`} onClick={()=>changeOperation("animal")}>Animal</h5>
          <h5 className={`text-lg ${operationType=="user" ? 'font-semibold underline-offset-4 underline':''}`} onClick={()=>changeOperation("user")}>Person</h5>       

        </div>

        {(operationType=="user") && (

        <form action="" onSubmit={(e)=>register(e)} className='flex flex-col gap-3'>
            
          <input required type="text" id={id+'name'} value={name} onChange={(e)=>changeName(e.target.value)} placeholder='Enter Name' className='px-3 py-1 rounded-full border border-black outline-none'/>          
                       
          <input required type="password" name="" id={id+'password'} value={password} onChange={(e)=>changePassword(e.target.value)} placeholder='Enter Password' className='px-3 py-1 rounded-full border border-black outline-none' />

          <input required type="email" id={id+'email'} value={email} onChange={(e)=>changeEmail(e.target.value)} placeholder='Enter Email' className='px-3 py-1 rounded-full border border-black outline-none'/>

          <input required type="tel" id={id+'tel'} value={phone} onChange={(e)=>changePhone(e.target.value)} pattern='[0]{1}[5]{1}[0-9]{9}' placeholder='Enter Phone Number' className='px-3 py-1 rounded-full border border-black outline-none'/>          

          <button onClick={()=>addData()} className='w-full p-2 rounded-full text-white bg-[#009D69] border border-white hover:border-[#009D69]'>Add Person</button>       

        </form>

        )}

        {operationType=="animal" && (

          <form action=""  className='flex flex-col gap-3'>
            
            <input required type="text" id={id+'animalName'} value={animalName} onChange={(e)=>changeAnimalName(e.target.value)} placeholder="Enter Animal's Name" className='px-3 py-1 rounded-full border border-black outline-none'/>          

            <input required type="text" id={id+'type'} value={type} onChange={(e)=>changeType(e.target.value)} placeholder="Enter Animal's Type" className='px-3 py-1 rounded-full border border-black outline-none'/>          

            <input required type="text" id={id+'genus'} value={genus} onChange={(e)=>changeGenus(e.target.value)} placeholder="Enter Animal's Genus" className='px-3 py-1 rounded-full border border-black outline-none'/>          

            <input required type="text" id={id+'age'} value={age} onChange={(e)=>changeAge(e.target.value)} placeholder="Enter Animal's Age" className='px-3 py-1 rounded-full border border-black outline-none'/>          

            <Select name="gender" value={gender} options={[{label:"Male",value:"male"},{label:"Female",value:"female"}]} getOptionLabel={(option) => option.label} 
                    getOptionValue={(option) => option.value}  onChange={onChangeGender} placeholder={gender || "Select Gender"} 
                    className="xs:w-1/2 lg:w-48 text-black rounded-lg border border-black"/>                 

            <Select name="adopt" value={adoptState} options={adoptStates} getOptionLabel={(option) => option.label} 
                    getOptionValue={(option) => option.value}  onChange={onChange} placeholder={adoptState || "Select State"} 
                    className="xs:w-1/2 lg:w-48 text-black rounded-lg border border-black"/>

            <input required type="textarea" id={id+'about'} value={about} onChange={(e)=>setAbout(e.target.value)} placeholder="Write Animal About" className='px-3 py-1 rounded-full border border-black outline-none'/> 
                    
            <input required style={{ display: "none" }} type="file" id={id+'image'} value={image} onChange={(e)=>changeImage(e.target.value)} placeholder="Enter Animal's Image" />
            <label htmlFor={id+'image'} className='flex gap-3 items-center '>
              <i className="fa-solid fa-images text-3xl"></i>
              <span className='font-semibold'>Add a Photo</span>
            </label>

            <button onClick={()=>addData()} className='w-full p-2 rounded-full text-white bg-[#009D69] border border-white hover:border-[#009D69]'>Add Animal</button>       

          </form>
        )}

      </div>

      <div className='xs:w-full lg:w-2/3 lg:pl-5 xs:mb-10 md:mb-0'>

        <div className='flex flex-col items-end'>

          <div className='w-full flex justify-center gap-5 pb-5'>
            <h5 className={`text-lg ${selectedTab=="animal" ? 'font-semibold underline-offset-4 underline':''}`} onClick={()=>setSelectedTab("animal")}>Animals</h5>
            <h5 className={`text-lg ${selectedTab=="user" ? 'font-semibold underline-offset-4 underline':''}`} onClick={()=>setSelectedTab("user")}>Person</h5>
           
          </div>
          {selectedTab=="animal" && (

          <Select name="adoptfilter" value={adoptFilter} options={adoptStates} getOptionLabel={(option) => option.label} 
                  getOptionValue={(option) => option.value}  onChange={onChangeFilter} placeholder={adoptFilter || "Select Filter"} 
                  className="xs:w-1/3 md:w-1/4 lg:w-36 xs:text-xs md:text-sm mb-3 text-black rounded-lg border border-black"/>
          
          )}

        </div>

        <div className='my-5'>

        {selectedTab=="animal" && (

          <AnimalTable data={animalInfo?.data} editData={editData} selectedId={selectedId} setSelectedId={setSelectedId} setShowPopup={()=>setShowPopup()} />
            
        )}

        {selectedTab=="user" && (

          <PersonTable data={personInfo?.data} editData={editData} selectedId={selectedId} setSelectedId={setSelectedId} setShowPopup={()=>setShowPopup()}/>
            
        )}
          
        </div>

      </div>

      </div>
      
    </div>
  )
}

export default AdminPanel
