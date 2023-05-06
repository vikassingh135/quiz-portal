import React, { useState } from 'react'
import Navbar from '../../templates/navbar/Navbar'
import './LoginPage.css';
import { Navigate} from 'react-router-dom';
import { authenticate, isAuthenticated, signin } from '../../auth';


const LoginPage = () => {

  const [values, setValues] = useState({
    email: "",
    password:"",
    redirectToReferrer: false
  })  

  const {email, password, redirectToReferrer} = values;

  const {user} = isAuthenticated();

  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value});
  }

  const clickSubmit = event => {
    event.preventDefault();
    signin({email, password}).then(data => {
        if(data.error) {
            alert("Error: Login Failed, Please Try Again");
        } else {
            authenticate(data, () =>  {
                setValues({
                    ...values,
                    redirectToReferrer : true
                })
            })
        }
    })
  }


  const redirectUser = () => {
    if(redirectToReferrer) {
        return <Navigate to="/user/dashboard" />;
    }
    if(isAuthenticated()) <Navigate to="/" />;
  }

  return (
    <div class="login-page">
      <Navbar/>
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
      {redirectUser()}
    </div>
  )
}

export default LoginPage;
