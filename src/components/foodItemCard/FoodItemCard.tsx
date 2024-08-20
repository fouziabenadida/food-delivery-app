import React from "react";
import "./FoodItemCard.css";

interface FoodItemCardProps {
  name: string;
  image: string;
  price: number;
  description: string;
  onClick: () => void;
}

const FoodItemCard: React.FC<FoodItemCardProps> = ({
  name,
  image,
  price,
  description,
  onClick,
}) => {
  return (
    <div className="food-item-card" onClick={onClick}>
      <img src={image} alt={name} className="food-item-card-image" />
      <div className="food-item-card-content">
        <h2 className="food-item-card-title">{name}</h2>
        <p className="food-item-card-description">{description}</p>
        <div className="food-item-card-price">${price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default FoodItemCard;
