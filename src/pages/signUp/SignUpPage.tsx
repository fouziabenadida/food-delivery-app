import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./SignUpPage.css";

const SignUpPage: React.FC = () => {
  const [gender, setGender] = useState<string>("");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleGenderChange = (selectedGender: string) => {
    setGender(selectedGender);
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }
  };

  return (
    <div className="signup-page">
      <Header />
      <main className="main-content">
        <h1 className="page-title">Create an Account</h1>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <div className="gender-tabs">
                <div
                  className={`gender-tab ${gender === "male" ? "active" : ""}`}
                  onClick={() => handleGenderChange("male")}
                >
                  Male
                </div>
                <div
                  className={`gender-tab ${
                    gender === "female" ? "active" : ""
                  }`}
                  onClick={() => handleGenderChange("female")}
                >
                  Female
                </div>
              </div>
            </div>
            <div className="form-checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" name="terms" required />I agree to the
                terms and conditions
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="newsletter" />
                Subscribe to newsletter
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="notifications" />
                Receive notifications
              </label>
            </div>
            {/* Add reCAPTCHA */}
            <div className="recaptcha-container">
              <ReCAPTCHA
                sitekey="YOUR_SITE_KEY"
                onChange={handleCaptchaChange}
              />
            </div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;
