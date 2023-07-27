import React, { useEffect, useState } from 'react'
import NavbarUser from '../../../templates/UsersNavbar/NavBarAdmin/NavbarUser/NavbarUser'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getQuizById } from '../../../apis/admin/adminApi';
import ShowQuiz from '../../AdminDashboard/ShowQuiz/ShowQuiz';
import ShowQuizzes from '../ShowQuizzes/ShowQuizzes';
import {Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import StartIcon from '@mui/icons-material/Start';

const AttemptQuiz = () => {

    const {quizId} = useParams();

  const [quiz,setQuiz] = useState({});
  
  useEffect(()=>{
    // console.log(quizId);
    getQuizById(quizId).then(data => {
        if(data.error) {
            console.error(data.erroe);
        }
        
        setQuiz(data);
        // console.log(data,quiz);
        
    })
  },[])

  console.log(quiz);

  let navigate = useNavigate();

  const routeChange = ()  => {
        navigate('/user/quizOnGoing', {state: {quizId: quizId, title: quiz.title}});
  }
   
    
  return (
    <div>
        <NavbarUser/>
        <div className='instructions'>
      <Typography variant='h2' sx={{mt:4, mb:2}}>Instructions !!</Typography>
      <Typography variant='h5' sx={{m:3}} textAlign="center">Please follow instructions carefully while attemting the quiz</Typography>
      <List sx={{pl:4}}>
        <ListItem>1. Quiz contains only MCQ questions, that means only 1 option is correct out of 4 options.</ListItem>
        <ListItem>2. Quiz consist of {quiz.numberOfQuestions} questions</ListItem>
        <ListItem>3. Each question carries 3 marks</ListItem>
        <ListItem>4. Max marks for quiz is {quiz.maxMarks} </ListItem>
        <ListItem>5. Total time alloted for quiz is {quiz.numberOfQuestions*2} minutes</ListItem>
        <ListItem>6. After the time completed the quiz will be auto submitted.</ListItem>
        <ListItem>7. After the successful completion of quiz the result will be displayed on the screen</ListItem>
      </List>

      <Box sx={{display:"flex", justifyContent:"center", mt:4}}>
      <Button onClick={()=>{
        routeChange();
      }} variant="outlined" sx={{mr:3, fontSize:16}} startIcon={<StartIcon/>}>Start Quiz</Button>
      <Button   variant="outlined" sx={{fontSize:16}} startIcon={<KeyboardReturnIcon/>}>Go back</Button>
      </Box>
      </div>
    </div>
  )
}

export default AttemptQuiz
