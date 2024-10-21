import React from 'react'
import CounterReaducer, { decCount, incCount, resetCount } from './CounterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    var {count}=useSelector(state=>state.counter)
    var dispatch=useDispatch()
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={()=>{dispatch(incCount())}}>Increment</button>
      <button onClick={()=>{dispatch(decCount())}}>Decrement</button>
      <button onClick={()=>{dispatch(resetCount())}}>Reset</button>
    </div>
  )
}

export default Counter  
