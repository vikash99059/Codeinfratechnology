// import React from "react";
// import { useNavigate } from "react-router-dom";
// // import services from "../data/servicesData";
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Paper,
//   Button,
//   Chip,
// } from "@mui/material";

// import LanguageIcon from "@mui/icons-material/Language";
// import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
// import LaptopMacIcon from "@mui/icons-material/LaptopMac";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import CloudIcon from "@mui/icons-material/Cloud";
// import SecurityIcon from "@mui/icons-material/Security";
// import PaletteIcon from "@mui/icons-material/Palette";
// import CampaignIcon from "@mui/icons-material/Campaign";

// const services = [
//   {
//     id: "website-development",
//     title: "Website Development",
//     shortDesc:
//       "Create stunning, responsive websites with modern design principles.",
//     fullDesc:
//       "Code Infra Technology provides high-performance website development services using modern frameworks and scalable architecture.",
//     technologies: ["React", "Next.js", "Node.js", "MongoDB"],
//     features: [
//       "Responsive Design",
//       "SEO Optimized",
//       "Fast Loading",
//       "Secure Architecture",
//     ],
//     success: "Delivered 150+ high-performance websites globally.",
//   },
//   {
//     id: "mobile-app-development",
//     title: "Mobile App Development",
//     shortDesc:
//       "Build native and cross-platform mobile apps for iOS and Android.",
//     fullDesc:
//       "We build scalable and user-friendly mobile applications with high performance and smooth UX.",
//     technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
//     features: [
//       "Cross Platform",
//       "High Performance",
//       "App Store Deployment",
//       "Push Notifications",
//     ],
//     success: "Successfully launched 80+ mobile apps.",
//   },
//   {
//     id: "custom-software-development",
//     title: "Custom Software Development",
//     shortDesc:
//       "Tailored software solutions that streamline operations.",
//     fullDesc:
//       "Enterprise-grade custom software tailored to your business workflows.",
//     technologies: ["Node.js", "Python", "Microservices"],
//     features: [
//       "Scalable Architecture",
//       "API Integration",
//       "Enterprise Security",
//       "Cloud Ready",
//     ],
//     success: "Trusted by multiple enterprise clients.",
//   },
// ];



// const ServicesSection = () => {
//     const navigate = useNavigate();
//   return (
//     <Box
//       sx={{
//         py: { xs: 6, md: 10 },
//         px: 2,
//         bgcolor: "#f4f7fb",
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* top badge */}
//         <Box textAlign="center" mb={2}>
//           <Chip
//             label="Premium Technology Solutions"
//             sx={{
//               bgcolor: "#e6efff",
//               color: "#2b6cb0",
//               fontWeight: 600,
//             }}
//           />
//         </Box>

//         {/* heading */}
//         <Box textAlign="center" mb={6}>
//           <Typography
//             variant="h3"
//             fontWeight={700}
//             sx={{
//               color: "#1e3a5f",
//               fontSize: { xs: 28, md: 40 },
//             }}
//           >
//             Transform Your Business With
//             <br />
//             <span style={{ color: "#2b6cb0" }}>
//               Code Infra Technology
//             </span>
//           </Typography>

//           <Typography
//             sx={{
//               mt: 2,
//               color: "#6b7280",
//               maxWidth: 750,
//               mx: "auto",
//             }}
//           >
//             Empowering businesses with cutting-edge IT solutions, innovative
//             strategies, and expert implementation to drive digital growth.
//           </Typography>
//         </Box>

//         {/* cards grid */}
//         <Grid container spacing={3}>
//           {services.map((service, index) => (
//             <Grid container spacing={3}>
//   {services.map((service) => (
//     <Grid item xs={12} sm={6} md={4} key={service.id}>
//       <Paper
//         sx={{
//           p: 3,
//           borderRadius: 3,
//           height: "100%",
//           border: "1px solid #e5eaf2",
//           transition: "0.3s",
//           "&:hover": {
//             transform: "translateY(-8px)",
//             boxShadow: "0 20px 45px rgba(0,0,0,0.12)",
//           },
//         }}
//       >
//         <Typography variant="h6" fontWeight={700} mb={1}>
//           {service.title}
//         </Typography>

//         <Typography variant="body2" sx={{ mb: 3 }}>
//           {service.shortDesc}
//         </Typography>

//         <Button
//           variant="contained"
//           onClick={() => navigate(`/services/${service.id}`)}
//           sx={{
//             bgcolor: "#2b6cb0",
//             borderRadius: 20,
//           }}
//         >
//           Learn More →
//         </Button>
//       </Paper>
//     </Grid>
//   ))}
// </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default ServicesSection;



import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesSection.css";


const services = [
  {
    id: "website-development",
    title: "Website Development",
    badge: "Professional",
    shortDesc:
      "Create stunning, responsive websites with modern design principles, advanced functionality, and optimal performance that drives business growth.",
    fullDesc:
      "We design and develop high-performance, scalable websites tailored to your business goals. Our solutions focus on modern UI/UX, fast loading speeds, SEO optimization, and secure architecture to maximize your online impact.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
  },

  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    badge: "Professional",
    shortDesc:
      "Build native and cross-platform mobile applications that deliver exceptional user experiences and drive customer engagement across iOS and Android.",
    fullDesc:
      "Our mobile app development services deliver powerful, scalable, and user-friendly applications for both Android and iOS platforms using modern frameworks and best practices.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  },

  {
    id: "custom-software-development",
    title: "Custom Software Development",
    badge: "Professional",
    shortDesc:
      "Design and develop tailored software solutions that address your specific business needs and streamline your operations for maximum efficiency.",
    fullDesc:
      "We build enterprise-grade custom software engineered around your workflows to improve productivity, automation, and long-term scalability.",
    technologies: ["Node.js", "Python", "Microservices"],
  },

  {
    id: "ai-software-development",
    title: "AI-Driven Software Development",
    badge: "Professional",
    shortDesc:
      "Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and drive innovation in your business.",
    fullDesc:
      "Leverage AI and ML technologies to build intelligent systems including predictive analytics, automation tools, chatbots, and smart decision platforms.",
    technologies: ["Python", "TensorFlow", "OpenAI", "Machine Learning"],
  },

  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    badge: "Professional",
    shortDesc:
      "Migrate to the cloud and optimize your infrastructure with scalable, secure, and cost-effective cloud solutions tailored to your business needs.",
    fullDesc:
      "We help businesses migrate, manage, and optimize cloud infrastructure for better scalability, performance, and cost efficiency across modern cloud platforms.",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
  },

  {
    id: "cybersecurity-services",
    title: "Cybersecurity Services",
    badge: "Professional",
    shortDesc:
      "Protect your business with comprehensive cybersecurity solutions including threat detection, data protection, and security compliance frameworks.",
    fullDesc:
      "Our cybersecurity services safeguard your digital assets through advanced threat monitoring, vulnerability assessments, compliance management, and data protection strategies.",
    technologies: ["Network Security", "SIEM", "Penetration Testing"],
  },

  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    badge: "Professional",
    shortDesc:
      "Deliver intuitive and engaging digital experiences with our professional UI/UX design services tailored for user satisfaction and brand identity.",
    fullDesc:
      "We craft modern, user-centered interfaces that enhance usability, improve engagement, and strengthen your brand identity across web and mobile platforms.",
    technologies: ["Figma", "Adobe XD", "User Research", "Prototyping"],
  },

  {
    id: "social-media-management",
    title: "Social Media Management",
    badge: "Professional",
    shortDesc:
      "Boost your brand presence and customer engagement with strategic social media content, scheduling, and performance optimization.",
    fullDesc:
      "Our social media experts plan, create, and manage high-performing content strategies that grow your audience, increase engagement, and strengthen brand visibility.",
    technologies: ["Meta Ads", "Content Strategy", "Analytics"],
  },

  {
    id: "digital-marketing",
    title: "Digital Marketing",
    badge: "Professional",
    shortDesc:
      "Drive traffic, generate leads, and increase ROI with tailored digital marketing strategies including SEO, PPC, and content marketing.",
    fullDesc:
      "We deliver data-driven digital marketing campaigns designed to increase visibility, generate qualified leads, and maximize your marketing ROI.",
    technologies: ["SEO", "Google Ads", "PPC", "Content Marketing"],
  },
];

const ServicesSection = () => {
 


const navigate = useNavigate();

const handleBackClick = () => {
  navigate("/", { state: { scrollTo: "ServicesSection" } });
};

  return (
    <section className="services-section">
      <div className="container">
        {/* badge */}
       

        {/* heading */}
        <h2 className="main-heading">
          Transform Your Business With <br />
          <span>Code Infra Technology</span>
        </h2>

        <p className="subtext">
          Empowering businesses with cutting-edge IT solutions, innovative
          strategies, and expert implementation to drive digital growth.
        </p>

        {/* cards */}
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>

              <button
                className="learn-btn"
                onClick={() => navigate(`/services/${service.id}`)}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;