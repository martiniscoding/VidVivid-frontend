import axios from 'axios'
import React, { useState } from 'react'
import {Button} from ".././src/components/ui/button"
import { ClipLoader } from 'react-spinners'
import Navbar from './components/Navbar'
import Content from './components/Content'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import FinalPage from './components/FinalPage'
import Home from './components/Home'
function App() {
  
  return (
    <div className='bg-gradient-to-r from-purple-800 via- to-pink-800 w-screen h-screen'>
      
      <Toaster></Toaster>
      
      <Routes>
        <Route path='/content' element={<FinalPage/>}></Route> 
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App