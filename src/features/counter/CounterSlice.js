import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count:0
}
export const CounterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        incCount:(state,action)=>{
            state.count++
        },
        decCount:{
            decCount:(state)=>{state.count--}
        },
        resetCount:{
            resetCount:(state)=>{state.count=initialState.count}
        }
    }
})
export const {incCount,decCount,resetCount} =CounterSlice.actions;

const CounterReaducer= CounterSlice.reducer;
export default CounterReaducer;