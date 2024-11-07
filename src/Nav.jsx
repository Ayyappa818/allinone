import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav() {
  var navigate=useNavigate()
    function Logout(){
        window.localStorage.clear();
        navigate("/")
    }
  return (
    <div class='fixed-top'>
      <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">CRM</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Features</Link>
        </li>
      </ul>
      <Link to="/dashboard/addlead"><button class="btn btn-outline-success ms-2" type="submit">New Leads</button></Link>
      <button onClick={()=>{Logout()}} class="btn btn-outline-secondary ms-2" type="submit">Logout</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
