import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductDetail.css';
import Navbar from '../../components/navbar/Navbar';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products/2')
      .then((res) => setProduct(res.data))
      .catch((err) => console.error('Error fetching product:', err));
  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="product-detail">
        <div className="product-image-container">
          <img src={product.image_url} alt={product.name} />
        </div>
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="price">₹{product.price}</p>
          <p className="description">{product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
