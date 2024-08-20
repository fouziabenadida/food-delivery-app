import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./RestaurantPage.css";

interface RestaurantPageProps {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  description: string;
}

const RestaurantPage: React.FC<RestaurantPageProps> = ({
  id,
  name,
  image,
  cuisine,
  rating,
  description,
}) => {
  return (
    <div className="restaurant-page">
      <Header />
      <main className="main-content">
        <div className="restaurant-details">
          <img src={image} alt={name} className="restaurant-image" />
          <div className="restaurant-info">
            <h1 className="restaurant-title">{name}</h1>
            <p className="restaurant-cuisine">{cuisine}</p>
            <p className="restaurant-rating">Rating: {rating} ★</p>
            <p className="restaurant-description">{description}</p>
            {/* Add components for food items or menu */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantPage;
