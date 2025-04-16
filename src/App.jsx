import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage'; // if you have one
import ProductList from './pages/product_list/ProductList';
import Home from './pages/home/Home';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/product-list" element={<ProductList />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
 
  );
};

export default App;
