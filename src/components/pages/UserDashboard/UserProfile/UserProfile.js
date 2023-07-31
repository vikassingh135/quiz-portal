import React, { useEffect, useState } from "react";
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
import NavbarAdmin from "../../../templates/UsersNavbar/NavBarAdmin/NavbarUser/NavbarUser";
import { isAuthenticated, updateProfile } from "../../../auth";

const UpdateProfile = () => {
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

  const {user} = isAuthenticated();

  useEffect(()=>{
    if(user) {
        setValues({...values, ...user});
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values });
    updateProfile({ name, phone, email, city, password }, user._id).then((data) => {
      if (data.error) {
        alert("Error: Please Check Input Fields");
      } else {
        alert("Profile Updated Successfully!!");
      }
    });
  };

  return (
    <div class="">
      <NavbarAdmin />
      <Typography variant="h2" sx={{ fontWeight: 600, color: "#00b0ff" }}>
        Update Profile
      </Typography>
      <div className="add-quiz-div">
        <form>
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

          {/* <TextField
            id="filled-number"
            label="Email"
            type="email"
            value={email}
            onChange={handleChange("email")}
            sx={{ backgroundColor: "#b2ff59" }}
            variant="filled"
          /> */}
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

          {/* <TextField
            id="filled-number"
            label="City"
            value={city}
            onChange={handleChange("city")}
            sx={{ backgroundColor: "#b2ff59" }}
            variant="filled"
          /> */}
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
              label="New Password"
              variant="standard"
              fullWidth
              type="password"
              onChange={handleChange("password")}
              value={password}
            />
          </Box>
          {/* <TextField
            id="filled-number"
            label="Password"
            value={password}
            onChange={handleChange("password")}
            sx={{ backgroundColor: "#b2ff59" }}
            variant="filled"
          /> */}

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
            Update Profile
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
