// src/pages/ProductList.js
import React from 'react';
import ProductCard from '../../components/product_card/ProductCard';
import './ProductList.css';

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>All Products</h2>
      <div className="product-grid">
        {/* Replace with mapped products later */}
        <ProductCard title="Lipstick" />
        <ProductCard title="Face Wash" />
        <ProductCard title="Sunscreen" />
      </div>
    </div>
  );
};

export default ProductList;
