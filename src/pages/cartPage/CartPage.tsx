import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./CartPage.css";

const CartPage: React.FC = () => {
  return (
    <div className="cart-page">
      <Header />
      <main className="main-content">
        <h1 className="page-title">Your Cart</h1>
        <div className="cart-items">
          <div className="cart-item">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Burger"
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <h2 className="cart-item-title">Beef Burger</h2>
              <p className="cart-item-subtitle">Double Beef</p>
              <div className="cart-item-quantity">
                <button className="quantity-btn">-</button>
                <span className="quantity-value">1</span>
                <button className="quantity-btn">+</button>
              </div>
              <p className="cart-item-price">$5.40</p>
            </div>
            <button className="remove-btn">×</button>
          </div>
        </div>
        <div className="cart-summary">
          <h2>Total: $5.40</h2>
          <button className="checkout-button">Checkout</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
