import React, { useState } from "react";
import "./Header.css";
import foodie2 from "../../assets/foodie2.jpg";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={foodie2} alt="Foodie Logo" />
          <span>Foodie</span>
        </div>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
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
        </nav>
        <div className="actions">
          <Link className="profile" to={"/profile"}>
            <img src={user} alt="Profile" />
          </Link>
          <Link to={"/signup"}>
            <button className="btn-sign-in">Sign Up</button>
          </Link>
        </div>

        <button className="burger" onClick={toggleMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
