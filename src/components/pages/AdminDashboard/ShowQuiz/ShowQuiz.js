import React, { useEffect, useState } from 'react';
import './ShowQuiz.css';
import NavbarAdmin from '../../../templates/UsersNavbar/NavBarAdmin/NavbarAdmin/NavbarAdmin';
import { showQuizzes } from '../../../apis/admin/adminApi';
import {PrintQuizTable} from '../../../templates/PrintTable/PrintTable';
import { Link } from 'react-router-dom';
import AddQuiz from '../AddQuiz/AddQuiz';
import { Button, Typography } from '@mui/material';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { isAuthenticated } from '../../../auth';
const ShowQuiz = () => {

  const [quizzes, setQuizzes] = useState([]) ; 

  const {token} = isAuthenticated();

  useEffect(()=>{
    showQuizzes(token).then(data => {
        if(data.error) {
            console.error(data.error);
        }
        setQuizzes(data);
    })
  },[])

  return (
    <div>
      <NavbarAdmin/>
      <Typography variant='h3' sx={{textAlign:"center", mt:3}}>All Quizzes</Typography>
      <div className="quiz-table-div">
     
           {/* {
           quizzes.map((curValue) => {
            const { _id, title, description } = curValue;
           <tr key={_id}>
              <td>{title}</td>
              <td>{description}</td>
            </tr>;
          })
    } */}
    <PrintQuizTable quizzes={quizzes} />  
      </div>
      <div className='add-quiz-button'>
      <Link to='/admin/addQuiz'>
      <Button variant="contained" sx={{fontSize:"18px"}}><AddCircleSharpIcon sx={{mr:1}}/>Add Quiz</Button>
      </Link>
      </div>
    </div>
  )
}

export default ShowQuiz
