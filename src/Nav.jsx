import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='bg-warning'>
      <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" class="nav-link px-2 link-secondary">Home</Link></li>
        <li><Link to="/cou" class="nav-link px-2">Counter</Link></li>
        <li><Link to="/pro" class="nav-link px-2">Products</Link></li>
        <li><Link to="/p" class="nav-link px-2">NewProducts</Link></li>
        <li><Link to="/" class="nav-link px-2">About</Link></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
    </div>
  )
}

export default Nav
