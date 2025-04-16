import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log("Response data:", data.role);

      if (res.ok) {
        // toast.success('Login Successful!', {
        //   position: toast.POSITION.TOP_CENTER,
        //   autoClose: 5000,
        // });
        setFormData({ email: '', password: '' });
        // Redirect based on role if needed
        if (data.role === 'admin') {
            navigate('/product-list');
          } else if (data.role === 'user') {
            navigate('/home');
          } else {
            navigate('/'); // fallback
          }
      } else {
        setErrorMessage(data.message || 'Login failed!');
        // toast.error(data.message || 'Login failed!', {
        //   position: toast.POSITION.TOP_CENTER,
        //   autoClose: 5000,
        // });
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Something went wrong. Please try again.');
      console.log("error: " , error )
    //   toast.error('Something went wrong. Please try again.', {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 5000,
    //   });
    }

    setIsSubmitting(false);
  };

  const handleSignUpClick = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="welcome-section">
        <h2>New Here?</h2>
        <p>Sign up and discover great skincare products!</p>
        <button className="sign-in-button" onClick={handleSignUpClick}>SIGN UP</button>
      </div>
      <div className="form-section">
        <h2>Login</h2>

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
            {isSubmitting ? 'Logging in...' : 'LOGIN'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
