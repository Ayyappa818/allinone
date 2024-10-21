import React from 'react'
import CounterReaducer from './CounterSlice'
import { useSelector } from 'react-redux'

function Counter() {
    var {count}=useSelector(state=>state.counter)
  return (
    <div>
      <h1>Counter:{count}</h1>
    </div>
  )
}

export default Counter
