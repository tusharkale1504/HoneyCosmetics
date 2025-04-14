import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Login Successful!');
    }, 2000);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" disabled={isSubmitting}>Login</button>
        {isSubmitting && <p className="loading-text">Logging in...</p>}
      </form>
    </div>
  );
};

export default LoginPage;
