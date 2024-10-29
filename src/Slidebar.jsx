import React from 'react'

function Slidebar() {
  return (
    <div>
  <i class="bi bi-list fs-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"></i>
<div class="offcanvas offcanvas-start d-flex flex-column flex-shrink-0 p-3 text-bg-dark" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header ">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi pe-none me-2" width="16" height="16"></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-danger">
          <svg class="bi pe-none me-2" width="16" height="16"></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-danger">
          <svg class="bi pe-none me-2" width="16" height="16"></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-danger">
          <svg class="bi pe-none me-2" width="16" height="16"></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-danger">
          <svg class="bi pe-none me-2" width="16" height="16"></svg>
          Customers
        </a>
      </li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Slidebar
