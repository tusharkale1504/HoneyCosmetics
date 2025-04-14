import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set the submitting state to true

    // Clear previous error message
    setErrorMessage('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Login Successful!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
        // Reset form on successful login
        setFormData({ email: '', password: '' });
      } else {
        setErrorMessage(data.message || 'Login failed!');
        toast.error(data.message || 'Login failed!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Something went wrong. Please try again.');
      toast.error('Something went wrong. Please try again.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }

    // Reset the loading state after the request completes
    setIsSubmitting(false);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>

      {/* ToastContainer to show the toast notifications */}
      <ToastContainer />

      {errorMessage && (
        <div className="error-message">{errorMessage}</div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
