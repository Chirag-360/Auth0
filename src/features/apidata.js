import { createSlice } from "@reduxjs/toolkit";


const initialState = {};


export const apiSlice = createSlice({
    name:"api",
    initialState:{value:initialState},
    reducers:{
        profileChange:(state, action)=>{
            state.value = action.payload
        },
    },
});

export const {profileChange} = apiSlice.actions


export default apiSlice.reducer;