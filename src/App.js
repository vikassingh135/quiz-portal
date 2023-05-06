import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/templates/navbar/Navbar';
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import Register from './components/pages/RegisterPage.js/Register';
import LoginPage from './components/pages/LoginPage/LoginPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='login' element={<LoginPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
