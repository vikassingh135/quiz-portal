import React from 'react'
import NavbarAdmin from '../../templates/UsersNavbar/NavBarAdmin/NavbarAdmin/NavbarAdmin'
import { Link } from 'react-router-dom'
import './AdminDashboard.css';
import Books from './PYQSection/Books/Books';

const AdminDashboard = () => {
  return (
    <div>
      <NavbarAdmin/>
      <div className='admin-dashboard-quiz-services'>
        
      <h1>Quiz Services</h1>
      <Link to='/admin/Categories'> <button>Categories Page</button></Link>
      <Link to='/admin/addQuiz'><button>Create Quiz</button></Link>
      <Link to='/admin/showQuizzes'><button>Show Quizzes</button></Link>
      </div>

      <h1>Study Materials Services</h1>
      <Books/>
    </div>
  )
}

export default AdminDashboard
