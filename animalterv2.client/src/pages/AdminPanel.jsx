import React, { useEffect, useId, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Select from "react-select"

const AdminPanel = () => {
 
  //file tipinde input ve verinin usestate'de kalması ?
  //edit ile gelen resmin popup'da gösterilmesi
  //useMemo kullanımı (infinite scroll'a gerek var mı)
  //delete için forma gerek var mı ayrı bir popup yapılabilir mi ?

  const id=useId();
  const navigate=useNavigate();

  const [selectedTab,setSelectedTab]=useState("animal");
  const [operationType,setOperationType]=useState("animal");
  const [showPopup,setShowPopup]=useState(false);
  const [selectedId,setSelectedId]=useState("");
  const [data,setData]=useState();

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


  const showData=()=>{

    axios.get("url").then((res)=>{

      setData(res.data);

    }).catch((err)=>{

      console.log(err);

    })

  }

  const addData=()=>{

    const url="";
    let data;

    const animalData={
      Name:animalName,
      Type:type,
      Genus:genus,
      Age:age,
      Image:image,
      AdoptState:adoptState,

    }

    const personData={
      Name:name,
      Password:password,
      Email:email,
      Phone:phone,
      Role:operationType

    }

    if(operationType=="animal") data=animalData 
    else data=personData

    axios.post(url,data).then(()=>{

      //success message
      showData();
      resetStates();

    }).catch((err)=>{

      console.log(err);
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

      //success message
      showData();
      resetStates();
      setShowPopup(false);

    }).catch((err)=>{

      console.log(err);
    })

  }

  const deleteData=(id)=>{

    axios.delete(`url/${id}`).then((res)=>{

      if(res.status===200){
        //success message
        showData();
        resetStates();
        setShowPopup(false);
      }
    }).catch((err)=>{

      console.log(err);
      //toast ile kullanıcıya da gösterilebilir
    })

  }


  const onChange = (selectedOption) => {
 
    setAdoptState(selectedOption.value);  
  
  };


  const changeOperation=(value)=>{

    setOperationType(value);   
  }

  useEffect(()=>{
    showData();
  },[])

  useEffect(()=>{

    showData();
    //useMemo kullan

  },[selectedTab])
  


  return (
    <div className='relative h-screen my-6'>

      <h1 className='font-bold text-3xl text-center'>Admin Panel</h1>

      {showPopup && (


      <div className='absolute z-20 w-full h-full backdrop-blur-sm flex flex-col  items-center'>  

      <div className='relative w-2/3 h-3/4 mx-auto bg-[#d8e2dc] flex flex-col justify-center px-8 rounded-xl'> 
       
       <i className='fa-solid fa-x absolute right-3 top-3' onClick={()=>setShowPopup(false)}></i>
        
        <div className='flex justify-center gap-5 mb-8'>
          <h5 className={`text-lg ${selectedTab=="animal" ? 'font-semibold underline-offset-4 underline':''}`} onClick={()=>setSelectedTab("animal")}>Animal</h5>
          <h5 className={`text-lg ${selectedTab=="user" ? 'font-semibold underline-offset-4 underline':''}`} onClick={()=>setSelectedTab("user")}>User</h5>
          <h5 className={`text-lg ${selectedTab=="admin" ? 'font-semibold underline-offset-4 underline':''}`} onClick={()=>setSelectedTab("admin")}>Admin</h5> 

        </div>

        {(selectedTab=="user" || selectedTab=="admin") && (

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

            <Select name="adopt" value={adoptState} options={adoptStates} getOptionLabel={(option) => option.label} 
                    getOptionValue={(option) => option.value}  onChange={onChange} placeholder={adoptState || "Select State"} 
                    className="xs:w-1/2 lg:w-48 text-black rounded-lg border border-black"/>
            
            <input required style={{ display: "none" }} type="file" id={id+'image'} value={image} onChange={(e)=>changeImage(e.target.value)} placeholder="Enter Animal's Image" />
            <label htmlFor={id+'image'} className='flex gap-3 items-center '>
              <i class="fa-solid fa-images text-3xl"></i>
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

      <div className='w-3/4 mx-auto flex divide-x-2 divide-black mt-10'>

      <div className='w-1/2 pr-5'>
        <div className='flex justify-center gap-5 mb-8'>
          <h5 className={`text-lg ${operationType=="animal" ? 'font-semibold underline-offset-4 underline':''}`} onClick={()=>changeOperation("animal")}>Animal</h5>
          <h5 className={`text-lg ${operationType=="user" ? 'font-semibold underline-offset-4 underline':''}`} onClick={()=>changeOperation("user")}>User</h5>
          <h5 className={`text-lg ${operationType=="admin" ? 'font-semibold underline-offset-4 underline':''}`} onClick={()=>changeOperation("admin")}>Admin</h5> 

        </div>

        {(operationType=="user" || operationType=="admin") && (

        <form action="" onSubmit={(e)=>register(e)} className='flex flex-col gap-3'>
            
          <input required type="text" id={id+'name'} value={name} onChange={(e)=>changeName(e.target.value)} placeholder='Enter Name' className='px-3 py-1 rounded-full border border-black outline-none'/>          
                       
          <input required type="password" name="" id={id+'password'} value={password} onChange={(e)=>changePassword(e.target.value)} placeholder='Enter Password' className='px-3 py-1 rounded-full border border-black outline-none' />

          <input required type="email" id={id+'email'} value={email} onChange={(e)=>changeEmail(e.target.value)} placeholder='Enter Email' className='px-3 py-1 rounded-full border border-black outline-none'/>

          <input required type="tel" id={id+'tel'} value={phone} onChange={(e)=>changePhone(e.target.value)} pattern='[0]{1}[5]{1}[0-9]{9}' placeholder='Enter Phone Number' className='px-3 py-1 rounded-full border border-black outline-none'/>          

          <button className='w-full p-2 rounded-full text-white bg-[#009D69] border border-white hover:border-[#009D69]'>Add Person</button>       

        </form>

        )}

        {operationType=="animal" && (

          <form action="" onSubmit={(e)=>register(e)} className='flex flex-col gap-3'>
            
            <input required type="text" id={id+'animalName'} value={name} onChange={(e)=>changeAnimalName(e.target.value)} placeholder="Enter Animal's Name" className='px-3 py-1 rounded-full border border-black outline-none'/>          

            <input required type="text" id={id+'type'} value={type} onChange={(e)=>changeType(e.target.value)} placeholder="Enter Animal's Type" className='px-3 py-1 rounded-full border border-black outline-none'/>          

            <input required type="text" id={id+'genus'} value={genus} onChange={(e)=>changeGenus(e.target.value)} placeholder="Enter Animal's Genus" className='px-3 py-1 rounded-full border border-black outline-none'/>          

            <input required type="text" id={id+'age'} value={age} onChange={(e)=>changeAge(e.target.value)} placeholder="Enter Animal's Age" className='px-3 py-1 rounded-full border border-black outline-none'/>          

            <Select name="adopt" value={adoptState} options={adoptStates} getOptionLabel={(option) => option.label} 
                    getOptionValue={(option) => option.value}  onChange={onChange} placeholder={adoptState || "Select State"} 
                    className="xs:w-1/2 lg:w-48 text-black rounded-lg"/>
                    
            <input required style={{ display: "none" }} type="file" id={id+'image'} value={image} onChange={(e)=>changeImage(e.target.value)} placeholder="Enter Animal's Image" />
            <label htmlFor={id+'image'} className='flex gap-3 items-center '>
              <i class="fa-solid fa-images text-3xl"></i>
              <span className='font-semibold'>Add a Photo</span>
            </label>

            <button className='w-full p-2 rounded-full text-white bg-[#009D69] border border-white hover:border-[#009D69]'>Add Animal</button>       

          </form>
        )}

      </div>

      <div className='w-1/2 pl-5'>

        <div className='flex justify-center gap-5 pb-8'>

          <h5 className={`text-lg ${selectedTab=="animal" ? 'font-semibold underline-offset-4 underline':''}`} onClick={()=>setSelectedTab("animal")}>Animals</h5>
          <h5 className={`text-lg ${selectedTab=="user" ? 'font-semibold underline-offset-4 underline':''}`} onClick={()=>setSelectedTab("user")}>Users</h5>
          <h5 className={`text-lg ${selectedTab=="admin" ? 'font-semibold underline-offset-4 underline':''}`} onClick={()=>setSelectedTab("admin")}>Admins</h5>

        </div>

        <div className='my-5'>
          {/* infinite scroll ile data göster */}
          {
            
            //data.map((element)=>(
              <div className='flex justify-evenly border-b border-black pb-2'>
                <h3 className='font-bold text-lg'>element.name</h3>

                <p>Type</p>
                <p>Genus</p>
                <p>Age</p>

                <div className='flex gap-3'>
                  <i className='fa-solid fa-pen' onClick={()=>{setSelectedId("data.id"); editData(selectedId);  setShowPopup(true);}}></i>
                  <i className='fa-solid fa-trash' onClick={()=>{setSelectedId("data.id"); editData(selectedId); setShowPopup(true);}}></i>
                </div>

              </div>
            //))
            
          }
          

        </div>

      </div>

      </div>
      
    </div>
  )
}

export default AdminPanel
