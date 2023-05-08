import React, { useEffect, useState } from "react";
import "./AddQuestion.css";
import { addQuestion, showQuestions } from "../../../apis/admin/adminApi";
import NavbarAdmin from "../../../templates/UsersNavbar/NavBarAdmin/NavbarAdmin/NavbarAdmin";
import { PrintQuestionTable } from "../../../templates/PrintTable/PrintTable";
import { Link, useParams } from "react-router-dom";

const AddQuestion = () => {
  const [questions, setQuestions] = useState([]);

  const {quizId} = useParams();

  const [newQuestion, setNewQuestion] = useState({
    content: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "",
    quiz:quizId
  });

  const { content, optionA, optionB, optionC, optionD, correctAnswer, quiz } =
    newQuestion;

  const handleChange = (name) => (event) => {
    setNewQuestion({ ...newQuestion, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addQuestion(newQuestion).then((data) => {
        if(data.error) {
            alert("Error: Check Again");
        } else {
            alert("Congrats Question Has Been Added Successfully");
        }
    })
  }

  useEffect(() => {
    showQuestions(quizId).then((data) => {
      if (data.error) {
        console.error(data.error);
      }
      setQuestions(data);
    });
  }, );

  return (
    <div>
      <NavbarAdmin />
      <div className="category-table-div">
        <table className="category-table">
          <caption>Questions Table</caption>
          <thead>
            <tr>
              <th>Content</th>
              <th>Option A</th>
              <th>Option B</th>
              <th>Option C</th>
              <th>Option D</th>
              <th>Correct Answer</th>
            </tr>
          </thead>
          <tbody>
            {
              //    quizzes.map((curValue) => {
              //     const { _id, title, description } = curValue;
              //    <tr key={_id}>
              //       <td>{title}</td>
              //       <td>{description}</td>
              //     </tr>;
              //   })
            }
            <PrintQuestionTable questions={questions} />
          </tbody>
        </table>
      </div>

      <div className="add-question-form">
        <form>
          <h2>Add Question Form</h2>  
          <div className="input-field">
            <label htmlFor="content">Content: </label>
            <textarea
              value={content}
              id="content"
              onChange={handleChange("content")}
              placeholder="Enter Question Content"
            />
          </div>
          <div className="input-field">
            <label htmlFor="optionA">Option A: </label>
            <input id="optionA" type="text" onChange={handleChange("optionA")} placeholder="Option A" />
          </div>
          <div className="input-field">
            <label htmlFor="optionB">Option B: </label>
            <input id="optionB" type="text" onChange={handleChange("optionB")} placeholder="Option B" />
          </div>
          <div className="input-field">
            <label htmlFor="optionC">Option C: </label>
            <input id="optionC" type="text" placeholder="Option C" 
            onChange={handleChange("optionC")}/>
          </div>
          <div className="input-field">
            <label htmlFor="optionD">Option D: </label>
            <input id="optionD" type="text" 
            onChange={handleChange("optionD")}
            placeholder="Option D" />
          </div>
          <div className="input-field">
            <label htmlFor="correctAnswer">Correct Answer: </label>
            <input id="correctAnswer" type="tex"
            onChange={handleChange("correctAnswer")}
            placeholder="Correct Answer" />
          </div>
          <button onClick={handleSubmit}>Add Question</button>
        </form>
      </div>

     
    </div>
  );
};
export default AddQuestion;
