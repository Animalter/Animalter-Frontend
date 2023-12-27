import React from 'react'

const PersonTable = ({data,setSelectedId,selectedId,setShowPopup,editData}) => {
  return (
    <div>

        <div className='flex justify-between border-b-2 border-black mb-5 pb-1 '>
            <p className='w-1/5 font-semibold xs:text-sm lg:text-md'>Name</p>
            <p className='xs:hidden lg:block lg:w-1/10 text-center font-semibold xs:text-sm lg:text-md'>Role</p>
            <p className='xs:hidden lg:block lg:w-1/10 text-left font-semibold xs:text-sm lg:text-md'>Id</p>
            <p className='xs:w-1/3 lg:w-1/5 xs:text-center lg:text-left font-semibold xs:text-sm lg:text-md'>Mail</p>
            <p className='xs:w-1/3 lg:w-1/5 xs:text-center lg:text-left font-semibold xs:text-sm lg:text-md'>Phone</p>
            <p className='xs:hidden lg:block lg:w-1/10 font-semibold xs:text-sm lg:text-md'>Password</p>
            <p className='lg:w-1/10 text-right font-semibold xs:text-sm lg:text-md'>Edit</p>
        </div>

        {data && (
            data?.map((element,i)=>(
              <div key={i} className='flex justify-between items-center border-b border-black py-2'>
                <h3 className='xs:text-sm md:text-md font-bold text-lg w-1/5'>{element.userName}</h3>

                <p className='xs:text-sm md:text-md xs:hidden lg:block text-center'>{element.roleId}</p>
                <p className='xs:text-sm md:text-md xs:hidden lg:block text-center'>{element.userId}</p>
                <p className='xs:text-sm md:text-md xs:w-1/3 lg:w-1/5 xs:text-left md:text-center'>{element.mail }</p>
                <p className='xs:text-sm md:text-md xs:w-1/3 lg:w-1/5 xs:text-right md:text-center'>{element.phoneNumber }</p>
                <p className='xs:text-sm md:text-md xs:hidden lg:block'>{element.userPassword}</p>

                <div className='flex gap-3'>
                  <i className='fa-solid fa-pen ' onClick={()=>{setSelectedId("data.id"); editData(selectedId);  setShowPopup(true);}}></i>
                  <i className='fa-solid fa-trash xs:hidden md:flex' onClick={()=>{setSelectedId("data.id"); editData(selectedId); setShowPopup(true);}}></i>
                </div>

              </div>
            ))

        )}

    </div>
  )
}

export default PersonTable
