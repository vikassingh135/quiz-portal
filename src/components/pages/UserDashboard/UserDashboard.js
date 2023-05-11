import React from "react";
import { isAuthenticated, signout } from "../../auth";
import {Link,  Navigate } from "react-router-dom";
import NavbarUser from "../../templates/UsersNavbar/NavBarAdmin/NavbarUser/NavbarUser";
import './UserDashboard.css';

const UserDashboard = () => {
  // const jwt = isAuthenticated();

  const {
    user: { _id, name, email, role },
  } = isAuthenticated();


  return (
    <div>
    <NavbarUser/>  
    <div className="user-dashboard-quiz-services">
    <h1>Quiz Services</h1>
    
      <Link to='/user/Categories'> <button>Categories Page</button></Link>
      <Link to='/user/showQuizzes'><button>Show Quizzes</button></Link>
    </div>
    </div>
  );
};

export default UserDashboard;
