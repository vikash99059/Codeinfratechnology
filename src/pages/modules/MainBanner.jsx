// import React from "react";
// import "./MainBanner.css";
// import heroImg from "../../assets/images/transfomation.png";

// const HeroBannerSection = () => {
//   return (
//     <>
//       {/* ===== HERO BANNER ===== */}
//       <section className="hbs-wrapper">
//         <div className="hbs-container">
//           {/* LEFT CONTENT */}
//           <div className="hbs-content">
//             <h1 className="hbs-heading">
//               <span className="hbs-highlight">Smart IT Services</span>
//               <br />
//               for Modern Businesses
//             </h1>

//             <p className="hbs-description">
//               We deliver scalable IT solutions including software development,
//               cloud integration, cybersecurity, and digital transformation.
//             </p>

//             <div className="hbs-button-group">
//               <button className="hbs-btn-primary">Let's Connect</button>
//               <button className="hbs-btn-secondary">Call Now</button>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="hbs-image-box">
//             <img src={heroImg} alt="IT Services" />
//           </div>
//         </div>

//         {/* ===== HANGING BOX ===== */}
//         <div className="hbs-floating-box">
//           <h3>Book Appointment</h3>

//           <div className="hbs-form-row">
//             <input type="text" placeholder="Your name" />
//             <input type="email" placeholder="Your email" />
//             <select>
//               <option>Discussion About</option>
//               <option>Web Development</option>
//               <option>App Development</option>
//             </select>
//           </div>

//           <button className="hbs-appoint-btn">
//             Get Appointment
//           </button>
//         </div>
//       </section>

//       {/* ===== NEXT SECTION (for overlap demo) ===== */}

//     </>
//   );
// };

// export default HeroBannerSection;




import React, { useState } from "react";
import "./MainBanner.css";
import heroImg from "../../assets/images/manoi.png";
import { useNavigate } from "react-router-dom";

const HeroBannerSection = () => {
const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Discussion About",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openWhatsApp = () => {
    const phone = "917762012673"; // apna WhatsApp number

    const message = encodeURIComponent(
      `Hello, I want to book an appointment.

Name: ${form.name}
Email: ${form.email}
Service: ${form.service}`
    );

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };
  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="hbs-wrapper">
        <div className="hbs-container">
          {/* LEFT CONTENT */}
          <div className="hbs-content">
            <h1 className="hbs-heading">
              <span className="hbs-highlight">Engineering Scalable Digital Infrastructure for Enterprise Growth</span>
              <br />
              for Modern Businesses
            </h1>

            <p className="hbs-description">
              Code Infra Technologies delivers secure, high-performance software and cloud infrastructure that enables organizations to innovate faster, operate smarter, and scale confidently in a digital-first world.
            </p>

            <div className="hbs-button-group">
              <button
                className="hbs-btn-primary"
                onClick={() => navigate("/ContactBanner")}
              >
                Schedule a Consultation
              </button>

              <button
                className="hbs-btn-secondary"
                onClick={() => navigate("/Servicespage")}
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hbs-image-box">
            <img src={heroImg} alt="IT Services" />
          </div>
        </div>

        {/* ===== HANGING BOX ===== */}
        <div className="hbs-floating-box">
          <h3>Book Appointment</h3>

          <div className="hbs-form-row">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
            >
              <option>Discussion About</option>
              <option>Web Development</option>
              <option>App Development</option>
            </select>
          </div>

          <button className="hbs-appoint-btn" onClick={openWhatsApp}>
            Get Appointment
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroBannerSection;