import React from 'react';
import './NavbarAdmin.css';
import { signin, signout } from '../../../../auth';

const NavbarAdmin = () => {
  return (
    <nav class="navbar-admin">
      <div class="logo">
        <div class="image">
          <img src="https://th.bing.com/th/id/R.419bc52556dbb4bf292b07f8186cbea6?rik=dX8S94KV6ZXHdA&riu=http%3a%2f%2fwww.talentsurabhi.com%2fimages%2fn6.png&ehk=nKZgvTYGLI3Mn0LRw161qlfeunASFlqZEYFqLj1KYCM%3d&risl=&pid=ImgRaw&r=0" alt="logo" width={150} />
        </div>
      </div>
      <div class="nav-links">
        <a href="/admin/dashboard">Home</a>
        <a href="/admin/profile">Admin Profile</a>
        <a href="/">Logout</a>
      </div>
    </nav>
  )
}

export default NavbarAdmin
