import React from 'react'

const Navbar = (props) => {
    
  return (
 <div style={{backgroundColor:props.color}} className='bg-gray-800 mb-3 flex justify-between items-center px-9 py-3 text-white'>
        <h1 className='text-xl'>{props.title}</h1>
        <div className='flex gap-8'>
            {props.links.map(function(elem,indx){
                return <h2 key={indx}>{elem}</h2>
            })}
        </div>
    </div>    
  )
}

export default Navbar