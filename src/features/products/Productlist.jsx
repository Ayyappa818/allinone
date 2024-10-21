import React from 'react'
import { useSelector } from 'react-redux'

function Productlist() {
    var Products= useSelector(state=>state.productReducer)
    console.log(Products)
  return (
    <div>
      <h1>Products</h1>
      {
        Products.map((p)=>{
            return <li>{p.title}</li>
        })
      }
    </div>
  )
}

export default Productlist
