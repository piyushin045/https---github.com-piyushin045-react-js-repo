import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
// here the slice we have created is for the auth which tells us  weather the user is verified or not

const initialState = {
    status : false,
    userDate: null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status = true;
            state.userDate = action.payload.userDate;
        },
        
        logout: (state) => {
            state.status = false;
            state.userDate = null;

        }
    }
})

// improvement:- here we can track the login and logout when ever it is requirred 
// same way we can make post also


export const{login,logout} = authSlice.actions;

export default authSlice.reducer