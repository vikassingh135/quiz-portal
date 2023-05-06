import React from 'react'
import Navbar from '../../templates/navbar/Navbar'
import './Register.css';

const Register = () => {
  return (
    <div class="register-page">
      <Navbar/>
      <div class="register">
    <form>
        <h2>Registration Form</h2>
        <div class="input-field">
          <div class="icon">
            <i class="fa-solid fa-2x fa-user"></i>
          </div>
          <div class="input-box">
            <input type="text" name="username" placeholder="Username" />
          </div>
        </div>
        <div class="input-field">
          <div class="icon">
            <i class="fa-solid fa-2x fa-phone"></i>
          </div>
          <div class="input-box">
            <input type="text" name="username" placeholder="Mobile No." />
          </div>
        </div>
        <div class="input-field">
          <div class="icon">
            <i class="fa-solid fa-2x fa-envelope"></i>
          </div>
          <div class="input-box">
            <input type="text" name="username" placeholder="Email ID" />
          </div>
        </div>
        <div class="input-field">
          <div class="icon">
            <i class="fa-solid fa-2x fa-location-dot"></i>
          </div>
          <div class="input-box">
            <input type="text" name="username" placeholder="City" />
          </div>
        </div>
        <div class="input-field">
          <div class="icon">
            <i class="fa-solid fa-2x fa-lock"></i>
            </div>
          <div class="input-box">
            <input type="text" name="username" placeholder="Password" />
          </div>
        </div>
        <div class="input-field">
          <div class="icon">
            <i class="fa-solid fa-2x fa-lock"></i>
          </div>
          <div class="input-box">
            <input type="text" name="username" placeholder="Confirm Password" />
          </div>
        </div>
        <div class="btn">
            <button class="register-btn">Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
};

export default Register;