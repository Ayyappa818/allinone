import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  var navigate=useNavigate()
  useEffect(()=>{
    console.log(window.localStorage.getItem('token'))
    if(window.localStorage.getItem('token')){
      navigate("/dashboard")
    }else{
      navigate("/login")
    }
  })
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
