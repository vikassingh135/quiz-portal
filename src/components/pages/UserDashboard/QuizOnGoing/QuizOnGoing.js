import React, { useEffect, useState } from "react";
import "./QuizOnGoing.css";
import { addQuestion, saveCompletedTest, showQuestions } from "../../../apis/admin/adminApi";
import NavbarAdmin from "../../../templates/UsersNavbar/NavBarAdmin/NavbarAdmin/NavbarAdmin";
import { PrintQuestionTableUser } from "../../../templates/PrintTable/PrintTable";
import { PrintQuestionTablefrom } from "../../../templates/PrintTable/PrintTable";
import { Link, useLocation, useParams } from "react-router-dom";
import NavbarUser from "../../../templates/UsersNavbar/NavBarAdmin/NavbarUser/NavbarUser";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography, Box, Button } from "@mui/material";
import { PrintQuestions } from "../../../templates/PrintTableUser/PrintTableUser";
import Swal from "sweetalert2";
import CircleTimer from "../Timer/CircleTimer";





const calculatedScore = (selectedValue, questions)=> {

  let res = 0;

  for(let i=0; i<questions.length; i++) {
    if(selectedValue[i]===questions[i].correctAnswer) {
      res++;
    }
  }

  return res;

}



const QuizOnGoing = () => {
  const { state } = useLocation();
  console.log(state);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    console.log(state.quizId);
    showQuestions(state.quizId).then((data) => {
      if (data.error) {
        console.error(data.error);
      } else {
        setQuestions(data);
        console.log(questions);
      }
    });
  }, []);

  let score = 0;


  // let selectedValue = new Array(questions.length).fill('-');

  const [selectedValue, setSelectedValue] = useState(new Array(questions.length).fill('-'));


  const handleSelectedValue = ({i,ans}) => {
    setSelectedValue( existingItems => {
      return [
        ...existingItems.slice(0, i),
        existingItems[i] = ans,
        ...existingItems.slice(i + 1),
      ]
    });
    console.log(selectedValue);
    // setScore(0);
  }

  const handleSubmit = (event) => {
    // event.preventDefault();
    // let result = 0;
    // for(let i=0; i<questions.length; i++) {
    //   console.log(questions[i].correctAnswer, selectedValue[i],score);
    //   if(questions[i].correctAnswer===selectedValue[i]) {
    //     result++;
    //   }
    // }
    // setScore(result);

    score = (calculatedScore(selectedValue,questions));
    console.log(score, JSON.parse(localStorage.getItem("jwt")).user._id);
    saveCompletedTest({user: JSON.parse(localStorage.getItem("jwt")).user._id, quiz: state.quizId, user_answers: selectedValue}).then((data) => {
      if(data.error) {
        alert(data.error);
      } else {
        Swal.fire(
          'Good job!',
          `Test saved successfully and Your score is ${score}`,
          'success'
        )
      }
    })
    
  }



  return (
    <div>
      <NavbarUser />
      <Typography variant="h2" sx={{ mt: 5 }}>
        Questions
      </Typography>
      <CircleTimer time = {questions.length*2} handleSubmit = {handleSubmit}/>
      <Typography variant="h6" sx={{ mt: 5, mb: 4, ml: 30 }}>
        Please read Questions carefully before answering them : -
      </Typography>
      <div className="print-questions-div">
        {console.log("inside printQuestion calling")}
        <PrintQuestions questions={questions} handleSelectedValue = {handleSelectedValue} />
      </div>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 4 }}>
        <Button variant="outlined" sx={{ fontSize: 20 }} onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </div>
  );
};
export default QuizOnGoing;
