import React from 'react'

const Card = (props) => {
  return (
 <div className='lg:w-[23vw] md:w-[30vw] sm:w-[45vw] rounded-xl py-8 px-8 flex items-center flex-col text-center bg-white text-black'>
        <img className=' h-24 w-24 rounded-full object-center object-cover' src={props.elem.userImg} alt="" />
        <h1 className='text-2xl font-bold mt-2'>{props.elem.User}</h1>
        <h5 className='text-blue-600 text-lg my-2'>{props.elem.userRole}</h5>
        <p className='text-sm font-medium leading-tight'>{props.elem.userDesc}</p>
        <button 
        onClick={()=>{
          props.deleteHandler(props.indx)
        }}
         className=' text-white mt-3 bg-red-700 font-semibold rounded-xl px-4 py-2 text-xs cursor-pointer active:scale-95'>Remove</button>

    </div>
  )
}

export default Card