import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AiFillYoutube } from "react-icons/ai";

import { useNavigate } from "react-router";
import axios from "axios";
import { setchannelName, setId, setThumbnail, setTitle } from "../redux/videoSlice";
import { useDispatch, useSelector } from "react-redux";

function Content() {
    const [foundVideo, setFoundVideo]=useState(false)
    const dispatch =useDispatch()
    const video = useSelector((state)=>{
        return state.video
    })
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
 const api_key="AIzaSyBjn7BUL2kwZZuSLlIhVTxtNhJOq5rDljs"
  const findVideo = async () => {
    try {
      let id = url.split("v=");
      console.log(id[1]);
      dispatch(setId(id[1]))
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id[1]}&key=${api_key}`
      )
      console.log("res.data is ",res.data)
      setFoundVideo(true)
      dispatch(setTitle(res.data.items[0].snippet.title))
      dispatch(setThumbnail(res.data.items[0].snippet.thumbnails.high.url))
      dispatch(setchannelName(res.data.items[0].snippet.channelTitle))
    } catch (e) {
      console.log(`error is comming from findVideo ${e.message}`);
    }
  };
  return (
    <div className=" flex  justify-between gap-4 px-20 pt-15">
      <div className="flex flex-col  text-white ">
        <div className="text-6xl font-black bg-gradient-to-r from-pink-500  via-white to-purple-500 bg-clip-text text-transparent">
          An AI Tutor made for you
        </div>
        <div className="text-xl font-bold mt-4  ">
          Ask questions from your favourite youtube videos endlessly!
        </div>
        <div className="mt-10 flex  justify-between w-1/2 ">
          <div>
            <div className="font-black text-2xl flex justify-center items-center">
              10K+
            </div>
            <div className="font-bold">Answers Given !</div>
          </div>
          <div>
            <div className="font-black  text-2xl flex justify-center items-center">
              99%{" "}
            </div>
            <div className="font-bold">LLM accuracy rate !</div>
          </div>
        </div>
        <div className="mt-10">
          <p className="font-bold text-2xl underline">Intelligent Analysis</p>
          <p className="w-1/2 font-semibold mt-4 bg-gradient-to-r to-pink-500 from-purple-500 p-5 rounded-xl shadow-xl">
           Our advanced AI platform, powered by GPT-4 Mini and built on Langchain, 
           turns YouTube videos into smart knowledge hubs with cutting-edge 
           Retrieval-Augmented Generation (RAG). We fetch the full transcript, 
           split it into chunks, and create semantic embeddings to capture the text's
            deep meaning. Your query transforms into a vector, triggering precise 
            retrieval of relevant video text, which GPT-4 Mini uses to deliver sharp,
             context-rich answers. This high-intelligence process blends retrieval smarts
              with generative power—experience video insights like never before! 🚀
          </p>
        </div>
        <div className="flex gap-6 mt-10 ">
          <p className="bg-white px-5 rounded-full text-black font-semibold hover:animate-caret-blink">
            LLM Powered Analysis
          </p>
          <p className="bg-white px-5 rounded-full text-black font-semibold hover:animate-caret-blink">
            Vector Embedding System
          </p>
          <p className="bg-white px-5 rounded-full text-black font-semibold hover:animate-caret-blink">
            RAG Based System
          </p>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="border bg-gradient-to-r to-pink-700 from-purple-700 rounded-xl w-full flex   items-center  flex-col gap-10  mt-20 h-1/3 py-4 ">
          <div className="border border-dotted bg-gradient-to-r from-purple-500 to-pink-500   px-10 py-2 rounded-xl font-black ml-6 mt-10 flex items-center justify-center text-white   gap-2">
            <div className="text-xl ">Paste your</div>
            <AiFillYoutube className="text-red-500 size-10 "></AiFillYoutube>
            <div className="text-xl">link below!</div>
          </div>
          <div className=" flex items-center justify-center w-full">
            <Input
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              className="w-[80%] border border-dotted text-center text-white"
            ></Input>
          </div>
          
            {
            video.title && video.thumbnail &&video.channelName && <div className="flex  flex-col gap-3 items-center justify-center ">
                <img src={video.thumbnail} className="w-[60%]" alt="" />
                <p  className="mt-4 bg-black text-white text-xl font-semibold flex  justify-center gap-3 mx-4 px-3">
                    <p className="font-bold text-2xl ">Title</p>
                    <p> : {video.title}</p>
                </p>
                 <p className="bg-black  text-white text-xl font-semibold flex items-center justify-center gap-3 ">
                    <p className="font-bold text-2xl">Channel :</p>
                    <p> : {video.channelName}</p>
                </p>
                
            </div>
          }
          {
            foundVideo==false && 
             <Button
              onClick={findVideo}
              className="bg-gradient-to-r from-purple-500 to-pink-500 border-xl border-white "
            >
              Search the Video !
            </Button>
          }
          {
            foundVideo &&
            <Button
              onClick={()=>{
                navigate("/content")
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 border-xl border-white "
            >
              Ask Vi-Vivid AI!
            </Button>
            
          }
          
        </div>
      </div>
    </div>
  );
}

export default Content;
