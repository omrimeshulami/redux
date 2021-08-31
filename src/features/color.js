import {createSlice} from "@reduxjs/toolkit";

const initialState = "black"
const colorSlice = createSlice({
    name:"color",
    initialState:{ value: initialState},
    reducers:{
        changeColor:(state,action)=>{
            state.value = action.payload
        }
    }
})
export const {changeColor} = colorSlice.actions
export default colorSlice.reducer