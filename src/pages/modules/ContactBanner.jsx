import React from "react";
import "./ContactBanner.css";
import bgImage from "../../assets/images/whitebackground.jpg";
import ContactSection from "./ContactSection"; // ensure path correct

const ContactBanner = () => {
  return (
    <>
      {/* ===== Banner ===== */}
      <section
        className="contact-banner"
        // style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="contact-overlay" />

        <div className="contact-content">
          <h2>
            Let's <span>Connect With Us</span>
          </h2>

          <p>
            Ready to build something amazing? Our team is here to help you
            transform your ideas into powerful digital solutions.
          </p>

         <button
  className="contact-btn"
  onClick={() => window.location.href = "tel:7762012673"}
>
   Book a Call
</button>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section className="contact-section">
        <div className="contact-info">
          <ContactSection />
        </div>
      </section>
    </>
  );
};

export default ContactBanner;