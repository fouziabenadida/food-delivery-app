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
        {/* Display cart items here */}
        <div className="cart-items">
          {/* Example cart item */}
          <div className="cart-item">
            <img
              src="/assets/burger.jpg"
              alt="Burger"
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <h2 className="cart-item-title">The Gourmet Burger</h2>
              <p className="cart-item-price">$10.99</p>
            </div>
          </div>
          {/* Add more cart items */}
        </div>
        <div className="cart-summary">
          <h2>Total: $10.99</h2>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
