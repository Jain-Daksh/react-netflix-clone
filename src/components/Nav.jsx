import React from 'react'
import { useState } from 'react';
import { Arrow90degDown, ArrowDown, Bell, Search } from 'react-bootstrap-icons'
import Image1 from '../images/Netflix_2015_logo.svg.png'
import Image2 from '../images/profile.jpeg'

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={Image1} 
          /> 
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon"/>
          <span>KID</span>
          <Bell className="icon" />
          <img src={Image2} className="profile"  />
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
  )
}
export default Nav
