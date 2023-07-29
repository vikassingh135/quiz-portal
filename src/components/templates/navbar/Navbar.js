import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="logo">
        <div class="image">
          <img src={require('./qvCarieer3.jpg')} style={{borderRadius:"50%", marginTop:"10px"}} alt="logo" width={70} />
        </div>
      </div>
      <div class="nav-links">
        <a href="/"><button>Home</button></a>
        <a href="/register"><button>Register</button></a>
        <a href="/login"><button>Login</button></a>
      </div>
    </nav>
  )
}

export default Navbar
