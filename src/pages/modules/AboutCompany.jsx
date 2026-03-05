import React from "react";
import "./AboutCompany.css";
import rightImg from "../../assets/images/transfomation.png"; // replace with your image
import bgImg from "../../assets/images/whitebackground.jpg"; // replace background
import logoImg from "../../assets/images/codery.png"; // 🔥 add your logo
const AboutSection = () => {
  return (
    <section
      className="aboutci-section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="aboutci-overlay">
        
        {/* ✅ CENTER HEADING WITH LOGO */}
        <div className="aboutci-header">
          {/* <img src={logoImg} alt="CodeInfra Logo" className="aboutci-logo" /> */}
         <h2 className="aboutci-title">About  <span style={{color:"black"}}>CodeInfra</span></h2>

        </div>

        <div className="aboutci-container">
          
          {/* LEFT CONTENT */}
          <div className="aboutci-left">
            <h3 className="aboutci-heading">
              Building the Backbone of Digital Enterprises
            </h3>

            <p>
              <span style={{color:"#2cbdb2",fontWeight:"bold"}}>Code Infra Technologies</span> is a technology consulting and engineering
              firm dedicated to designing and delivering resilient digital
              systems for modern businesses. We specialize in combining
              advanced software engineering, cloud infrastructure, and
              automation to create solutions that are secure, scalable, and
              future-ready.
            </p>

            <p>
              Our team partners closely with startups, growing companies, and
              enterprises to translate complex business challenges into
              elegant, high-impact technology solutions. We focus not only on
              building systems — but on engineering long-term digital
              foundations that support sustained growth.
            </p>

            <p>
              With a strong emphasis on performance, reliability, and strategic
              alignment, Code Infra Technologies helps organizations move
              confidently toward digital maturity.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="aboutci-right">
            <img src={rightImg} alt="AI Technology" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;