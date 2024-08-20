import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import RestaurantCard from "../../components/restaurantCard/RestaurantCard";
import Footer from "../../components/footer/Footer";
import "./HomePage.css";

interface Restaurant {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
}

const HomePage: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:5000/restaurants");
        setRestaurants(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch restaurants");
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <h1 className="page-title">Restaurants</h1>
        <div className="restaurant-cards">
          {" "}
          {/* Updated class name */}
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              image={restaurant.image}
              cuisine={restaurant.cuisine}
              rating={restaurant.rating}
              onClick={() => alert(`Clicked on ${restaurant.name}`)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
