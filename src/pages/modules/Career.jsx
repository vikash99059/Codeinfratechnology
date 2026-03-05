// TechInternshipHero.jsx
import React, { useRef, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import TechStackSection from "./TechStackSection"; // make sure this path is correct
import intership from "../../assets/images/tecno.jpg";
import InternshipList from "./InternshipList"; // component to list internships, create this if it doesn't exist
import Internshay from "./Internshay"; 
import Footer from "../../pages/modules/Footer.jsx"; 

const TechInternshipHero = () => {
   const internshipRef = useRef(null);
   useEffect(() => {
    internshipRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []); 
  const scrollToInternships = () => {
    internshipRef.current?.scrollIntoView({ behavior: "smooth" });
  };// empty dependency = runs once on mount

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "600px", md: "700px" },
          backgroundImage: `url(${intership})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: { xs: "scroll", md: "fixed" }, // fixed only on desktop
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 5, md: 10 },
          px: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              color: "#fff",
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: 3,
              p: { xs: 3, md: 6 },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Accelerate Your <span style={{ color: "#4A90E2" }}>Tech Career</span>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                mb: 4,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              Launch your career with cutting-edge AI and technology internships.
              Gain hands-on experience and learn from industry experts.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: { xs: "0.9rem", md: "1rem" },
                borderRadius: 2,
                backgroundColor: "#4A90E2",
                "&:hover": { backgroundColor: "#357ABD" },
              }}
              onClick={scrollToInternships} // <- This triggers scroll
            >
              Tech Internships
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Tech stack section */}
      <TechStackSection />
      <div ref={internshipRef}>
        <InternshipList />
        <Internshay/>
        <Footer/>
      </div>
    </>
  );
};

export default TechInternshipHero;