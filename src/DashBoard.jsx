import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

function DashBoard() {
  return (
    <div>
      <Nav></Nav>
      <h1>DashBoard</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default DashBoard
