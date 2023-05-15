import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div class="logo">
        <img src="https://th.bing.com/th/id/OIP.fzi9ElnEuAYVLFUAKpbnPQAAAA?pid=ImgDet&rs=1" />
      </div>
      <div class="main-link">
        <h3>Main Links</h3>
        <div class="main-links">
          <ul>
            <li>Home</li>
            <li>Study Materials</li>
            <li>Quiz Portal</li>
            <li>Job Portal</li>
          </ul>
        </div>
      </div>
      <div class="support">
        <h3>Support</h3>
        <div class="main-links">
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div class="newsletter">
        <div class="main-links">
          <ul>
            <li class="follow-us follow-us-heading">Follow Us</li>
            <li>
              <div class="follow-icons">
                <div class="facebook">
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div class="twitter">
                    <i class="fa-brands fa-twitter"></i>
                </div>
                <div class="youtube">
                    <i class="fa-brands fa-youtube"></i>
                </div>
                <div class="instagram">
                    <i class="fa-brands fa-square-instagram"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>

  )
}

export default Footer
