import React, { useEffect, useState } from "react";
import { addCategory, getCategories } from "../../../apis/admin/adminApi";
import { PrintTable } from "../../../templates/PrintTable/PrintTable";
import "./AddCategory.css";
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

const AddCategory = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const {token} = isAuthenticated();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { title, description } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCategory(token, { title, description }).then((data) => {
      if (data.error) {
        alert("Error");
      } else {
        Swal.fire(
          'Success!',
          'Congrats!! Category Added Successfully',
          'success'
        )
        console.log(data);
      }
      handleClose();
    });
  };

  const [categories, setCategories] = useState([]);

  const loadCategory = () => {
    getCategories(token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
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
      <Typography variant='h3' sx={{textAlign:"center", mt:3}}>All Categories</Typography>

      <div className="add-category-form">
        <Button variant="outlined" onClick={handleClickOpen}>
          <AddCircleSharpIcon sx={{mr:1}}/>Add Category
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{mr:30}}>Add Category Form </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Enter Title - 
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
              onChange={handleChange("title")}
              variant="standard"
            />
          </DialogContent>
          <DialogContent>
            <DialogContentText>
              Please Enter Description - 
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              onChange={handleChange("description")}
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Add</Button>
          </DialogActions>
        </Dialog>
      </div>

      <div className="category-table-div">
        {/* {categories.map((curValue) => {
            const { _id, title, description } = curValue;
           <tr key={_id}>
              <td>{title}</td>
              <td>{description}</td>
            </tr>;
          })}  */}
        <PrintTable categories={categories} />
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

export default AddCategory;
