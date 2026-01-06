
import { useState } from "react"
import React from "react"
import Card from "./components/card"
const App = () => {
  const [User, setUser] = useState('')
  const [userImg, setUserImg] = useState('')
  const [userDesc, setUserDesc] = useState('')
  const [userRole, setUserRole] = useState('')

  const [allUser, setallUser] = useState([])
  let formhandler=(e)=>{
    e.preventDefault()
    let oldUser = [...allUser]
    oldUser.push({User,userImg,userRole,userDesc})  
    console.log(oldUser);
    setallUser(oldUser)
      
    setUser('')
    setUserImg('')
    setUserDesc('')
    setUserRole('')
    
  }

  let deleteHandler=(indx)=>{
    let copyUser = [...allUser] 
    copyUser.splice(indx,1) 
    setallUser(copyUser)  
  }
  return (

    <div className=' min-h-screen bg-black text-white '>
      <form 
            onSubmit={(e)=>{
              formhandler(e)
            }}

      className=' gap-3 px-2 py-10 flex flex-wrap justify-center'>

        <input 
        value={User}
        onChange={(e)=>{
          setUser(e.target.value)          
        }}
        className='border-2 text-2xl font-semibold px-5 py-2 m-2 w-[45%] rounded-xl border-amber-400' 
        type="text" 
        placeholder='Enter Name' />

        <input
        value={userImg}
        onChange={(e)=>{
          setUserImg(e.target.value)          
        }}         

        className='border-2 text-2xl font-semibold px-5 py-2 m-2 w-[45%] rounded-xl border-amber-400' 
        type="text" 
        placeholder='Image URL' />

        <input
        value={userRole}
        onChange={(e)=>{
          setUserRole(e.target.value)          
        }}         
        className='border-2 text-2xl font-semibold px-5 py-2 m-2 w-[45%] rounded-xl border-amber-400' 
        type="text" 
        placeholder='Enter Role' />

        <input
        value={userDesc}
        onChange={(e)=>{
          setUserDesc(e.target.value)          
        }}         
        className='border-2 text-2xl font-semibold px-5 py-2 m-2 w-[45%] rounded-xl border-amber-400' 
        type="text" 
        placeholder='Enter Description' />

        <button 
        className='px-5 py-2 text-2xl font-semibold cursor-pointer active:scale-95 bg-green-500 rounded-2xl'>Create User</button>
      </form>
    <div className='gap-3 px-2 py-10 flex flex-wrap'>       
    {allUser.map(function(elem,indx){
      return <Card indx={indx}  elem={elem} deleteHandler={deleteHandler} />
    })}  
    </div>  
    </div>    
  )
}
export default App
