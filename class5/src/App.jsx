
import { useState } from "react"
const App = () => {

  const [marks, setmarks] = useState([39, 48 , 45, 98, 23, 28])

  function graceMarks(){
    const newMarks = marks.map(function(elem){
      if(elem>95){
        return elem;
      }else{
        return elem+5;
      }
    })
    setmarks(newMarks);
  }
  return (
    <div>
      {marks.map(function(elem,idx){
        return <h1 key={idx}> student {idx+1} = {elem} {elem>33 ?"PASS" :" FAIL"}</h1>
      })}
      <button className=" px-8 py-4 bg-amber-700 rounded-2xl text-white" onClick={graceMarks}>give grace marks</button>

    </div>
  )
}

export default App



















// import { useState } from "react"
// const App = () => {

//   let arr = ['shuraim' , 'mahmood', 'azam', 'shahraan', 'shami', 'ali']
//   const [num, setnum] = useState(0)
//   return (
//     <div>
//       <h1>{arr[num]}</h1>

//       <button className=" px-6 py-4 bg-amber-500 rounded-2xl" onClick={()=>{

//         if(num<arr.length-1){
//         setnum(num+1)

//         }
//       }
//         }> Change User</button>

//     </div>
//   )
// }

// export default App










// import React, { useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState(0);
//   return (
//     <div className= " flex gap-6 items-center">
//       <h1>{num}</h1>
//       <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() =>
//         setnum(num+1)
//       }>Increase</button>

//       <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() =>
//         setnum(num-1)
//       }>Increase</button> 

//       <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() =>
//         setnum(num+5)
//       }>jump by 5</button>       
           
//     </div>

    



//   )
// }

// export default App