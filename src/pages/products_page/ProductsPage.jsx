import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsPage.css";
import { FaBoxes } from "react-icons/fa";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    navigate("/add-product");
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="products-page">
      <div className="products-appbar">
        <h2 className="products-heading">
          <FaBoxes style={{ marginRight: "10px" }} />
          Honey Cosmetics Products
        </h2>

        <div className="products-actions">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
          </div>

          <button onClick={handleAddProduct}>+ Add Product</button>
        </div>
      </div>

      <div className="product-table">
        <div className="table-header">
          <span>ID</span>
          <span>Image</span>
          <span>Name</span>
          <span>Company</span>
          <span>Price</span>
          <span>Description</span>
          <span>Actions</span>
        </div>

        {products.length === 0 ? (
          <p className="loading">Loading products...</p>
        ) : (
          products.map((product) => (
            <div className="table-row" key={product.id}>
              <span>{product.id}</span>
              <span>
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="table-image"
                />
              </span>
              <span>{product.name}</span>
              <span>{product.company}</span>
              <span>₹{product.price}</span>
              <span className="desc">{product.description}</span>
              <span className="product-actions">
                {/* Update and Delete buttons */}
                <button className="update-btn">✏️ Update</button>
                <button className="delete-btn">🗑️ Delete</button>
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
