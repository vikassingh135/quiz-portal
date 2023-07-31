import React, { useEffect, useState } from "react";
import { addCategory, getCategories, getContactUs } from "../../../apis/admin/adminApi";
import { PrintContactUs, PrintTable } from "../../../templates/PrintTable/PrintTable";
import "./ContactUs.css";
import NavbarAdmin from "../../../templates/UsersNavbar/NavBarAdmin/NavbarAdmin/NavbarAdmin";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { Icon, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { isAuthenticated } from "../../../auth";

const ContactUs = () => {
  
  const {token} = isAuthenticated();

  const [open, setOpen] = useState(false);

  const [contactUs, setContactUs] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  const [categories, setCategories] = useState([]);

  const loadCategory = () => {
    getContactUs(token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setContactUs(data);
        // console.log(categories);
      }
    });
  };

  useEffect(() => {
    loadCategory();
  }, );

  return (
    <div>
      <NavbarAdmin />
      <Typography variant='h3' sx={{textAlign:"center", mt:3}}>Contact Us Form Submissions</Typography>


      <div className="category-table-div">
        {/* {categories.map((curValue) => {
            const { _id, title, description } = curValue;
           <tr key={_id}>
              <td>{title}</td>
              <td>{description}</td>
            </tr>;
          })}  */}
        < PrintContactUs contactUs = {contactUs} />
      </div>
      {/* <div className="add-category-div">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={handleChange("title")}
        />
        <input
          type="textarea"
          value={description}
          placeholder="Enter Description Here"
          onChange={handleChange("description")}
        />
        <button onClick={handleSubmit}>Add Category</button>
      </div> */}
    </div>
  );
};

export default ContactUs;
