// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/product-list');
  };

  return (
    <>
      
      <div className="home">
        <div className="home-content">
          <h1>
            Welcome to <span>Honey Cosmetics</span>
          </h1>
          <p>Your one-stop shop for premium beauty and skincare products.</p>
          <button className="shop-btn" onClick={handleShopNow}>
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
