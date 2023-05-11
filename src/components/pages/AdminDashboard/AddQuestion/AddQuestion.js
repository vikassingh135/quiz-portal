import React, { useEffect, useState } from "react";
import "./AddQuestion.css";
import { addQuestion, showQuestions } from "../../../apis/admin/adminApi";
import NavbarAdmin from "../../../templates/UsersNavbar/NavBarAdmin/NavbarAdmin/NavbarAdmin";
import {PrintQuestionTable} from "../../../templates/PrintTable/PrintTable";
import { Link, useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Swal from "sweetalert2";


const AddQuestion = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange1 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
            Swal.fire("Error: Check Again");
        } else {
            Swal.fire("Congrats Question Has Been Added Successfully");
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
  },[] );

  return (
    <div>
      <NavbarAdmin />
      <Typography variant='h3' sx={{textAlign:"center", mt:3, mb:5}}>All Questions</Typography>
      <div className="question-table-div">
            <PrintQuestionTable questions={questions} />
      </div>

      <div className="add-question-accordion"> 
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange1('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography variant="h3"  sx={{ width: '33%',flexShrink: 0 }}>Add Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
            <input id="optionA" type="text" onChange={handleChange("optionA")} value={optionA} placeholder="Option A" />
          </div>
          <div className="input-field">
            <label htmlFor="optionB">Option B: </label>
            <input id="optionB" type="text" onChange={handleChange("optionB")} value={optionB} placeholder="Option B" />
          </div>
          <div className="input-field">
            <label htmlFor="optionC">Option C: </label>
            <input id="optionC" type="text" placeholder="Option C" value={optionC} 
            onChange={handleChange("optionC")}/>
          </div>
          <div className="input-field">
            <label htmlFor="optionD">Option D: </label>
            <input id="optionD" type="text" value={optionD}
            onChange={handleChange("optionD")}
            placeholder="Option D" />
          </div>
          <div className="input-field">
            <label htmlFor="correctAnswer">Correct Answer: </label>
            <input id="correctAnswer" type="tex" value={correctAnswer}
            onChange={handleChange("correctAnswer")}
            placeholder="Correct Answer" />
          </div>
          <Button variant="contained" onClick={handleSubmit} sx={{fontSize:"18px"}}><AddCircleSharpIcon sx={{mr:3}}/>Add Quiz</Button>
        </form>
      </div>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
};
export default AddQuestion;
