import React from "react";
import NavbarAdmin from "../../../../templates/UsersNavbar/NavBarAdmin/NavbarAdmin/NavbarAdmin";
import { Box, Typography } from "@mui/material";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { saveStudyMaterial } from "../../../../apis/admin/adminApi";

const Books = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    content_type: "",
    year: "",
    branch:"",
    link: "",
  });

  const { title, description, content_type, year, branch, link } =  values ;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
    console.log(values);
  };
  
  const handleSubmit  = (event) => {
        event.preventDefault();
        saveStudyMaterial(values).then(response => {
            if(response.error) {
                console.error(response.error);
                alert("Error");
            } else {
                console.log(response);
                alert("saved successfully");
            }
        })
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <NavbarAdmin />
      <Box sx={{ m: 2 }}>
        <Typography variant="h2">Books / Guides For B.Tech.</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add Study Materials
          </Button>
        </Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Study Materials</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Title"
              type="text"
              fullWidth
              value={title}
              variant="standard"
              onChange={handleChange("title")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              value={description}
              variant="standard"
              onChange={handleChange("description")}
            />
            <Box sx={{ mt: 2 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Study Material Type
              </InputLabel>
              <Select
                sx={{ width: 300 }}
                value={content_type}
                defaultValue="books"
                label="content_type"
                onChange={handleChange("content_type")}
              >
                <MenuItem value="books">Books</MenuItem>
                <MenuItem value="guides">Guides</MenuItem>
                <MenuItem value="notes">HandWritten Notes</MenuItem>
                <MenuItem value="PYQ">Previous Year Questions</MenuItem>
              </Select>
            </Box>
            <Box sx={{ mt: 2 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Year
              </InputLabel>
              <Select
                sx={{ width: 300 }}
                defaultValue="other"
                label="Semester"
                onChange={handleChange("semester")}
                value={year}
              >
                <MenuItem value="1st">1st Year</MenuItem>
                <MenuItem value="2nd">2nd Year</MenuItem>
                <MenuItem value="3rd">3rd Year</MenuItem>
                <MenuItem value="4th">4th Year</MenuItem>
                <MenuItem value="other">Competitive Exams</MenuItem>
              </Select>
            </Box>
            <Box sx={{ mt: 2 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Branch
              </InputLabel>
              <Select
                sx={{ width: 300 }}
                defaultValue="other"
                label="Branch"
                onChange={handleChange("branch")}
                value={branch}
              >
                <MenuItem value="CSE">CSE</MenuItem>
                <MenuItem value="IT">IT</MenuItem>
                <MenuItem value="ECE">ECE</MenuItem>
                <MenuItem value="EIE">EIE</MenuItem>
                <MenuItem value="ME">ME</MenuItem>
              </Select>
            </Box>
            <TextField
              autoFocus
              margin="dense"
              id="link"
              label="Enter Link"
              type="text"
              fullWidth
              variant="standard"
              value={link}
              onChange={handleChange("link")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Add</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
};

export default Books;
