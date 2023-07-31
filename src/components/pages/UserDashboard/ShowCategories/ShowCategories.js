import React, { useEffect, useState } from "react";
import { addCategory, getCategories } from "../../../apis/admin/adminApi";

import {PrintTable}  from "../../../templates/PrintTableUser/PrintTableUser";
import "./ShowCategories.css";
import NavbarUser from "../../../templates/UsersNavbar/NavBarAdmin/NavbarUser/NavbarUser";
import { Typography } from "@mui/material";
import { isAuthenticated } from "../../../auth";

const ShowCategories = () => {
  
 
  const [categories, setCategories] = useState([]);

  const {token} = isAuthenticated();

  const loadCategory = () => {
    getCategories(token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
        console.log(categories);
      }
    });
  };


  useEffect(() => {
    loadCategory();
  }, []);

  return (
    <div>
      <NavbarUser />
      <Typography variant='h3' sx={{textAlign:"center", mt:3}}>All Categories</Typography>
      <div className="category-table-div">
            <PrintTable categories={categories} />
      </div>
    
    </div>
  );
};

export default ShowCategories;
