import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthOptions.css';

const AuthOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-options">
      <h1>Welcome to Honey Cosmetics</h1>
      <div className="button-group">
        <button onClick={() => navigate('/register')} className="auth-button">Register</button>
        <button onClick={() => navigate('/login')} className="auth-button">Login</button>
      </div>
    </div>
  );
};

export default AuthOptions;
