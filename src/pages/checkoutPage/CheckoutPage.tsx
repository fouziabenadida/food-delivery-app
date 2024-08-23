import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import visa from "../../assets/visa.jpg";
import "./CheckoutPage.css";

const CheckoutPage: React.FC = () => {
  const [form, setForm] = useState({
    name: "John Doe",
    address: "123 Main St, Anytown, USA",
    paymentMethod: {
      type: "Visa",
      number: "**** **** **** 1234",
    },
  });

  const [isEditingAddress, setEditingAddress] = useState(false);
  const [isEditingPayment, setEditingPayment] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      paymentMethod: {
        ...form.paymentMethod,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed!");
  };

  return (
    <div className="checkout-page">
      <Header />
      <main className="main-content">
        <h1 className="page-title">Checkout</h1>

        <section className="cart-summary">
          <h2 className="section-title">Your Cart</h2>
          <div className="cart-items">
            <div className="cart-item">
              <img
                src="https://images.unsplash.com/photo-1632552544460-055cff0d29a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Burger"
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h3 className="cart-item-title">Beef Burger</h3>
                <p className="cart-item-subtitle">Double Beef</p>
                <p className="cart-item-price">$5.40</p>
              </div>
            </div>
            <div className="cart-item">
              <img
                src="https://images.unsplash.com/photo-1598679253544-2c97992403ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fries"
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h3 className="cart-item-title">French Fries</h3>
                <p className="cart-item-price">$2.00</p>
              </div>
            </div>
          </div>
          <div className="cart-total">
            <h3>Total: $7.40</h3>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Delivery Address</h2>
          <div className="info-card">
            <div className="info-card-header">
              <p className="info-text">{form.address}</p>
              <button
                type="button"
                onClick={() => setEditingAddress(!isEditingAddress)}
                className="info-edit-button"
              >
                Edit
              </button>
            </div>
            {isEditingAddress && (
              <form className="address-form">
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setEditingAddress(false)}
                  className="save-button"
                >
                  Save
                </button>
              </form>
            )}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Payment Method</h2>
          <div className="info-card">
            <div className="info-card-header">
              <div className="payment-info">
                <img
                  src={visa}
                  alt={form.paymentMethod.type}
                  className="payment-icon"
                />
                <p className="info-text">{form.paymentMethod.number}</p>
              </div>
              <button
                type="button"
                onClick={() => setEditingPayment(!isEditingPayment)}
                className="info-edit-button"
              >
                Edit
              </button>
            </div>
            {isEditingPayment && (
              <form className="payment-form">
                <input
                  type="text"
                  name="number"
                  value={form.paymentMethod.number}
                  onChange={handlePaymentChange}
                  placeholder="Card Number"
                  required
                />
                <input
                  type="text"
                  name="cvv"
                  value={form.paymentMethod.cvv}
                  onChange={handlePaymentChange}
                  placeholder="CVV"
                  required
                />
                <input
                  type="text"
                  name="expiry"
                  value={form.paymentMethod.expiry}
                  onChange={handlePaymentChange}
                  placeholder="Expiry Date (MM/YY)"
                  required
                />
                <button
                  type="button"
                  onClick={() => setEditingPayment(false)}
                  className="save-button"
                >
                  Save
                </button>
              </form>
            )}
          </div>
        </section>

        <button type="submit" onClick={handleSubmit} className="submit-button">
          Place Order
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
