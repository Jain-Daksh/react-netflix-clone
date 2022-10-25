import React from 'react'
import { Navbar } from 'react-bootstrap'
import { useState } from 'react';

import { ArrowDown, Bell, Search } from 'react-bootstrap-icons'
import Image1 from '../images/Netflix_2015_logo.svg.png'
import Image2 from '../images/profile.jpeg'

function NavB() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    
    <div className={isScrolled ? "navba scrolle" : "navba"}>
      <nav className={isScrolled ? "navbar scrolle" : "navba"}>
      <nav class="navbar navba navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <a class="navbar-brand " href="#">
              <img className="logoImage" src={Image1} alt="logo" />
            </a>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Homepage</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Series</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">New and Popular</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">My List</a>
              </li>
            </ul>
            {/* <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
              <div className="right">
          <Search className="icon"/>
          <span>KID</span>
          <Bell className="icon" />
          <img src={Image2} className="profile-img"  />
          <div className="profile">
            <ArrowDown className="icon i-plain " />
            <div className="options i-plain">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
          </div>
        </div>
      </nav>
       </nav>
      
    </div>
  )
}

export default NavB