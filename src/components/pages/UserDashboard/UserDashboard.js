import React from "react";
import { isAuthenticated, signout } from "../../auth";
import { Navigate } from "react-router-dom";
import NavbarUser from "../../templates/UsersNavbar/NavBarAdmin/NavbarUser/NavbarUser";

const UserDashboard = () => {
  // const jwt = isAuthenticated();

  const {
    user: { _id, name, email, role },
  } = isAuthenticated();


  return (
    <div>
    <NavbarUser/>  
    <h1>Welcome Student, Soon we will update test for you! !</h1>
     
    </div>
  );
};

export default UserDashboard;
