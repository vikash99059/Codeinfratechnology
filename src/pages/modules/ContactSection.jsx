import React, { useState } from "react";
import "./ContactSection.css";
import contactBg from "../../assets/images/whitebackground.jpg";

const ContactSection = () => {
  // ✅ form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // ✅ handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ WhatsApp send
  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = "917762012673";

    const text = encodeURIComponent(
`Hello Code Infra Technologies Team 👋

Welcome! I would like to connect regarding your services.

📌 My Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

📝 Message:
${formData.message}

Please get back to me at your convenience.

Thank you 🙏`
    );

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <>
      {/* ===== MAP + INFO WITH FIXED BG ===== */}
      <section
        className="codeinfra-contact-section"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="codeinfra-contact-overlay">
          <div className="codeinfra-contact-wrapper">
            {/* LEFT MAP */}
            <div className="codeinfra-contact-map-box">
              <iframe
                title="ITHUM Tower Map"
                src="https://www.google.com/maps?q=ITHUM+Tower+Galaxy+Business+Park+Sector+62+Noida&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* RIGHT INFO */}
            <div className="codeinfra-contact-info-box">
              <h3>Contact Information</h3>

              <div className="codeinfra-contact-info-item">
                <span>Company</span>
                <p>Code Infra Technologies</p>
              </div>

              <div className="codeinfra-contact-info-item">
                <span>Industry</span>
                <p>IT Services and IT Consulting</p>
              </div>

              <div className="codeinfra-contact-info-item">
                <span>Company Size</span>
                <p>11–50 employees</p>
              </div>

              <div className="codeinfra-contact-info-item">
                <span>Website</span>
                <p>www.codeinfratechnologies.com</p>
              </div>

              <div className="codeinfra-contact-info-item">
                <span>Phone</span>
                <p>+91-7762012673</p>
              </div>

              <div className="codeinfra-contact-info-item">
                <span>Location</span>
                <p>Noida, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORM SECTION ===== */}
      <section className="codeinfra-contact-form-section">
        <div className="codeinfra-contact-form-container">
          <h3>Send Us a Message</h3>

          <form onSubmit={handleSubmit} className="codeinfra-contact-form">
            <div className="codeinfra-contact-form-grid">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                required
                onChange={handleChange}
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              placeholder="Write your message..."
              rows="4"
              onChange={handleChange}
            />

            <button type="submit">Submit Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactSection;