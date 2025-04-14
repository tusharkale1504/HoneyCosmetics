// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, image, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <button>View Details</button>
    </div>
  );
};

export default ProductCard;
