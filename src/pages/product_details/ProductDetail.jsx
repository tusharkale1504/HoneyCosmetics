// src/pages/ProductDetail.js
import React from 'react';
import './ProductDetail.css';

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <div className="product-image-container">
        <img src="https://via.placeholder.com/400" alt="Product" />
      </div>
      <div className="product-info">
        <h2>Product Name</h2>
        <p className="price">$29.99</p>
        <p className="description">
          This is a detailed description of the product. It includes all features, benefits, and details a customer would want to know.
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
