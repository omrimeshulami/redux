import {createSlice} from "@reduxjs/toolkit";

const initialState = {name:"",age:0,email:""}
const userSlice = createSlice({
    name:"user",
    initialState:{value: initialState},
    reducers:{
        login:(state,action)=>{
            state.value =action.payload
        },
        clear:(state)=>{
            state.value = initialState
        }
    }
})

export const {login,clear} = userSlice.actions
export default userSlice.reducer