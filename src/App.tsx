import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import RestaurantPage from "./pages/restaurantPage/RestaurantPage";
import CartPage from "./pages/cartPage/CartPage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import SignUpPage from "./pages/signUp/SignUpPage";
import ProfilePage from "./pages/profile/ProfilePage";

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
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/restaurants"
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
      </Routes>
    </Router>
  );
};

export default App;
