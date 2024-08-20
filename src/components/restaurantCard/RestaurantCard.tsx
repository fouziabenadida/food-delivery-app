import React from "react";
import "./RestaurantCard.css";

interface RestaurantCardProps {
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  onClick: () => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  image,
  cuisine,
  rating,
  onClick,
}) => {
  return (
    <div className="restaurant-card" onClick={onClick}>
      <img src={image} alt={name} className="restaurant-card-image" />
      <div className="restaurant-card-content">
        <h2 className="restaurant-card-title">{name}</h2>
        <p className="restaurant-card-cuisine">{cuisine}</p>
        <div className="restaurant-card-rating">Rating: {rating} ★</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
