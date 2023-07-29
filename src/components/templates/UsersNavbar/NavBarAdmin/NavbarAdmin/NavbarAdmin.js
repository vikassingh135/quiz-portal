import React from 'react';
import './NavbarAdmin.css';
import { signin, signout } from '../../../../auth';
import { Button } from '@mui/material';
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QuizIcon from '@mui/icons-material/Quiz';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


const NavbarAdmin = () => {

  const handleLogOut =  () => {
    signout().then(<Navigate to='/user/dashboard' />)
}

  return (
    <nav class="navbar-admin">
      <div class="logo">
        {/* <div class="image">
          <img src="https://th.bing.com/th/id/R.419bc52556dbb4bf292b07f8186cbea6?rik=dX8S94KV6ZXHdA&riu=http%3a%2f%2fwww.talentsurabhi.com%2fimages%2fn6.png&ehk=nKZgvTYGLI3Mn0LRw161qlfeunASFlqZEYFqLj1KYCM%3d&risl=&pid=ImgRaw&r=0" alt="logo" width={150} />
        </div> */}
        {/* <QuizIcon sx={{ fontSize: 40, color:"white" }} /> */}
        <img src={require('./qvCarieer3.jpg')} style={{borderRadius:"50%", marginTop:"10px"}} alt="logo" width={70}></img>
      </div>
      <div class="nav-links">
        <a href="/admin/dashboard"><HomeIcon sx={{ fontSize: 40, color:"white" }} /></a>
        <a href="/admin/profile"><AccountCircleIcon sx={{fontSize:40, color:"white"}}/></a>
        {/* <a href="/">Logout</a> */}
        <Button onClick={handleLogOut}><ExitToAppIcon sx={{fontSize:40, color:"white"}}/></Button>
      </div>
    </nav>
  )
}

export default NavbarAdmin
