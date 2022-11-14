import React from 'react'
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons'

function Footer() {
  return (
    <div className='footer'>
      <div className="logos">
        <Facebook className="logo " />
        <Twitter className="logo"/>
        <Youtube className="logo"/>
        <Instagram className="logo"/>
      </div>
      <div className="sub-links">
      <ul>
          <li><a href="#">Audio and Subtitles</a></li>
          <li><a href="#">Audio Description</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Legal Notices</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  )
}
export default Footer
