import { createSlice } from "@reduxjs/toolkit";


const videoSlice= createSlice({
    name:"video",
    initialState:{
        id:null,
        title:null,
        thumbnail:null,
        channelName:null
    },
    reducers:{
        setId:(state,action)=>{
            state.id=action.payload
        },
        setTitle: (state,action)=>{
            state.title=action.payload
        },
        setThumbnail: (state,action)=>{
            state.thumbnail=action.payload
        },
        setchannelName: (state,action)=>{
            state.channelName=action.payload
        }
    }
}
)

export default videoSlice.reducer
export const {setThumbnail, setTitle,setId , setchannelName}= videoSlice.actions