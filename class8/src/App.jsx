
import React from 'react'
import axios from 'axios'

const App = () => {

  let getData =  async function(){
    let responsive = await axios.get('https://picsum.photos/v2/list')
    console.log(responsive.data);
    
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App