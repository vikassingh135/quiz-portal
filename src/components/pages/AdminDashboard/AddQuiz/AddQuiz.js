import React, { useEffect, useState } from "react";
import "./AddQuiz.css";
import NavbarAdmin from "../../../templates/UsersNavbar/NavBarAdmin/NavbarAdmin/NavbarAdmin";
import { addQuiz, getCategories } from "../../../apis/admin/adminApi";

const AddQuiz = () => {
  const [categories, setCategories] = useState([]);

  const [categoryId, setCategoryId] = useState(null);

  const [quizValues, setQuizValues] = useState({
    title: "",
    description: "",
    maxMarks: "",
    numberOfQuestions: "",
    category: "",
  });

  const { title, description, maxMarks, numberOfQuestions, category } =
    quizValues;

  const handleChange = (name) => (event) => {
    console.log([name], event, event.target);
    setQuizValues({ ...quizValues, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(quizValues);
    addQuiz(quizValues).then((data) => {
      if (data.error) {
        alert("Faild: Please Try Again");
      } else {
        alert("Congrats!! Quiz had been added successfully");
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
      <div className="add-quiz-div">
        <form className="addQuizForm">
          <div className="input-field">
            <label htmlFor="title">Enter the title : </label>
            <input
              placeholder="Enter Title"
              id="title"
              value={title}
              onChange={handleChange("title")}
            />
            <br />
          </div>
          <div className="input-field">
            <label htmlFor="description">Enter Description : </label>
            <input
              placeholder="Enter Description"
              id="description"
              value={description}
              onChange={handleChange("description")}
            />
            <br />
          </div>
          <div className="input-field">
            <label htmlFor="maxMarks">Maximum Marks : </label>
            <input
              type="number"
              placeholder="Maximum Marks"
              id="maxMarks"
              value={maxMarks}
              onChange={handleChange("maxMarks")}
            />
            <br />
          </div>
          <div className="input-field">
            <label htmlFor="noOfQuestions">No. of Questions : </label>
            <input
              type="number"
              placeholder="Number of Questions"
              id="noOfQuestions"
              value={numberOfQuestions}
              onChange={handleChange("numberOfQuestions")}
            />
            <br />
          </div>
          <div className="input-field">
            <label>Choose Category: </label>
            <select
              onChange={(event) => {
                console.log(event, event.target.value, quizValues);
                setCategoryId(event.target.value);
                setQuizValues({ ...quizValues, [category]: categoryId });
                console.log(event, event.target.value, quizValues);
              }}
            >
              {categories.map((c, i) => (
                <option key={i} id={c._id} value={c._id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
          <div className="input-field">
            <button onClick={handleSubmit}>Create Quiz</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuiz;
