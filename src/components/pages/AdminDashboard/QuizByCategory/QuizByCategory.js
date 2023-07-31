import React, { useEffect, useState } from 'react';
import './QuizByCategory.css';
import NavbarAdmin from '../../../templates/UsersNavbar/NavBarAdmin/NavbarAdmin/NavbarAdmin';
import { getQuizByCategoryId, showQuizzes } from '../../../apis/admin/adminApi';
import {PrintQuizTable} from '../../../templates/PrintTable/PrintTable';
import { Link, useLocation } from 'react-router-dom';
import AddQuiz from '../AddQuiz/AddQuiz';
import { Button, Typography } from '@mui/material';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { isAuthenticated } from '../../../auth';

const QuizByCategory = () => {

  const {state} = useLocation();  

  const [quizzes, setQuizzes] = useState([]) ; 

  const {token} = isAuthenticated();

  useEffect(()=>{
    console.log(state);
    getQuizByCategoryId(state.categoryId, token).then(data => {
        if(data.error) {
            console.error(data.error);
        }
         else setQuizzes(data);
    })
  },[])

  return (
    <div>
      <NavbarAdmin/>
      <Typography variant='h3' sx={{textAlign:"center", mt:3}}>All Quizzes</Typography>
      <div className="quiz-table-div">
      {/* <table className="category-table"> */}
       
           
           {
        //    quizzes.map((curValue) => {
        //     const { _id, title, description } = curValue;
        //    <tr key={_id}>
        //       <td>{title}</td>
        //       <td>{description}</td>
        //     </tr>;
        //   })
    }
    {/* {console.log(quizzes)} */}
    <PrintQuizTable quizzes={quizzes} />  
        {/* </tbody>
      </table> */}
      </div>
      <div className='add-quiz-button'>
      <Link to='/admin/addQuiz'>
      <Button variant="contained" sx={{fontSize:"18px"}}><AddCircleSharpIcon sx={{mr:1}}/>Add Quiz</Button>
      </Link>
      </div>
    </div>
  )
}

export default QuizByCategory
