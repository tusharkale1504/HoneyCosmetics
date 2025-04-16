import React, { useState } from 'react';
import './RegisterPage.css';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate(); // ✅ Hook must be here, not inside a function

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        // You can replace this with a toast later
        // alert('Registration Successful!');
        setFormData({ name: '', email: '', password: '', role: '' });

        // ✅ Redirect to login after successful registration
        navigate('/login');
      } else {
        alert(data.message || 'Registration failed!');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while registering.');
    }

    setIsSubmitting(false);
  };

  const handleSignInClick = () => {
    navigate('/login'); // ✅ Navigates to LoginPage
  };

  return (
    <div className="register-container">
      <div className="welcome-section">
        <h2>Welcome Back!</h2>
        <p>Provide your personal details to use all features</p>
        <button className="sign-in-button" onClick={handleSignInClick}>
          SIGN IN
        </button>
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" disabled={isSubmitting} className="signup-button">
            {isSubmitting ? 'Registering...' : 'SIGN UP'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
