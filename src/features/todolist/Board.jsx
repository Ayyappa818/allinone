import React from 'react'
import { Outlet } from 'react-router-dom'

function Board() {
  return (
    <div>
      <h1>Board</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default Board
