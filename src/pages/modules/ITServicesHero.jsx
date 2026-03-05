import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./ITServicesHero.css";

import heroImg from "../../assets/images/about1.jpg";

const ITServicesHero = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/Servicespage");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContact = () => {
    navigate("/ContactBanner");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box className="it-hero-bg">
      <Box className="it-hero-overlay">
        <Box className="it-hero-wrapper">
          <Box className="it-hero-container">
            
            {/* LEFT IMAGE */}
            <Box className="it-hero-left">
              <img src={heroImg} alt="IT Services" />
            </Box>

            {/* RIGHT CONTENT */}
            <Box className="it-hero-right">
              <div className="world-dots" />

              <Typography className="it-hero-title">
                Smart IT Services & Digital Solutions
                <br />
                <span>Built to Scale Your Business</span>
              </Typography>

              <Typography className="it-hero-desc">
                Empower your business with cutting-edge IT services tailored
                for modern enterprises. We deliver secure, scalable, and
                reliable technology solutions that drive real growth.
              </Typography>

              <Box className="it-hero-buttons">
                <Button className="btn-read" onClick={handleReadMore}>
                  Read More
                </Button>

                <Button className="btn-contact" onClick={handleContact}>
                  Contact Us
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ITServicesHero;