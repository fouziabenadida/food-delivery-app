import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are dedicated to providing the best food delivery experience. Our
            mission is to connect you with your favorite restaurants and make
            dining convenient and enjoyable.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/restaurants">Restaurants</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/checkout">Checkout</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              Email: <a href="mailto:support@foodie.com">support@foodie.com</a>
            </li>
            <li>
              Phone: <a href="tel:+1234567890">+123 456 7890</a>
            </li>
            <li>Address: 123 Foodie Lane, Istanbul, Turkey</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Foodie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
