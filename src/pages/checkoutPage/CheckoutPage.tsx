import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./ChechoutPage.css";

const CheckoutPage: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    paymentMethod: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Order placed!");
  };

  return (
    <div className="checkout-page">
      <Header />
      <main className="main-content">
        <h1 className="page-title">Checkout</h1>
        <form onSubmit={handleSubmit} className="checkout-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
          <label htmlFor="paymentMethod">Payment Method</label>
          <input
            type="text"
            id="paymentMethod"
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button">
            Place Order
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
