import React from 'react'

function Nav() {
  return (
    <div className='sticky-top bg-primary'>
      <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
        <span class="fs-4">Simple header</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="/features" class="nav-link active">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link active">Pricing</a></li>
        <li class="nav-item"><a href="/det" class="nav-link active">Details</a></li>
        <li class="nav-item"><a href="/country" class="nav-link active">Countries</a></li>
        <li class="nav-item"><a href="#" class="nav-link active">About</a></li>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><a class="dropdown-item" href="#">react</a></li>
    <li><a class="dropdown-item" href="#">router</a></li>
    <li><a class="dropdown-item" href="#">dom</a></li>
  </ul>
</div>
      </ul>
    </header>
  </div>
    </div>
  )
}

export default Nav
