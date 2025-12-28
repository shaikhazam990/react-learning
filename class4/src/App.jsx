import React from 'react'
import Men from './components/Men';
import Women from './components/Women';

const App = () => {
  let user1={
    name:'Azam',
    gender:'Male',
    Age:20
  }

  let user2={
    name:'shaikh',
    gender:'Female',
    Age:18
  }

  return (
    <div>
      {user1.gender=='Male'? <Men/> : <Women/>}
    </div>

  )
}

export default App

















// import React from 'react'
// import Navbar from './components/Navbar'

// const App = () => {
//   return (
//     <div>
//       <Navbar title='shaikh'  color='blue' links={['home','cart', 'order', 'contact']}/>
//       <Navbar title="shuraim" color='red' links={['home','service', 'menu', 'help']}  />
//       <Navbar title="shahraan" color='green' links={['home','product', 'men', 'women']}/>

//     </div>
//   )
// }

// export default App