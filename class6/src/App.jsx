
import { useState } from "react";
import React from "react";

const App = () => {
 const [title, settitle] = useState('');
 const [alluser, setAlluser] = useState([])
  let formhandler = (e)=>{
    e.preventDefault()

    let oldUser = [...alluser]
    oldUser.push(title)
    setAlluser(oldUser)
    console.log(oldUser);
    
    settitle('')

  }
  return (
    <div className=' min-h-screen  bg-black flex justify-center items-center p-2' >
      <form onSubmit={(e)=>{
        formhandler(e)
        
      }}
      
      className=' p-3 m-3 bg-white border-2 border-gray-500 text-blue-500 rounded-xl'>
        <input className='p-2 rounded-xl' 
        type="text" 
        placeholder='Enter your name'
        value={title}
        required
        onChange={(e)=>{
          settitle(e.target.value)
        }}

         />
        <button className='px-4 py-2 bg-amber-600 rounded-xl text-white active:scale-95'>Submit</button>
      </form>
      
      {alluser.map((elem,idx)=>{
        return <h1 key={idx}>{elem}</h1>
      })}

    </div>
  )
}

export default App