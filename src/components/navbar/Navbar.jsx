// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">Honey<span>Cosmetics</span></Link>
      </div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  );
};

export default Navbar;
