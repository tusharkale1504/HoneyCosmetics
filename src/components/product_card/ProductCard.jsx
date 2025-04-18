// src/components/ProductCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, title, image }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
       navigate(`/products-detail/${id}`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <button onClick={handleViewDetails}>View Details</button>
    </div>
  );
};

export default ProductCard;
