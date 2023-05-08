import React, { useEffect, useState } from "react";
import { addCategory, getCategories } from "../../../apis/admin/adminApi";
import NavbarAdmin from "../../../templates/UsersNavbar/NavBarAdmin/NavbarAdmin/NavbarAdmin";
import {PrintTable} from "../../../templates/PrintTable/PrintTable";
import './AddCategory.css';

const AddCategory = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const { title, description } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCategory({ title, description }).then((data) => {
      if (data.error) {
        alert("Error");
      } else {
        alert("Congrats!! Category Added Successfully");
        console.log(data);
      }
    });
  };

  const [categories, setCategories] = useState([]);

  const loadCategory = () => {
    getCategories().then((data) => {
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
  },[]);

  return (
    <div>
      <NavbarAdmin />
      <div className="category-table-div">
      <table className="category-table">
        <caption>Categories Table</caption>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          
           {/* {categories.map((curValue) => {
            const { _id, title, description } = curValue;
           <tr key={_id}>
              <td>{title}</td>
              <td>{description}</td>
            </tr>;
          })}  */}
          <PrintTable categories = {categories} />
        </tbody>
      </table>
      </div>
      <div className="add-category-div">
      <input type="text" placeholder="Enter title" value={title} onChange={handleChange("title")} />
      <input
        type="textarea"
        value={description}
        placeholder="Enter Description Here"
        onChange={handleChange("description")}
      />
       <button onClick={handleSubmit}>Add Category</button>
      </div>
     
    </div>
  );
};

export default AddCategory;
