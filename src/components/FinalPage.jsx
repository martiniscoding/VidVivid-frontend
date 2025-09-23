import React from 'react'
import {Textarea} from "../components/ui/textarea"
import {Button} from "../components/ui/button"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ClipLoader } from 'react-spinners'
import axios from 'axios'
import Navbar from './Navbar'
import { useNavigate } from 'react-router'
import { setId, setThumbnail, setTitle } from '../redux/videoSlice'
function FinalPage() {
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const [ques,setQues]=useState("")
  const [ans, setAns]= useState()
  const [url, seturl]= useState("")
  const [loading,setLoading]=useState(false)
  const [query, setQuery]=useState(true)
  const video= useSelector((state)=>{
        return state.video
    })
  const findAnswer = async()=>{
    
    try{
      setLoading(true)
     
      const res = await axios.post("http://127.0.0.1:8000/ask" ,{
        statement:ques,
        id:video.id
      })
      setAns(res.data.answer)
      setQuery(false)
      setLoading(false)
    }
    catch(e){
        setLoading(false)
    console.log(`error is comming from findAnswer ${e.message}`)
  }
  }
  const goHome = ()=>{
        dispatch(setTitle(""))
        dispatch(setThumbnail(""))
        dispatch(setId(""))
        navigate(-1)
  }
  return (
    <div >
        <Navbar></Navbar>
        <div className=' flex  p-10 gap-20'>
        
        <div className='w-1/2  h-full flex flex-col  justify-center items-center '>
        <iframe  className='p-5 bg-white border-2 '
        width="800"
        height="500"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        src={`https://www.youtube.com/embed/${video.id}`}>
            
        </iframe>
        <div className='text-white mt-10 '>
            <div className='flex gap-2 bg-black px-4 rounded'>
                <p className='text-2xl font-bold'>Title:</p>
                <p className='text-2xl'>{video.title}</p>
            </div>
        </div>
        </div>
        <div className='py-4 w-1/2 bg-gradient-to-r to-pink-700 from-purple-700 rounded-xl  flex-col flex items-center shadow-xl '>
            <p className='text-2xl font-black text-white underline'>Ask Your Question </p>
           <div className='mt-10 flex justify-between items-center  w-full px-30 gap-5 '>
             <Textarea onChange={(e)=>{
                setQues(e.target.value)
             }} className="w-full text-white text-xl"></Textarea>
             <Button onClick={findAnswer}  className="flex items-center justify-center  bg-purple-500">Ask!</Button>
           </div>
           {
            query &&
            <div className='mt-5 bg-black text-white px-5 rounded'>
            Your answer will appear here 
           </div>
           }
           {
            loading && <ClipLoader></ClipLoader>
           }
           
           {
            ans && <div className='mx-5 font-semibold bg-gradient-to-r from-pink-800 to-purple-800 text-white mt-5 p-5 rounded-2xl '>
               {ans}
            </div>
           }
          {
            ans &&  <div>
            <Button className="px-5 mt-5 bg-red-700 hover:animate-bounce duration-1000" onClick={goHome}>Ask a different Video </Button>
           </div>
          }
           

        </div>
    </div>
    </div>
    
    
  )
}

export default FinalPage