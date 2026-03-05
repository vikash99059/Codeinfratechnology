// import React from "react";
// import { useParams } from "react-router-dom";
// import {
//   Box,
//   Container,
//   Typography,
//   Chip,
//   Grid,
//   Paper,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Divider,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import services from "../../pages/modules/servicesData.jsx";

// const ServiceDetails = () => {
//   const { id } = useParams();
//   const service = services.find((s) => s.id === id);

//   if (!service) return <div>Service not found</div>;

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         minHeight: "100vh",
//         py: { xs: 4, sm: 5, md: 6, lg: 8 },
//         px: { xs: 2, sm: 3, md: 4 },
//         bgcolor: "#fafbfc",
//       }}
//     >
//       <Container 
//         maxWidth={false} 
//         sx={{ 
//           maxWidth: "1400px !important",
//           mx: "auto",
//           px: { xs: 1, sm: 2, md: 3 }
//         }}
//       >
//         {/* Header Section */}
//         <Box sx={{ mb: { xs: 4, sm: 5, md: 6 }, textAlign: 'center' }}>
//           <Chip
//             label="Premium Service"
//             sx={{
//               mb: 2,
//               bgcolor: '#1e3a5f',
//               color: 'white',
//               fontWeight: 600,
//               fontSize: { xs: '0.7rem', sm: '0.75rem' },
//               height: { xs: 24, sm: 28 },
//               px: 1,
//             }}
//           />
//           <Typography
//             variant="h3"
//             sx={{
//               fontSize: { xs: 28, sm: 32, md: 36, lg: 42 },
//               fontWeight: 700,
//               color: '#1e3a5f',
//               lineHeight: 1.2,
//               letterSpacing: '-0.02em',
//               maxWidth: '800px',
//               mx: 'auto',
//             }}
//           >
//             {service.title}
//           </Typography>
//         </Box>

//         {/* Main Content Grid */}
//         <Grid
//           container
//           spacing={{ xs: 4, sm: 5, md: 6 }}
//           alignItems="flex-start"
//           direction={{ xs: "column-reverse", md: "row" }}
//         >
//           {/* LEFT CONTENT - 60% */}
//           <Grid item xs={12} md={7}>
//             <Box sx={{ pr: { md: 3 } }}>
//               {/* Description */}
//               <Typography
//                 sx={{
//                   color: "#4a5568",
//                   lineHeight: 1.8,
//                   mb: 4,
//                   fontSize: { xs: 15, sm: 16, md: 17 },
//                 }}
//               >
//                 {service.fullDesc}
//               </Typography>

//               {/* Technologies */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography 
//                   variant="h6" 
//                   sx={{ 
//                     mb: 2,
//                     fontSize: { xs: 18, sm: 20 },
//                     fontWeight: 600,
//                     color: '#1e3a5f',
//                     position: 'relative',
//                     display: 'inline-block',
//                     '&:after': {
//                       content: '""',
//                       position: 'absolute',
//                       bottom: -8,
//                       left: 0,
//                       width: 60,
//                       height: 3,
//                       bgcolor: '#2b6cb0',
//                       borderRadius: 2,
//                     }
//                   }}
//                 >
//                   Technologies
//                 </Typography>
//                 <Box>
//                   {service.technologies.map((tech, i) => (
//                     <Chip
//                       key={i}
//                       label={tech}
//                       sx={{
//                         mr: 1,
//                         mb: 1,
//                         bgcolor: '#f0f4f8',
//                         color: '#1e3a5f',
//                         fontWeight: 500,
//                         fontSize: { xs: '0.75rem', sm: '0.8125rem' },
//                         height: { xs: 28, sm: 32 },
//                         borderRadius: '8px',
//                         '&:hover': {
//                           bgcolor: '#e1e8f0',
//                         },
//                       }}
//                     />
//                   ))}
//                 </Box>
//               </Box>

//               {/* Key Features */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography 
//                   variant="h6" 
//                   sx={{ 
//                     mb: 2,
//                     fontSize: { xs: 18, sm: 20 },
//                     fontWeight: 600,
//                     color: '#1e3a5f',
//                     position: 'relative',
//                     display: 'inline-block',
//                     '&:after': {
//                       content: '""',
//                       position: 'absolute',
//                       bottom: -8,
//                       left: 0,
//                       width: 60,
//                       height: 3,
//                       bgcolor: '#2b6cb0',
//                       borderRadius: 2,
//                     }
//                   }}
//                 >
//                   Key Features
//                 </Typography>
//                 <Grid container spacing={1.5}>
//                   {service.features.map((feature, i) => (
//                     <Grid item xs={12} sm={6} key={i}>
//                       <Box sx={{ 
//                         display: 'flex', 
//                         alignItems: 'center', 
//                         gap: 1.5,
//                         p: 1,
//                       }}>
//                         <Box 
//                           sx={{ 
//                             width: 20,
//                             height: 20,
//                             borderRadius: '50%',
//                             bgcolor: '#2b6cb0',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             color: 'white',
//                             fontSize: 12,
//                             fontWeight: 'bold',
//                           }}
//                         >
//                           ✓
//                         </Box>
//                         <Typography 
//                           sx={{ 
//                             color: "#4a5568",
//                             fontSize: { xs: 14, sm: 15 },
//                           }}
//                         >
//                           {feature}
//                         </Typography>
//                       </Box>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>

//               {/* Success Story - Minimal */}
//               <Box 
//                 sx={{ 
//                   bgcolor: '#f8fafc',
//                   p: 3,
//                   borderRadius: 2,
//                   borderLeft: '4px solid #2b6cb0',
//                 }}
//               >
//                 <Typography 
//                   sx={{ 
//                     color: "#1e3a5f",
//                     fontSize: { xs: 14, sm: 15 },
//                     fontStyle: 'italic',
//                     lineHeight: 1.7,
//                   }}
//                 >
//                   "{service.success}"
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>

//           {/* RIGHT IMAGE - 40% */}
//           <Grid
//             item
//             xs={12}
//             md={5}
//             sx={{
//               display: "flex",
//               justifyContent: { xs: "center", md: "flex-start" },
//             }}
//           >
//             <Box
//               component="img"
//               src={service.image}
//               alt={service.title}
//               sx={{
//                 width: "100%",
//                 maxWidth: { xs: '90%', sm: '80%', md: '90%', lg: '85%' },
//                 height: 'auto',
//                 borderRadius: 3,
//                 boxShadow: '0 20px 40px -15px rgba(0,0,0,0.15)',
//                 transition: 'transform 0.3s ease',
//                 '&:hover': {
//                   transform: 'translateY(-5px)',
//                 }
//               }}
//             />
//           </Grid>
//         </Grid>

//         {/* Process Section - Minimal Cards */}
//         <Box sx={{ mt: { xs: 6, sm: 7, md: 8 } }}>
//           <Divider sx={{ mb: 5, borderColor: '#e2e8f0' }} />
          
//           <Typography 
//             variant="h5" 
//             sx={{ 
//               mb: 4,
//               fontSize: { xs: 22, sm: 24, md: 26 },
//               fontWeight: 600,
//               color: '#1e3a5f',
//               textAlign: 'center'
//             }}
//           >
//             Our Process
//           </Typography>

//           <Grid container spacing={2.5} justifyContent="center">
//             {service.process.map((step, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//                 <Box
//                   sx={{
//                     p: 2.5,
//                     bgcolor: 'white',
//                     borderRadius: 2,
//                     border: '1px solid #edf2f7',
//                     textAlign: 'center',
//                     height: '100%',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       borderColor: '#2b6cb0',
//                       boxShadow: '0 10px 25px -10px rgba(43,108,176,0.2)',
//                     }
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       width: 36,
//                       height: 36,
//                       lineHeight: '36px',
//                       borderRadius: '50%',
//                       bgcolor: '#f0f4f8',
//                       color: '#1e3a5f',
//                       fontWeight: 600,
//                       mx: 'auto',
//                       mb: 1.5,
//                       fontSize: 16,
//                     }}
//                   >
//                     {index + 1}
//                   </Typography>
//                   <Typography 
//                     sx={{ 
//                       fontWeight: 500,
//                       fontSize: { xs: 14, sm: 15 },
//                       color: '#2d3748'
//                     }}
//                   >
//                     {step}
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* Benefits Section - Simple Grid */}
//         <Box sx={{ mt: { xs: 6, sm: 7, md: 8 } }}>
//           <Divider sx={{ mb: 5, borderColor: '#e2e8f0' }} />
          
//           <Typography 
//             variant="h5" 
//             sx={{ 
//               mb: 4,
//               fontSize: { xs: 22, sm: 24, md: 26 },
//               fontWeight: 600,
//               color: '#1e3a5f',
//               textAlign: 'center'
//             }}
//           >
//             Benefits
//           </Typography>

//           <Grid container spacing={2.5}>
//             {service.benefits.map((benefit, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <Box
//                   sx={{
//                     p: 2.5,
//                     bgcolor: 'white',
//                     borderRadius: 2,
//                     border: '1px solid #edf2f7',
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: 2,
//                     height: '100%',
//                   }}
//                 >
//                   <Box 
//                     sx={{ 
//                       width: 32,
//                       height: 32,
//                       borderRadius: '8px',
//                       bgcolor: '#f0f4f8',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       color: '#2b6cb0',
//                       fontSize: 18,
//                     }}
//                   >
//                     ⚡
//                   </Box>
//                   <Typography 
//                     sx={{ 
//                       color: '#2d3748',
//                       fontSize: { xs: 14, sm: 15 },
//                       fontWeight: 500,
//                       lineHeight: 1.4
//                     }}
//                   >
//                     {benefit}
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* FAQs Section - Clean Accordion */}
//         <Box sx={{ mt: { xs: 6, sm: 7, md: 8 } }}>
//           <Divider sx={{ mb: 5, borderColor: '#e2e8f0' }} />
          
//           <Typography 
//             variant="h5" 
//             sx={{ 
//               mb: 4,
//               fontSize: { xs: 22, sm: 24, md: 26 },
//               fontWeight: 600,
//               color: '#1e3a5f',
//               textAlign: 'center'
//             }}
//           >
//             FAQs
//           </Typography>

//           <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
//             {service.faqs.map((faq, index) => (
//               <Accordion
//                 key={index}
//                 sx={{
//                   mb: 2,
//                   border: '1px solid #edf2f7',
//                   borderRadius: '8px !important',
//                   '&:before': { display: 'none' },
//                   boxShadow: 'none',
//                   bgcolor: 'white',
//                 }}
//               >
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon sx={{ color: '#2b6cb0', fontSize: 20 }} />}
//                   sx={{
//                     px: { xs: 2, sm: 2.5 },
//                     py: 1,
//                     '&.Mui-expanded': {
//                       borderBottom: '1px solid #edf2f7',
//                     },
//                   }}
//                 >
//                   <Typography 
//                     sx={{ 
//                       fontWeight: 500,
//                       fontSize: { xs: 15, sm: 16 },
//                       color: '#1e3a5f',
//                     }}
//                   >
//                     {faq.q}
//                   </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails sx={{ px: { xs: 2, sm: 2.5 }, py: 2 }}>
//                   <Typography 
//                     sx={{ 
//                       color: '#4a5568',
//                       fontSize: { xs: 14, sm: 15 },
//                       lineHeight: 1.7
//                     }}
//                   >
//                     {faq.a}
//                   </Typography>
//                 </AccordionDetails>
//               </Accordion>
//             ))}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ServiceDetails;



import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ServiceDetails.css";
import Footer from "./Footer";

import services from "../../pages/modules/servicesData.jsx";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
 const service = services.find(
  (s) => s.id.toLowerCase().trim() === id?.toLowerCase().trim()
);

  // Filter similar services (excluding current service)
  const similarServices = services
  .filter(
    (s) =>
      s.id.toLowerCase().trim() !== id?.toLowerCase().trim()
  )
  .slice(0, 3);

  if (!service) return <div className="service-not-found">Service not found</div>;

  const handleBackClick = () => {
  navigate("/Servicespage", {
    state: { scrollTo: "ServicesSection" },
  });
};
  const handleServiceClick = (serviceId) => {
  navigate(`/services/${encodeURIComponent(serviceId)}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

//   const handleContactClick = () => {
//     navigate('/contact');
//   };

  return (
    <div className="service-details-wrapper">
      {/* Fixed Background Image */}
      <div className="fixed-background"></div>
      
      <div className="service-details-container">
        {/* Back Button */}
        <button onClick={handleBackClick} className="back-button">
  <span className="back-icon">←</span>
  <span className="back-text">Back</span>
</button>

        {/* Header Section */}
        <div className="service-header">
          <span className="premium-badge">Premium Service</span>
          <h1 className="service-title">{service.title}</h1>
        </div>

        {/* Main Content Grid */}
        <div className="service-main-grid">
          {/* LEFT CONTENT */}
          <div className="service-content-left">
            <div className="content-inner">
              {/* Description */}
              <p className="service-description">{service.fullDesc}</p>

              {/* Technologies */}
              <div className="section-block">
                <h3 className="section-title">Technologies</h3>
                <div className="tech-chips">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="section-block">
                <h3 className="section-title">Key Features</h3>
                <div className="features-grid">
                  {service.features.map((feature, i) => (
                    <div key={i} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Story */}
              <div className="success-story">
                <p className="success-text">"{service.success}"</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="service-content-right">
            <div className="image-wrapper">
              <img 
                src={service.image} 
                alt={service.title}
                className="service-image"
              />
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="process-section">
          <div className="section-divider"></div>
          <h2 className="section-heading">Our Process</h2>
          
          <div className="process-grid">
            {service.process.map((step, index) => (
              <div key={index} className="process-card">
                <span className="process-number">{index + 1}</span>
                <span className="process-step">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <div className="section-divider"></div>
          <h2 className="section-heading">Benefits</h2>
          
          <div className="benefits-grid">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <span className="benefit-icon">⚡</span>
                <span className="benefit-text">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="faqs-section">
          <div className="section-divider"></div>
          <h2 className="section-heading">FAQs</h2>
          
          <div className="faqs-container">
            {service.faqs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary className="faq-question">
                  <span>{faq.q}</span>
                  <span className="faq-icon">▼</span>
                </summary>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Similar Services Section */}
        <div className="similar-services-section">
          <div className="section-divider"></div>
          <h2 className="section-heading">Similar Services</h2>
          
          <div className="similar-services-grid">
            {similarServices.map((similar) => (
              <div 
                key={similar.id} 
                className="similar-service-card"
                onClick={() => handleServiceClick(similar.id)}
              >
                <div className="similar-service-image-wrapper">
                  <img 
                    src={similar.image} 
                    alt={similar.title}
                    className="similar-service-image"
                  />
                </div>
                <div className="similar-service-content">
                  <h3 className="similar-service-title">{similar.title}</h3>
                  <p className="similar-service-desc">{similar.shortDesc}</p>
                  <button className="similar-service-button">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="contact-support-section" style={{marginBottom: '40px'}}>
          <div className="section-divider"></div>
          <h2 className="section-heading">Still have questions?</h2>
          <p className="support-subheading">Our team is here to help you with any additional queries</p>
          
          <div className="support-cards">
            <div className="support-card" >
              <div className="support-icon">📧</div>
              <div className="support-info">
                <h4>Email Support</h4>
                <p>support@company.com</p>
              </div>
            </div>
            
            <div className="support-card" >
              <div className="support-icon">📞</div>
              <div className="support-info">
                <h4>Call Us</h4>
                <p>+91-7762012673</p>
              </div>
            </div>
            
            <div className="support-card">
              <div className="support-icon">🕒</div>
              <div className="support-info">
                <h4>Support Hours</h4>
                <p>Monday-Friday, 9:00 AM to 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  
  );
};

export default ServiceDetails;