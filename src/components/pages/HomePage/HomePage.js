import React from "react";
import Navbar from "../../templates/navbar/Navbar";
import './HomePage.css';

const HomePage = () => {
  return (
    <div class="homepage">
      <Navbar />
      <div class="home-page-content">
        <h2>Welcome To Quiz</h2>
        <a href="/login"><button>Get Started</button></a>
      </div>
    </div>
  );
};

export default HomePage;
