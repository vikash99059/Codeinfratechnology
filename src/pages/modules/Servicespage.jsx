import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ITServiceBanner from "./ITServiceBanner";
import Feature from "./Feature";
import ServicesSection from "./ServicesSection";
import Footer from "./Footer";
import Counter from "./Counter";
import IndustriesWeServe from "./IndustriesWeServe";

function Servicespage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "ServicesSection") {
      const el = document.getElementById("ServicesSection");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <div>
      <ITServiceBanner />
      <Feature />
      <section id="ServicesSection">
      <ServicesSection />
      </section>
      <Counter />
      <IndustriesWeServe />
      <Footer />
    </div>
  );
}

export default Servicespage;