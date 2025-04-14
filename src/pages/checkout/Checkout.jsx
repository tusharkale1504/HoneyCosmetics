// src/pages/Checkout.js
import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <div className="checkout-container">
        {/* Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <ul>
            <li>Product A <span>$20.00</span></li>
            <li>Product B <span>$15.00</span></li>
            <li>Shipping <span>$5.00</span></li>
            <li className="total">Total <span>$40.00</span></li>
          </ul>
        </div>

        {/* Payment Info */}
        <div className="payment-info">
          <h3>Payment Information</h3>
          <form>
            <label>Name on Card</label>
            <input type="text" placeholder="John Doe" />
            <label>Card Number</label>
            <input type="text" placeholder="1234 5678 9012 3456" />
            <label>Expiry Date</label>
            <input type="text" placeholder="MM/YY" />
            <label>CVV</label>
            <input type="text" placeholder="123" />
            <button type="submit">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
