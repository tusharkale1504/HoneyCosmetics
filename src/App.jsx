import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import ProductList from './pages/product_list/ProductList';
import Home from './pages/home/Home';
import AdminDashboard from './pages/admin_dashboard/AdminDashboard';
import AddProducts from './pages/add_products/AddProducts';
import ProductsPage from './pages/products_page/ProductsPage';
import ProductDetail from './pages/product_details/ProductDetail';

const App = () => {
  return (
  
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/products-page" element={<ProductsPage />} />
        <Route path="/add-product" element={<AddProducts />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/products-detail/:id" element={<ProductDetail />} />

      </Routes>
 
  );
};

export default App;
