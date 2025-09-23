import React, { useState } from 'react'
import { Button } from './ui/button'


function Navbar() {
    const [navInput,setNavInp]=useState("")
  return (
    <div className=' h-[60px]  bg-white  px-40 flex justify-between shadow-3xl  '>
        <ul className='font-bold  flex justify-center items-center gap-5' >
           <span className='flex justify-center items-center'>
            logo
           </span>
           <span className='text-3xl flex items-center justify-center font-black text-gradient-to-r from-[#38bdf8] to-[#818cf8]'>
             VidVivid.Ai
           </span>
           <span className='flex items-center justify-center text-zinc-600  hover:animate-bounce duration-500 mt-2'> 
             Features
           </span>
           <span className='flex items-center justify-center text-zinc-600  hover:animate-bounce duration-500 mt-2'>
            Pricing
           </span>
           <span className='flex items-center justify-center text-zinc-600  hover:animate-bounce duration-500 mt-2'>
            About
           </span>
    
        </ul>
        
        <div className='flex items-center justify-center gap-4'>
            <Button className="bg-purple-500  hover:animate-bounce duration-500 rounded-2xl"> Get Started</Button>
            <Button className="bg-purple-500  hover:animate-bounce duration-500 rounded-2xl">Login</Button>
            
        </div>
    </div>
  )
}

export default Navbar