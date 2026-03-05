import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./ITSolutionsSection.css";

import sideImg from "../../assets/images/imageit.jpg";

// Icons using emoji (you can replace with MUI icons or FontAwesome)
const highlights = [
  {
    icon: "⚡",
    title: "Strategic Engineering Mindset",
    description: "We align technology architecture with measurable business outcomes.",
  },
  {
    icon: "🏆",
    title: "Enterprise-Grade Quality",
    description: "Security, scalability, and performance are built into every solution.",
  },
  {
    icon: "☁️",
    title: "Cloud-Native Expertise",
    description: "Deep experience with modern distributed and containerized environments.",
  },
  {
    icon: "🔄",
    title: "Agile & Transparent Delivery",
    description: "Predictable execution with continuous stakeholder visibility.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership Focus",
    description: "We build relationships, not just software.",
  },
];

const ITSolutionsSection = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box className="it-wrapper">
      <Box className="it-container">
        {/* LEFT */}
        <Box className="it-left">
          <Typography
  style={{
    fontSize: "1.5rem",   // smaller font
    fontWeight: 700, 
    marginBottom:"20px",     // bold
    lineHeight: 1.2,      // reduce spacing between lines
    
    color: "#178380",     // optional color
  }}
>
   Why Code Infra <span style={{ color: "black" }}>Choose US</span>
</Typography>

          <Typography
  style={{
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "#555555",
    maxWidth: "600px",
    marginBottom: "20px",
  }}
>
  Code Infra Technologies delivers secure, high-performance IT solutions and cloud 
  infrastructure that empower organizations to innovate rapidly, streamline operations, 
  and scale with confidence in today’s digital-first environment. Our expertise spans 
  enterprise-grade software, cloud-native platforms, and agile technology services 
  tailored to drive measurable business outcomes.
</Typography>

          {/* Highlight List with Icons */}
          <Box className="it-highlights">
            {highlights.map((item, index) => (
              <Box key={index} className="it-highlight-item">
                <Box className="highlight-icon">{item.icon}</Box>
                <Box className="highlight-content">
                  <Typography className="highlight-title">
                    <strong>{item.title}</strong>
                  </Typography>
                  <Typography className="highlight-desc">{item.description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

          
        </Box>

        {/* RIGHT */}
        <Box className="it-right">
          <div className="dot-pattern" />

          <div className="image-box">
            <img src={sideImg} alt="IT Solutions" />
           
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default ITSolutionsSection;