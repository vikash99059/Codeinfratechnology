import React, { useEffect } from "react";
import Company from "../pages/modules/Compony.jsx";
import MainBanner from "../pages/modules/MainBanner.jsx";
import Gellery from "../pages/modules/Gellery.jsx";
import Services from "../pages/modules/Services";
import ITSolutionsSection from "../pages/modules/ITSolutionsSection";
import Clint from "../pages/modules/Clint";
import ITServicesHero from "../pages/modules/ITServicesHero";
import ExpertsSection from "../pages/modules/ExpertsSection";
import TestimonialSection from "../pages/modules/TestimonialSection";
import Counter from "../pages/modules/Counter";
import Footer from "../pages/modules/Footer";
import ProjectsGallery from "../pages/modules/ProjectsGallery";
import Feature from "../pages/modules/Feature.jsx";

// ✅ background import
import bgImage from "../assets/images/whitebackground.jpg";
import TechStackSection from '../pages/modules/TechStackSection';
import ServicesSection from'../pages/modules/ServicesSection';
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
   const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

     const location = useLocation();
    const compRef = useRef(null);
   
  useEffect(() => {
      if (location.state?.scrollTo === "ServicesSection") {
        compRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, [location]);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`, // ✅ correct way
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div style={{ }}>
        <MainBanner />
        <Services />
        <ITSolutionsSection />
        <Clint />
        <Feature />
        <ITServicesHero />
        <ExpertsSection />
        <TestimonialSection />
        <Counter />
        <TechStackSection/>
        <ServicesSection/>
        <ProjectsGallery />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
