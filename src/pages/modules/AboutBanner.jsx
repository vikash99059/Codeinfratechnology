import React from "react";
import "./AboutBanner.css";
import bannerImg from "../../assets/images/ssas.jpg"; // apni image path
import { useNavigate } from "react-router-dom";
const AboutBanner = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Servicespage"); // 👈 apna route
  };
  return (
    <section
      className="about-banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="about-overlay">
        <div className="about-content">
          <h4 className="about-subtitle">ABOUT OUR COMPANY</h4>
          
          <h1 className="about-title">
            Premium <span>IT Services</span> & Digital Solutions
          </h1>

          <p className="about-desc">
            We deliver scalable, secure, and high-performance IT services
            that help businesses grow faster in the digital world.
          </p>

          <button className="about-btn" onClick={handleClick}>
      Explore Services
    </button>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;