import MainWebsiteNavbar from "./MainWebsiteNavbar/MainWebsiteNavbar";
import "./LandingPage.css";
import React, { useState } from "react";
import { signup } from "../../auth";
import Swal from "sweetalert2";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import {
  TextField,
  Typography,
  Button,
  Switch,
  InputAdornment,
  Box,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AccountCircle } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    password: "",
    confirm_password: "",
  });

  const { name, phone, email, city, password, confirm_password } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values });
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        alert("Error: Please Check Input Fields");
      } else {
        alert("Congrats!! You had successfully Registered");
        setValues({
          ...values,
          name: "",
          phone: "",
          email: "",
          city: "",
          password: "",
          confirm_password: "",
        });
      }
    });
  };

  return (
    <div>
      <MainWebsiteNavbar />
      <Box>
        <img
          className="main-nav-bg"
          src="https://helpwevegotkids.com/wp-content/uploads/2020/06/educational-online-camps-summer-2020-1200x500-1.jpg"
        ></img>
      </Box>
      <div className="we-provide">
        <h2>We Provide</h2>
      </div>
      <div className="we-provide-items">
        <div>
          <h3>HandWritten Notes</h3>
        </div>
        <div>
          <h3>Books/Guides</h3>
        </div>
        <div>
          <h3>Previous Year Questions</h3>
        </div>
      </div>

      <div className="we-provide">
        <h2>Handwritten Notes for B.Tech.</h2>
      </div>
      <div className="we-provide-items">
        <a href="/main/guides/1st/notes">
          <div>
            <h3>B.Tech 1st year </h3>
          </div>
        </a>
        <a href="/main/guides/2nd/notes">
          <div>
            <h3>B.Tech 2nd year </h3>
          </div>
        </a>
        <a href="/main/guides/3rd/notes">
          <div>
            <h3>B.Tech 3rd year </h3>
          </div>
        </a>
        <a href="/main/guides/4th/notes">
          <div>
            <h3>B.Tech 4th year </h3>
          </div>
        </a>
      </div>

      <div className="we-provide">
        <h2>Books/Guides for B.Tech.</h2>
      </div>
      <div className="we-provide-items">
        <a href="/main/guides/1st/books">
          <div>
            <h3>B.Tech 1st year </h3>
          </div>
        </a>
        <a href="/main/guides/2nd/books">
          <div>
            <h3>B.Tech 2nd year </h3>
          </div>
        </a>
        <a href="/main/guides/4rd/books">
          <div>
            <h3>B.Tech 3rd year </h3>
          </div>
        </a>
        <a href="/main/guides/4th/books">
          <div>
            <h3>B.Tech 4th year </h3>
          </div>
        </a>
      </div>

      <div className="we-provide">
        <h2>Previous Year Questions</h2>
      </div>
      <div className="we-provide-items">
      <a href="/main/guides/1st/pyq">
          <div>
            <h3>B.Tech 1st year </h3>
          </div>
        </a>
        <a href="/main/guides/2nd/pyq">
          <div>
            <h3>B.Tech 2nd year </h3>
          </div>
        </a>
        <a href="/main/guides/3rd/pyq">
          <div>
            <h3>B.Tech 3rd year </h3>
          </div>
        </a>
        <a href="/main/guides/4th/pyq">
          <div>
            <h3>B.Tech 4th year </h3>
          </div>
        </a>
      </div>

      <div className="main-contact-us">
        <form>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Contact Us Form
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              p: 0.5,
              backgroundColor: "#b2ff59",
              borderRadius: 3,
            }}
          >
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              id="input-with-sx"
              label="Name"
              variant="standard"
              onChange={handleChange("name")}
              value={name}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              p: 0.5,
              backgroundColor: "#b2ff59",
              borderRadius: 3,
            }}
          >
            <AddIcCallIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Phone No."
              fullWidth
              variant="standard"
              onChange={handleChange("phone")}
              value={phone}
            />
          </Box>

          <Box
            sx={{
              display: "flex",

              alignItems: "flex-end",
              p: 0.5,
              backgroundColor: "#b2ff59",
              borderRadius: 3,
            }}
          >
            <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Email"
              variant="standard"
              fullWidth
              onChange={handleChange("email")}
              value={email}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              p: 0.5,
              backgroundColor: "#b2ff59",
              borderRadius: 3,
            }}
          >
            <LocationOnIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="City"
              variant="standard"
              onChange={handleChange("city")}
              value={city}
              fullWidth
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              p: 0.5,
              backgroundColor: "#b2ff59",
              borderRadius: 3,
            }}
          >
            <LockOpenIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Password"
              variant="standard"
              fullWidth
              type="password"
              onChange={handleChange("password")}
              value={password}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              p: 0.5,
              backgroundColor: "#b2ff59",
              borderRadius: 3,
            }}
          >
            <LockOpenIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Confirm Password"
              type="password"
              variant="standard"
              fullWidth
              onChange={handleChange("confirm_password")}
              value={confirm_password}
            />
          </Box>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ fontSize: "18px", backgroundCcolor: "#00b0ff" }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
