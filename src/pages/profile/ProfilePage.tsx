import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import user from "../../assets/user.png";
import "./ProfilePage.css";

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      <Header />
      <main className="main-content">
        <h1 className="page-title">Profile Overview</h1>
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-image-container">
              <img src={user} alt="Profile" className="profile-image" />
            </div>
            <div className="profile-details">
              <h2 className="profile-name">John Doe</h2>
              <p className="profile-email">johndoe@example.com</p>
              <p className="profile-gender">Gender: Male</p>
            </div>
          </div>
          <div className="profile-actions">
            <button className="edit-button">Edit Profile</button>
            <button className="logout-button">Logout</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
