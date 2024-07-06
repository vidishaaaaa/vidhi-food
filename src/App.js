import React from 'react'
import HomePage from './pages/Home'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Addrest from './pages/Addrest'



const App = () => {
  return (
    <BrowserRouter>
     <Routes>
       <Route path = '/' element ={<HomePage/>} />
       <Route path = '/Addrest' element ={<Addrest/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
