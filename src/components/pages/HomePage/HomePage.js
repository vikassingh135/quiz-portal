import React from "react";
import Navbar from "../../templates/navbar/Navbar";
import './HomePage.css';

const HomePage = () => {
  return (
    <div class="homepage">
      <Navbar />
      <div class="home-page-content">
        <h2>Welcome To Quiz</h2>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default HomePage;
