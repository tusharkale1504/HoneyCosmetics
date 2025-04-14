// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to <span>Honey Cosmetics</span></h1>
        <p>Your one-stop shop for premium beauty and skincare products.</p>
        <button className="shop-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default Home;
