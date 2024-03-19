import React from 'react'
import "../components/Navbar.css"
import logo from '../components/logo.png'
import { Link } from 'react-router-dom'
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
          <Link to="/" class="nav-link">Home</Link>
        </li>
        <li class="nav-item flex-items">
          <Link to="/starttest" class="nav-link">Start Test</Link>
        </li>
        <li class="nav-item flex-items">
          <Link to="/checkcertificate" class="nav-link">Check Certificate</Link>
        </li>
        <li class="nav-item flex-items">
          <Link to="/propricing" class="nav-link">Pro Pricing</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
     </div>
);
}
export default Nav;