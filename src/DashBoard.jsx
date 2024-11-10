import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

function DashBoard() {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  )
}

export default DashBoard
