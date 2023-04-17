import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import Error from './Components/Errors'
import './index.css'

const App = () =>{
  return (
   <React.Fragment>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='*' element={<Error/>}/>
     </Routes>
   </React.Fragment>
  )
}


export default App