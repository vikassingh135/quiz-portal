import React, { useEffect, useState } from 'react'
import NavbarUser from '../../../templates/UsersNavbar/NavBarAdmin/NavbarUser/NavbarUser'
import { useLocation, useParams } from 'react-router-dom'
import { getQuizById, showQuestions } from '../../../apis/admin/adminApi';
import { PrintCompletedTestDetails } from '../../../templates/PrintTableUser/PrintTableUser';
import { Typography } from '@mui/material';

const CompletedTestDetail = () => {

  const {state} = useLocation();  

  console.log(state.quizId, state.user_answers);
  
  const [questions, setQuestions] = useState([]);

  const [quiz, setQuiz] = useState();

  const user_answers = state.user_answers;

  useEffect(()=> {
     showQuestions(state.quizId).then(data => {
        if(data.error) {
            console.error(data.error);
        } else setQuestions(data);
        console.log(data, questions);
     })
     getQuizById(state.quizId).then(data => {
        if(data.error) {
            console.error(data.error);
        } else setQuiz(data)
        console.log(data,quiz);
     })
     
  },[])

//   const questions = quiz["questions"];

  console.log(questions, user_answers);

  return (
    <div>
        <NavbarUser/>
        <div>
            <Typography variant='h2' sx={{m:2}}>Quiz Result !!</Typography>
            <Typography>Number of Questions : </Typography>    
            <PrintCompletedTestDetails questions = {questions} user_answers = {user_answers} />
        </div>
    </div>
  )
}

export default CompletedTestDetail
