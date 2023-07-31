import React, { useEffect, useState } from 'react';
import './ShowQuizzes.css';
import { showQuizzes } from '../../../apis/admin/adminApi';
import {PrintQuizTableUser} from '../../../templates/PrintTable/PrintTable';
import { Link } from 'react-router-dom';
import NavbarUser from '../../../templates/UsersNavbar/NavBarAdmin/NavbarUser/NavbarUser';
import { isAuthenticated } from '../../../auth';

const ShowQuizzes = () => {

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
      <NavbarUser/>
      <h2 style={{marginTop:"20px"}}>All Quizzes</h2>
      <div className="category-table-div">
      
{/*         
          quizzes.map((curValue) => { 
           const { _id, title, description } = curValue;
           <tr key={_id}>
              <td>{title}</td>
              <td>{description}</td>
          </tr>;
          }) */}
  
    <PrintQuizTableUser quizzes={quizzes} />  
      </div>
    </div>
  )
}

export default ShowQuizzes
