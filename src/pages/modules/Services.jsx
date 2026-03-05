import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

import bgImage from "../../assets/images/whitebackground.jpg";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Managed IT services",
      desc: "Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt ut labore.",
      icon: icon1,
      link: "/Servicespage",
    },
    {
      title: "Multi-function services",
      desc: "Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt ut labore.",
      icon: icon2,
      link: "/Servicespage",
    },
    {
      title: "Cyber security",
      desc: "Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt ut labore.",
      icon: icon3,
      link: "/Servicespage",
    },
  ];

  return (
    <div
      className="itservices-wrapper"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="itservices-container">
        <h2 className="itservices-title">
  World best IT-Services <br />
  <span
    style={{
      color: "#1f9a91",
      fontWeight: 700,
     
      
    }}
  >
    we provide
  </span>
</h2>
        

        <div className="itservices-grid">
          {services.map((item, index) => (
            <div key={index} className="itservices-card">
              <div className="itservices-content">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="itservices-icon"
                />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              {/* Hover Overlay */}
              <div className="itservices-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button
                  onClick={() => navigate(item.link)}
                  className="itservices-learn-btn"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;