// src/pages/AdminDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleGoToProducts = () => {
    navigate('/products-page');
  };

  return (
    <div className="admin-dashboard">
      <h2>Welcome Admin 👑</h2>
      <p className="subtitle">Easily manage products, track orders, and stay on top of business.</p>

      <div className="admin-panels">
        <div className="panel glass-card">
          <h3>🛍️ Products</h3>
          <p>Add, edit, or remove products from your collection.</p>
          <button className="panel-btn" onClick={handleGoToProducts}>
            Go to Products
          </button>
        </div>

        <div className="panel glass-card">
          <h3>📦 Orders</h3>
          <p>View and process customer orders efficiently.</p>
          <button className="panel-btn">Go to Orders</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
