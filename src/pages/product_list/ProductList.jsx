import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/product_card/ProductCard';
import Navbar from '../../components/navbar/Navbar';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="product-list">
        <h2 className="product-list-title">🌿 Our Skincare Essentials</h2>
        {loading ? (
          <p className="loading">Loading products...</p>
        ) : (
          <div className="product-grid">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.name}
                price={`₹${product.price}`}
                image={product.image_url}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
