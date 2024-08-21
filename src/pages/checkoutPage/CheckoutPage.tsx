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
    // Handle form submission
    alert("Order placed!");
  };

  return (
    <div className="checkout-page">
      <Header />
      <main className="main-content">
        <h1 className="page-title">Checkout</h1>
        <section className="section">
          <h2 className="section-title">Delivery Address</h2>
          <div className="info-card">
            <p className="info-text">{form.address}</p>
            {isEditingAddress ? (
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
            ) : (
              <button
                type="button"
                onClick={() => setEditingAddress(true)}
                className="edit-button"
              >
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </button>
            )}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Payment Method</h2>
          <div className="info-card">
            <div className="payment-info">
              <img
                src={visa}
                alt={form.paymentMethod.type}
                className="payment-icon"
              />
              <p className="info-text">{form.paymentMethod.number}</p>
            </div>
            {isEditingPayment ? (
              <form className="payment-form">
                <input
                  type="text"
                  name="number"
                  value={form.paymentMethod.number}
                  onChange={handlePaymentChange}
                  placeholder="Card Number"
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
            ) : (
              <button
                type="button"
                onClick={() => setEditingPayment(true)}
                className="edit-button"
              >
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </button>
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
