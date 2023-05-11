import React, { useState } from "react";
import Navbar from "../../templates/navbar/Navbar";
import "./LoginPage.css";
import { Navigate } from "react-router-dom";
import { authenticate, isAuthenticated, signin } from "../../auth";
import { Alert } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    redirectToReferrer: false,
    error: false,
  });

  const { email, password, redirectToReferrer, error } = values;

  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: true,
        });
      } else {
        console.log(data.body);
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  const showError = () => {
    if (error) {
      alert(error);
      <Alert variant="outlined" severity="error">
        This is an error alert — check it out!
      </Alert>;
    }
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user.role === 1) return <Navigate to="/admin/dashboard" />;
      else return <Navigate to="/user/dashboard" />;
    }
  };

  return (
    <div class="login-page">
      <Navbar />
      <div class="login_form_container">
        <div class="login_form">
          <h2>Login</h2>
          <div class="input_group">
            <i class="fa fa-user"></i>
            <input
              type="email"
              placeholder="email"
              class="input_text"
              value={email}
              onChange={handleChange("email")}
            />
          </div>
          <div class="input_group">
            <i class="fa fa-unlock-alt"></i>
            <input
              type="password"
              placeholder="Password"
              class="input_text"
              value={password}
              onChange={handleChange("password")}
            />
          </div>
          <div class="button_group" id="login_button">
            <button onClick={clickSubmit}>Submit</button>
          </div>
          <div class="fotter">
            <a>Forgot Password ?</a>
            <a>SingUp</a>
          </div>
        </div>
      </div>
      {/* {showError()} */}
      {redirectUser()}
    </div>
  );
};

export default LoginPage;
