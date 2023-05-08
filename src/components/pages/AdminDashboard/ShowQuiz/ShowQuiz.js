import React, { useEffect, useState } from 'react';
import './ShowQuiz.css';
import NavbarAdmin from '../../../templates/UsersNavbar/NavBarAdmin/NavbarAdmin/NavbarAdmin';
import { showQuizzes } from '../../../apis/admin/adminApi';
import {PrintQuizTable} from '../../../templates/PrintTable/PrintTable';
import { Link } from 'react-router-dom';
import AddQuiz from '../AddQuiz/AddQuiz';

const ShowQuiz = () => {

  const [quizzes, setQuizzes] = useState([]) ; 

  useEffect(()=>{
    showQuizzes().then(data => {
        if(data.error) {
            console.error(data.error);
        }
        setQuizzes(data);
    })
  },[])

  return (
    <div>
      <NavbarAdmin/>
      <div className="category-table-div">
      <table className="category-table">
        <caption>Quiz Table</caption>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Max Marks</th>
            <th>Number of Questions</th>
            <th>Category</th>
            <th>Creation Time</th>
            <th>Show Questions</th>
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
    <PrintQuizTable quizzes={quizzes} />  
        </tbody>
      </table>
      </div>
      <Link to='/admin/addQuiz'>
        <button>AddQuiz</button>
      </Link>
    </div>
  )
}

export default ShowQuiz
