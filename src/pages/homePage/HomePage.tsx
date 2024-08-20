import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <Header />
      <main className="main-content">
        <h2>Welcome to Food Delivery App</h2>
        <p>Explore restaurants near you and enjoy your favorite meals!</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
