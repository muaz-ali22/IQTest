import React from 'react'
import "../components/Navbar.css"
import logo from '../components/logo.png'
import {NavLink } from 'react-router-dom'
function Nav(){
return(
     <div className='Navbar'>
       <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
  <img className='img' src={logo} alt=''/>
    <a class="navbar-brand" href="#">IQTEST.ai</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav flex">
        <li class="nav-item flex-items">
          <NavLink to="/" class="nav-link">Home</NavLink>
        </li>
        <li class="nav-item flex-items">
          <NavLink to="/starttest" class="nav-link">Start Test</NavLink>
        </li>
        <li class="nav-item flex-items">
          <NavLink to="/checkcertificate" class="nav-link">Check Certificate</NavLink>
        </li>
        <li class="nav-item flex-items">
          <NavLink to="/propricing" class="nav-link">Pro Pricing</NavLink>
        </li>
       
      </ul>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            English
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className='button'>
        <button type="button" class="btn">Login</button>
        </li>
    </div>
  </div>
</nav>
     </div>
);
}
export default Nav;