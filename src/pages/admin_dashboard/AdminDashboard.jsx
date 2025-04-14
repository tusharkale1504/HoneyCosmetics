// src/pages/AdminDashboard.js
import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <p className="subtitle">Manage your products and orders here</p>

      <div className="admin-panels">
        <div className="panel">
          <h3>Products</h3>
          <p>View, add, edit or delete products.</p>
          <button className="panel-btn">Manage Products</button>
        </div>

        <div className="panel">
          <h3>Orders</h3>
          <p>Track and manage customer orders.</p>
          <button className="panel-btn">Manage Orders</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
