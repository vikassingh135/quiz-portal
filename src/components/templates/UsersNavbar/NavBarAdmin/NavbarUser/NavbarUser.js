import React from 'react';
import './NavbarUser.css';
import { signout } from '../../../../auth';

const NavbarUser = () => {
  return (
      <nav class="navbar-user">
      <div class="logo">
        <div class="image">
          <img src="https://th.bing.com/th/id/R.419bc52556dbb4bf292b07f8186cbea6?rik=dX8S94KV6ZXHdA&riu=http%3a%2f%2fwww.talentsurabhi.com%2fimages%2fn6.png&ehk=nKZgvTYGLI3Mn0LRw161qlfeunASFlqZEYFqLj1KYCM%3d&risl=&pid=ImgRaw&r=0" alt="logo"/>
        </div>
      </div>
      <div class="nav-links">
        <a href="/"><span>Home</span></a>
        <a href="/register">User Profile</a>
        <a href="/logout">Logout</a>
      </div>
    </nav>
  )
}

export default NavbarUser
