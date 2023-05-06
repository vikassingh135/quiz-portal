import React, { useState } from "react";
import Navbar from "../../templates/navbar/Navbar";
import "./Register.css";
import { signup } from "../../auth";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    phone:"",
    email: "",
    city:"",
    password: "",
    confirm_password:""
  });

  const { name, phone,  email, city, password, confirm_password } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values });
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        alert("Error: Please Check Input Fields")
      } else {
        alert("Congrats!! You had successfully Registered");
        setValues({
          ...values,
          name: "",
          phone:"",
          email: "",
          city:"",
          password: "",
          confirm_password:""
        });
      }
    });
  };

  return (
    <div class="register-page">
      <Navbar />
      <div class="register">
        <form>
          <h2>Registration Form</h2>
          <div class="input-field">
            <div class="icon">
              <i class="fa-solid fa-2x fa-user"></i>
            </div>
            <div class="input-box">
              <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={handleChange("name")}
              />
            </div>
          </div>
          <div class="input-field">
            <div class="icon">
              <i class="fa-solid fa-2x fa-phone"></i>
            </div>
            <div class="input-box">
              <input 
              type="tel" 
              value={phone}
               placeholder="Mobile No."
               onChange={handleChange("phone")}
               />
            </div>
          </div>
          <div class="input-field">
            <div class="icon">
              <i class="fa-solid fa-2x fa-envelope"></i>
            </div>
            <div class="input-box">
              <input type="email" 
              value={email}
              placeholder="Email ID"
              onChange={handleChange("email")} 
              />
            </div>
          </div>
          <div class="input-field">
            <div class="icon">
              <i class="fa-solid fa-2x fa-location-dot"></i>
            </div>
            <div class="input-box">
              <input 
              type="text"
              value={city}
               placeholder="City"
               onChange={handleChange("city")} />
            </div>
          </div>
          <div class="input-field">
            <div class="icon">
              <i class="fa-solid fa-2x fa-lock"></i>
            </div>
            <div class="input-box">
              <input 
              type="password" 
              value={password}
              placeholder="Password" 
              onChange={handleChange("password")}
              />
            </div>
          </div>
          <div class="input-field">
            <div class="icon">
              <i class="fa-solid fa-2x fa-lock"></i>
            </div>
            <div class="input-box">
              <input
                type="password"
                value={confirm_password}
                placeholder="Confirm Password"
                onChange={handleChange("confirm_password")}
              />
            </div>
          </div>
          <div class="btn">
            <button onClick={clickSubmit} class="register-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
