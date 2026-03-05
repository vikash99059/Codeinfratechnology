import React from "react";
import bannerImage from "../../assets/images/IT_Service.jpg"; // your uploaded image
import "./ITServiceBanner.css";
import { Link } from "react-router-dom";
const ITBanner = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "917762012673"; // 👈 apna WhatsApp number
    const message = encodeURIComponent(
      "Hello! I need more information about your IT services. Please share the details."
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  return (
    <section
      className="it-banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="it-banner-overlay">
        <div className="it-banner-content">
          {/* <span className="it-banner-tag">Premium IT Solutions</span> */}
          <h1 className="it-banner-title">
  Transforming Businesses with <br /> Smart IT Solutions
</h1>

<p className="it-banner-subtitle">
  We deliver scalable software, secure cloud infrastructure, and cutting-edge digital services that accelerate your business growth and innovation.
</p>
          <div className="it-banner-buttons">
            <Link to="/ContactBanner">
              <button className="btn-primary">Free Consultation</button>
            </Link>
            <button className="btn-outline" onClick={handleWhatsApp}>
              Chat Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITBanner;