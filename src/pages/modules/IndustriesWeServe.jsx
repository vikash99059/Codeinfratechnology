import React from "react";
import bgImage from "../../assets/images/whitebackground.jpg";

// ✅ React Icons
import { FaShoppingCart, FaUtensils, FaHeartbeat, FaTruck, FaGraduationCap, FaServer, FaIndustry, FaBuilding } from "react-icons/fa";

const industriesData = [
  { name: "Retail & E-commerce", description: "Seamless shopping experiences online and offline", icon: <FaShoppingCart /> },
  { name: "Food & Beverage Technology", description: "Innovative solutions for food service and production", icon: <FaUtensils /> },
  { name: "Healthcare & HealthTech", description: "Digital solutions for patient care and medical operations", icon: <FaHeartbeat /> },
  { name: "Logistics & Supply Chain", description: "Optimized delivery and supply chain management", icon: <FaTruck /> },
  { name: "Education & EdTech", description: "Modern learning platforms and educational tools", icon: <FaGraduationCap /> },
  { name: "SaaS & Technology Startups", description: "Software solutions for fast-growing startups", icon: <FaServer /> },
  { name: "Manufacturing", description: "Industrial automation and process optimization", icon: <FaIndustry /> },
  { name: "Enterprise Platforms", description: "Scalable enterprise-grade digital solutions", icon: <FaBuilding /> },
];

const IndustriesWeServe = () => {
  return (
    <section
      style={{
        position: "relative",
        padding: "80px 20px",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "-40px auto",
          position: "relative",
          zIndex: 2,
          color: "#111827",
        }}
      >
        {/* Heading */}
        <h2
  style={{
    textAlign: "center",
    fontSize: "36",
    fontWeight: 800,
    marginBottom: "20px",
    color: "#178380", // teal green
  }}
>
  Industries We <span style={{ color: "#000000" }}>Serve</span>
</h2>
        <p
  style={{
    textAlign: "center",
    fontSize: "1.05rem",
    maxWidth: "800px",
    margin: "0 auto 50px auto",
    color: "#4b5563",
    lineHeight: 1.8,
  }}
>
  With a dynamic approach, we at{" "}
  <strong style={{ color: "#178380" /* premium blue */, fontWeight: "700" }}>
  Code Infra Technology
  </strong>{" "}
  seamlessly navigate diverse industries, delivering innovative and cutting-edge digital solutions.  
  Our expertise empowers businesses to transcend boundaries, optimize efficiency, and elevate their online presence to new heights.
</p>
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {industriesData.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              className="industry-card"
            >
              {/* Icon */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: "#178380",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "1.2rem",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#111827",
                }}
              >
                {item.name}
              </h3>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "#4b5563" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255,255,255,0.6)",
          zIndex: 1,
        }}
      ></div>

      {/* Hover effect CSS */}
      <style>{`
        .industry-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default IndustriesWeServe;