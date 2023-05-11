import React, { useEffect, useState } from "react";
import "./AddQuiz.css";
import NavbarAdmin from "../../../templates/UsersNavbar/NavBarAdmin/NavbarAdmin/NavbarAdmin";
import { addQuiz, getCategories } from "../../../apis/admin/adminApi";
import Swal from "sweetalert2";
import { TextField, Typography, Button, Switch } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import FormControlLabel from "@mui/material/FormControlLabel";

const AddQuiz = () => {
  const [categories, setCategories] = useState([]);

  const [categoryId, setCategoryId] = useState(null);

  const [quizValues, setQuizValues] = useState({
    title: "",
    description: "",
    maxMarks: "",
    numberOfQuestions: "",
    category: null,
    active: true
  });

  const { title, description, maxMarks, numberOfQuestions, category, active } =
    quizValues;

  const handleChange = (name) => (event) => {
    console.log([name], event, event.target);
    setQuizValues({ ...quizValues, [name]: event.target.value });
  };

  const handleChangeActive = () => {
    setQuizValues({ ...quizValues, active: !active });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(quizValues);
    addQuiz(quizValues).then((data) => {
      if (data.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Category can not be added! Please Try Again",
        });
      } else {
        Swal.fire("Congrats!!", "Quiz Added Successfully", "success");
        setQuizValues({
          title: "",
          description: "",
          maxMarks: "",
          numberOfQuestions: "",
          category: "",
        });
      }
    });
  };

  const loadCategory = () => {
    getCategories().then((data) => {
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
  }, []);

  const showCategories = () => {
    // categories.map((curUser) => {
    //   const { _id, title } = curUser;
    //   console.log(_id, title);
    //   return <option>Hello</option>;
    // });
  };

  return (
    <div>
      <NavbarAdmin />
      <Typography variant="h2" sx={{ m: 3, fontWeight: 600 }}>
        Add Quiz Form
      </Typography>
      <div className="add-quiz-div">
        <form>
          <TextField
            required
            id="filled-required"
            label="Title"
            value={title}
            variant="filled"
            onChange={handleChange("title")}
            size="medium"
          />
          <TextField
            required
            id="filled-required"
            label="Description"
            variant="filled"
            value={description}
            onChange={handleChange("description")}
          />
          <TextField
            id="filled-number"
            label="Max Marks"
            type="number"
            value={maxMarks}
            onChange={handleChange("maxMarks")}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Number of Questions"
            type="number"
            value={numberOfQuestions}
            onChange={handleChange("numberOfQuestions")}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />

          <TextField
            id="filled-select-currency"
            select
            label="Choose Category"
            helperText="Please select Quiz Category"
            variant="filled"
            onChange={(event) => {
              console.log(event, event.target.value, quizValues);
              setCategoryId(event.target.value);
              setQuizValues({ ...quizValues, [category]: categoryId });
              console.log(event, event.target.value, quizValues);
            }}
          >
            {categories.map((option, i) => (
              <MenuItem key={i} value={option._id}>
                {option.title}
              </MenuItem>
            ))}
          </TextField>
          <FormControlLabel
            label="Quiz Status"
            control={
              <Switch
              defaultChecked={true}
                onChange={handleChangeActive}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ fontSize: "18px" }}
          >
            <AddCircleSharpIcon sx={{ mr: 1 }} />
            Create Quiz
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddQuiz;
