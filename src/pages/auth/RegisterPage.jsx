import React, { useState } from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Registration Successful!');
    }, 2000);
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" disabled={isSubmitting}>Register</button>
        {isSubmitting && <p className="loading-text">Registering...</p>}
      </form>
    </div>
  );
};

export default RegisterPage;
