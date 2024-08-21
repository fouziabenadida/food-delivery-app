import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import RestaurantPage from "./pages/restaurantPage/RestaurantPage";
import CartPage from "./pages/cartPage/CartPage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import Footer from "./components/footer/Footer";
import "./styles/variables.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/restaurant/:id"
          element={
            <RestaurantPage
              id={0}
              name={""}
              image={""}
              cuisine={""}
              rating={0}
              description={""}
            />
          }
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
