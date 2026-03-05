import React, { useEffect } from "react";
import Company from "../pages/modules/Compony.jsx";
import AboutBanner from "../pages/modules/AboutBanner";
import AboutCompany from "../pages/modules/AboutCompany";
import Missionvalue from "../pages/modules/Missionvalue";
import Footer from "../pages/modules/Footer";
import IndustriesWeServe  from '../pages/modules/IndustriesWeServe';
import Ourdelivery from '../pages/modules/Ourdelivery';
import Clint from "../pages/modules/Clint";
import TestimonialSection from "../pages/modules/TestimonialSection";

// ✅ IMPORT BACKGROUND IMAGEsss
import bgImage from "../assets/images/whitebackground.jpg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`, // ✅ imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div style={{ backgroundColor: "#f7f7f7" }}>
        <AboutBanner />
        <AboutCompany />
        <Missionvalue />
        <Clint />
        <IndustriesWeServe/>
        
        <Ourdelivery/>
        <TestimonialSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;