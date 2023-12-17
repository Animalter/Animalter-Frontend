import React, { useState } from 'react'

const UserProfile = () => {

  //user crud
  //adopted animals and adopt state
  //set user info for navigate form or show popup form
  //click pen icon and show form

  const [showPopup,setShowPopup]=useState(false);
  const [updateMessage,setUpdateMessage]=useState("");
  const editedProfile=[];

  const editProfile=(e)=>{

    try{
    const name=e.target[0].value;
    editedProfile.push(name);
    const password=e.target[1].value;
    editedProfile.push(password);
    const email=e.target[2].value;
    editedProfile.push(email);
    const phone=e.target[3].value;
    editedProfile.push(phone);

    setUpdateMessage("Profile Updated")

    }catch(err){

      console.log(err);
      setUpdateMessage("Profile Can't Updated");

    }

    

  }

  const userInfo=[];
  const adoptedAnimals=[];

  return (
    <div className='relative'>

      <i className='absolute right-2 top-2' onClick={()=>setShowPopup(false)}></i>

      <div>

        <div>
          <h3></h3>

          <i></i>
          
        </div>
        

        <p></p>
        <p></p>
        <p></p>

      </div>

      <div>
        {
          //adoptedAnimals.map((animal)=>(

            <div>
              <h3>name</h3>
              <p>type</p>
              <p>genus</p>
              <p>age</p>
              <p>adopt state</p>

            </div>

          //))
        }
      </div>

      {showPopup && (

        <div>

          <form action="" onSubmit={(e)=>editProfile(e)}>

            <input type="text" />
            <input type="text" />
            <input type="email" />
            <input type="tel" pattern='[0]{1}[5]{1}[0-9]{9}' />

            <button type='submit'>Update</button>

          </form>

          {updateMessage && (

            <div>
              <p>{updateMessage}</p>

            </div>
          )}

        </div>

      )} 
      
      
    </div>
  )
}

export default UserProfile
