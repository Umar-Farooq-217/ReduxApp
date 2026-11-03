import React from 'react'

function Navbar() {
  return (
    <nav ClassName="navbar md:navbar-expand bg-1">
  <div ClassName="container-fluid">
    <a ClassName="navbar-brand" href="#">Navbar</a>
    <button ClassName="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
      <span ClassName="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    <dialog ClassName="drawer drawer-end" tabindex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
      <div ClassName="drawer-header">
        <h5 ClassName="drawer-title" id="navbarDrawerLabel">Menu</h5>
        <button type="button" ClassName="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div ClassName="drawer-body mb-2 md:mb-0">
        <ul ClassName="nav navbar-nav me-auto">
          <li ClassName="nav-item">
            <a ClassName="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li ClassName="nav-item">
            <a ClassName="nav-link" href="#">Link</a>
          </li>
          <li ClassName="nav-item">
            <button ClassName="nav-link" type="button" data-bs-toggle="menu" aria-expanded="false">
              Menu
            </button>
           
          </li>
        
        </ul>
        
      </div>
    </dialog>
  </div>
</nav>
  )
}

export default Navbar