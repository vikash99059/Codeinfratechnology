// import React, { useState } from "react";
// import { Box, Typography, Container, Button, Modal } from "@mui/material";
// import { useParams } from "react-router-dom";
// import javaBanner from "../../assets/images/cyber.png"; // import banners for each type
// import pythonBanner from "../../assets/images/cyber.png";

// const internshipData = {
//   java: {
//     title: "Java Developer",
//     banner: javaBanner,
//     description:
//       "Build scalable backend services using Java and Spring Boot. Learn enterprise application development, microservices, and cloud deployment.",
//   },
//   python: {
//     title: "Python Developer",
//     banner: pythonBanner,
//     description:
//       "Work on backend systems, data pipelines, and automation using Python and related frameworks.",
//   },
//   // add remaining internships here...
// };

// const InternshipDetails = () => {
//   const { id } = useParams();
//   const internship = internshipData[id];

//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   if (!internship) return <Typography variant="h5">Internship not found</Typography>;

//   return (
//     <Box>
//       {/* Banner */}
//       <Box
//         sx={{
//           width: "100%",
//           height: { xs: "200px", md: "300px" },
//           backgroundImage: `url(${internship.banner})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Typography variant="h3" color="#fff" sx={{ backgroundColor: "rgba(0,0,0,0.5)", p: 2, borderRadius: 2 }}>
//           {internship.title}
//         </Typography>
//       </Box>

//       {/* Description Section */}
//       <Container maxWidth="md" sx={{ py: 6 }}>
//         <Typography variant="body1" mb={4}>
//           {internship.description}
//         </Typography>
//         <Button variant="contained" color="primary" onClick={handleOpen}>
//           Apply Now
//         </Button>
//       </Container>

//       {/* Modal for LinkedIn Apply */}
//       <Modal open={open} onClose={handleClose}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: { xs: "90%", md: 400 },
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 2,
//           }}
//         >
//           <Typography variant="h6" mb={2}>
//             Apply with LinkedIn
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             component="a"
//             href="https://www.linkedin.com/jobs/" // replace with LinkedIn apply link
//             target="_blank"
//           >
//             Continue to LinkedIn
//           </Button>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default InternshipDetails;




// import React, { useState } from "react";
// import { 
//   Box, Typography, Container, Button, Modal, Grid, Paper, 
//   Card, CardContent, Avatar, List, ListItem, ListItemIcon, 
//   ListItemText, Divider, Chip 
// } from "@mui/material";
// import { useParams } from "react-router-dom";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import WorkIcon from "@mui/icons-material/Work";
// import SchoolIcon from "@mui/icons-material/School";
// import TimelineIcon from "@mui/icons-material/Timeline";
// import CodeIcon from "@mui/icons-material/Code";
// import CloudIcon from "@mui/icons-material/Cloud";
// import StorageIcon from "@mui/icons-material/Storage";
// import SecurityIcon from "@mui/icons-material/Security";

// // Import banners (you can use different banners for each internship)
// import javaBanner from "../../assets/images/cyber.png";
// import pythonBanner from "../../assets/images/cyber.png";
// import webBanner from "../../assets/images/cyber.png";
// import databaseBanner from "../../assets/images/cyber.png";
// import aiBanner from "../../assets/images/cyber.png";
// import dataBanner from "../../assets/images/cyber.png";

// const internshipData = {
//   java: {
//     id: "java",
//     title: "Java Developer",
//     subtitle: "Build scalable backend services for AI-powered educational platform",
//     banner: javaBanner,
//     about: `Build scalable backend services and contribute to our AI-powered educational platform using Java and Spring Boot. 
//     You'll work on high-performance microservices that power our learning management system, handling thousands of concurrent users.`,
//     responsibilities: [
//       "Develop RESTful APIs and microservices using Spring Boot",
//       "Ensure APIs are optimized for high performance and scalability",
//       "Integrate APIs with AI-powered features and machine learning models",
//       "Collaborate with front-end developers to ensure seamless user experience",
//       "Participate in code reviews and contribute to technical documentation",
//       "Debug and fix issues in existing applications",
//       "Learn and implement best practices for Java development"
//     ],
//     benefits: [
//       { icon: <TimelineIcon />, title: "Flexible Work Hours", description: "Work when you're most productive" },
//       { icon: <WorkIcon />, title: "Competitive Stipend", description: "Rewarding compensation package" },
//       { icon: <SchoolIcon />, title: "Certificate of Completion", description: "Industry-recognized certification" },
//       { icon: <CodeIcon />, title: "Opportunity for PPO", description: "Path to full-time employment" }
//     ],
//     testimonials: [
//       {
//         name: "Shubham Kumar",
//         role: "Former Java intern",
//         content: "My internship at Paperhai was transformative. The mentorship and hands-on experience helped me grow tremendously as a developer.",
//         avatar: "SK"
//       },
//       {
//         name: "Vikash Kumar",
//         role: "Software Engineer",
//         content: "Started as an intern and now I'm a full-time engineer. Paperhai truly invests in their interns' growth and future.",
//         avatar: "VK"
//       }
//     ],
//     requirements: [
//       "Strong knowledge of Core Java and OOP concepts",
//       "Experience with Spring Boot and Spring Framework",
//       "Understanding of RESTful APIs and microservices architecture",
//       "Knowledge of databases (SQL/NoSQL)",
//       "Familiarity with version control systems (Git)",
//       "Good problem-solving and analytical skills",
//       "Excellent communication and teamwork abilities"
//     ],
//     techStack: ["Java", "Spring Boot", "Microservices", "REST APIs", "MySQL", "MongoDB", "Docker", "Git"]
//   },
//   python: {
//     id: "python",
//     title: "Python Developer",
//     subtitle: "Build scalable data pipelines and backend services using Python",
//     banner: pythonBanner,
//     about: "Work on backend systems, data pipelines, and automation using Python and related frameworks. You'll build robust applications that process large volumes of educational data.",
//     responsibilities: [
//       "Develop backend services using Python and Django/FastAPI",
//       "Build data processing pipelines for analytics",
//       "Create automation scripts for various business processes",
//       "Integrate with machine learning models for content recommendation",
//       "Optimize application performance and response times",
//       "Write clean, maintainable, and well-documented code",
//       "Collaborate with cross-functional teams"
//     ],
//     benefits: [
//       { icon: <TimelineIcon />, title: "Flexible Work Hours", description: "Work when you're most productive" },
//       { icon: <WorkIcon />, title: "Competitive Stipend", description: "Rewarding compensation package" },
//       { icon: <SchoolIcon />, title: "Certificate of Completion", description: "Industry-recognized certification" },
//       { icon: <CodeIcon />, title: "Opportunity for PPO", description: "Path to full-time employment" }
//     ],
//     testimonials: [
//       {
//         name: "Shubham Kumar",
//         role: "Former Java intern",
//         content: "My internship at Paperhai was transformative. The mentorship and hands-on experience helped me grow tremendously as a developer.",
//         avatar: "SK"
//       },
//       {
//         name: "Vikash Kumar",
//         role: "Software Engineer",
//         content: "Started as an intern and now I'm a full-time engineer. Paperhai truly invests in their interns' growth and future.",
//         avatar: "VK"
//       }
//     ],
//     requirements: [
//       "Proficiency in Python programming",
//       "Experience with Django or FastAPI frameworks",
//       "Understanding of RESTful APIs",
//       "Knowledge of databases and ORM",
//       "Familiarity with data processing libraries (Pandas, NumPy)",
//       "Experience with version control (Git)",
//       "Strong analytical and problem-solving skills"
//     ],
//     techStack: ["Python", "Django", "FastAPI", "PostgreSQL", "Pandas", "Docker", "Redis", "Git"]
//   },
//   web: {
//     id: "web",
//     title: "Web Development",
//     subtitle: "Create responsive and interactive web applications",
//     banner: webBanner,
//     about: "Develop responsive web applications using modern JavaScript frameworks. You'll work on the frontend of our educational platform, creating intuitive user interfaces.",
//     responsibilities: [
//       "Build responsive user interfaces with React.js",
//       "Implement state management using Redux or Context API",
//       "Create reusable components and libraries",
//       "Optimize applications for maximum performance",
//       "Collaborate with backend developers for API integration",
//       "Ensure cross-browser compatibility",
//       "Write clean and maintainable code"
//     ],
//     benefits: [
//       { icon: <TimelineIcon />, title: "Flexible Work Hours", description: "Work when you're most productive" },
//       { icon: <WorkIcon />, title: "Competitive Stipend", description: "Rewarding compensation package" },
//       { icon: <SchoolIcon />, title: "Certificate of Completion", description: "Industry-recognized certification" },
//       { icon: <CodeIcon />, title: "Opportunity for PPO", description: "Path to full-time employment" }
//     ],
//     testimonials: [
//       {
//         name: "Shubham Kumar",
//         role: "Former Java intern",
//         content: "My internship at Paperhai was transformative. The mentorship and hands-on experience helped me grow tremendously as a developer.",
//         avatar: "SK"
//       },
//       {
//         name: "Vikash Kumar",
//         role: "Software Engineer",
//         content: "Started as an intern and now I'm a full-time engineer. Paperhai truly invests in their interns' growth and future.",
//         avatar: "VK"
//       }
//     ],
//     requirements: [
//       "Strong knowledge of HTML5, CSS3, and JavaScript",
//       "Experience with React.js and its ecosystem",
//       "Understanding of responsive design principles",
//       "Familiarity with RESTful APIs",
//       "Knowledge of version control (Git)",
//       "Experience with modern build tools",
//       "Good eye for UI/UX design"
//     ],
//     techStack: ["React", "JavaScript", "TypeScript", "Redux", "HTML5", "CSS3", "Material-UI", "Webpack"]
//   },
//   database: {
//     id: "database",
//     title: "Database Developer",
//     subtitle: "Design and optimize database systems for analytics",
//     banner: databaseBanner,
//     about: "Design and optimize database systems for analytics. You'll work with both SQL and NoSQL databases to store and retrieve educational content efficiently.",
//     responsibilities: [
//       "Design database schemas for various applications",
//       "Write complex SQL queries and optimize them",
//       "Implement database security and backup strategies",
//       "Work with both SQL and NoSQL databases",
//       "Monitor database performance and tune as needed",
//       "Create database documentation",
//       "Collaborate with development team for data requirements"
//     ],
//     benefits: [
//       { icon: <TimelineIcon />, title: "Flexible Work Hours", description: "Work when you're most productive" },
//       { icon: <WorkIcon />, title: "Competitive Stipend", description: "Rewarding compensation package" },
//       { icon: <SchoolIcon />, title: "Certificate of Completion", description: "Industry-recognized certification" },
//       { icon: <CodeIcon />, title: "Opportunity for PPO", description: "Path to full-time employment" }
//     ],
//     testimonials: [
//       {
//         name: "Shubham Kumar",
//         role: "Former Java intern",
//         content: "My internship at Paperhai was transformative. The mentorship and hands-on experience helped me grow tremendously as a developer.",
//         avatar: "SK"
//       },
//       {
//         name: "Vikash Kumar",
//         role: "Software Engineer",
//         content: "Started as an intern and now I'm a full-time engineer. Paperhai truly invests in their interns' growth and future.",
//         avatar: "VK"
//       }
//     ],
//     requirements: [
//       "Strong knowledge of SQL and database design",
//       "Experience with MySQL, PostgreSQL, or MongoDB",
//       "Understanding of data modeling principles",
//       "Knowledge of indexing and query optimization",
//       "Familiarity with backup and recovery procedures",
//       "Experience with data migration tools",
//       "Attention to detail and analytical mindset"
//     ],
//     techStack: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQL", "Database Design", "Data Modeling", "ETL"]
//   },
//   ai: {
//     id: "ai",
//     title: "AI/ML Developer",
//     subtitle: "Develop machine learning algorithms for educational platform",
//     banner: aiBanner,
//     about: "Develop machine learning algorithms and recommendation systems that personalize the learning experience for thousands of students.",
//     responsibilities: [
//       "Develop machine learning models for content recommendation",
//       "Implement NLP algorithms for text analysis",
//       "Process and clean large datasets for training",
//       "Evaluate model performance and fine-tune parameters",
//       "Deploy ML models to production",
//       "Stay updated with latest ML research",
//       "Collaborate with backend team for model integration"
//     ],
//     benefits: [
//       { icon: <TimelineIcon />, title: "Flexible Work Hours", description: "Work when you're most productive" },
//       { icon: <WorkIcon />, title: "Competitive Stipend", description: "Rewarding compensation package" },
//       { icon: <SchoolIcon />, title: "Certificate of Completion", description: "Industry-recognized certification" },
//       { icon: <CodeIcon />, title: "Opportunity for PPO", description: "Path to full-time employment" }
//     ],
//     testimonials: [
//       {
//         name: "Shubham Kumar",
//         role: "Former Java intern",
//         content: "My internship at Paperhai was transformative. The mentorship and hands-on experience helped me grow tremendously as a developer.",
//         avatar: "SK"
//       },
//       {
//         name: "Vikash Kumar",
//         role: "Software Engineer",
//         content: "Started as an intern and now I'm a full-time engineer. Paperhai truly invests in their interns' growth and future.",
//         avatar: "VK"
//       }
//     ],
//     requirements: [
//       "Strong understanding of machine learning concepts",
//       "Experience with Python and ML libraries (scikit-learn, TensorFlow, PyTorch)",
//       "Knowledge of NLP techniques",
//       "Understanding of statistics and mathematics",
//       "Experience with data preprocessing",
//       "Familiarity with model deployment",
//       "Research-oriented mindset"
//     ],
//     techStack: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "NLP", "Pandas", "NumPy", "Jupyter"]
//   },
//   data: {
//     id: "data",
//     title: "Data Analytics",
//     subtitle: "Analyze data and generate insights for business decisions",
//     banner: dataBanner,
//     about: "Analyze educational data and generate insights for business decisions. You'll work with large datasets to identify trends and improve learning outcomes.",
//     responsibilities: [
//       "Analyze user behavior and learning patterns",
//       "Create dashboards and reports for stakeholders",
//       "Perform statistical analysis on educational data",
//       "Identify trends and insights from data",
//       "Work with data visualization tools",
//       "Clean and prepare data for analysis",
//       "Present findings to the team"
//     ],
//     benefits: [
//       { icon: <TimelineIcon />, title: "Flexible Work Hours", description: "Work when you're most productive" },
//       { icon: <WorkIcon />, title: "Competitive Stipend", description: "Rewarding compensation package" },
//       { icon: <SchoolIcon />, title: "Certificate of Completion", description: "Industry-recognized certification" },
//       { icon: <CodeIcon />, title: "Opportunity for PPO", description: "Path to full-time employment" }
//     ],
//     testimonials: [
//       {
//         name: "Shubham Kumar",
//         role: "Former Java intern",
//         content: "My internship at Paperhai was transformative. The mentorship and hands-on experience helped me grow tremendously as a developer.",
//         avatar: "SK"
//       },
//       {
//         name: "Vikash Kumar",
//         role: "Software Engineer",
//         content: "Started as an intern and now I'm a full-time engineer. Paperhai truly invests in their interns' growth and future.",
//         avatar: "VK"
//       }
//     ],
//     requirements: [
//       "Proficiency in SQL and data querying",
//       "Experience with Python or R for data analysis",
//       "Knowledge of statistical methods",
//       "Familiarity with data visualization tools",
//       "Understanding of business metrics",
//       "Strong analytical and problem-solving skills",
//       "Attention to detail"
//     ],
//     techStack: ["SQL", "Python", "Pandas", "Tableau", "Power BI", "Excel", "Statistics", "Data Visualization"]
//   }
// };

// const InternshipDetails = () => {
//   const { id } = useParams();
//   const internship = internshipData[id];

//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   if (!internship) {
//     return (
//       <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
//         <Typography variant="h4" gutterBottom>
//           Internship Not Found
//         </Typography>
//         <Typography variant="body1" color="text.secondary" paragraph>
//           The internship you're looking for doesn't exist or has been removed.
//         </Typography>
//         <Button variant="contained" href="/internships">
//           Back to Internships
//         </Button>
//       </Container>
//     );
//   }

//   return (
//     <Box>
//       {/* 450px Banner */}
//       <Box
//         sx={{
//           width: "100%",
//           height: "450px",
//           backgroundImage: `url(${internship.banner})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           position: "relative",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0,0,0,0.6)",
//           },
//         }}
//       >
//         <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
//           <Typography 
//             variant="h2" 
//             component="h1" 
//             sx={{ 
//               color: "#fff", 
//               fontWeight: 700,
//               mb: 2,
//               textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
//               fontSize: { xs: "2.5rem", md: "3.75rem" }
//             }}
//           >
//             {internship.title}
//           </Typography>
//           <Typography 
//             variant="h5" 
//             sx={{ 
//               color: "#fff", 
//               maxWidth: "800px", 
//               mx: "auto",
//               textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
//               opacity: 0.95
//             }}
//           >
//             {internship.subtitle}
//           </Typography>
//         </Container>
//       </Box>

//       {/* Content Container */}
//       <Container maxWidth="lg" sx={{ py: 6 }}>
        
//         {/* About This Role Section */}
//         <Box mb={6}>
//           <Typography variant="h4" fontWeight={700} gutterBottom>
//             About This Role
//           </Typography>
//           <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
//             {internship.about}
//           </Typography>
//         </Box>

//         <Divider sx={{ my: 4 }} />

//         {/* Responsibilities Section */}
//         <Box mb={6}>
//           <Typography variant="h4" fontWeight={700} gutterBottom>
//             Responsibilities
//           </Typography>
//           <List>
//             {internship.responsibilities.map((item, index) => (
//               <ListItem key={index} sx={{ px: 0 }}>
//                 <ListItemIcon sx={{ minWidth: "36px" }}>
//                   <CheckCircleIcon color="primary" />
//                 </ListItemIcon>
//                 <ListItemText primary={item} />
//               </ListItem>
//             ))}
//           </List>
//         </Box>

//         <Divider sx={{ my: 4 }} />

//         {/* Benefits Section - Card Layout */}
//         <Box mb={6}>
//           <Typography variant="h4" fontWeight={700} gutterBottom>
//             Benefits
//           </Typography>
//           <Grid container spacing={3} sx={{ mt: 1 }}>
//             {internship.benefits.map((benefit, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <Card 
//                   sx={{ 
//                     height: "100%", 
//                     display: "flex", 
//                     flexDirection: "column",
//                     transition: "transform 0.2s",
//                     "&:hover": {
//                       transform: "translateY(-4px)",
//                       boxShadow: 3
//                     }
//                   }}
//                 >
//                   <CardContent>
//                     <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
//                       <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56 }}>
//                         {benefit.icon}
//                       </Avatar>
//                     </Box>
//                     <Typography variant="h6" align="center" gutterBottom>
//                       {benefit.title}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" align="center">
//                       {benefit.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         <Divider sx={{ my: 4 }} />

//         {/* Testimonials Section */}
//         <Box mb={6}>
//           <Typography variant="h4" fontWeight={700} gutterBottom>
//             Testimonials
//           </Typography>
//           <Grid container spacing={3} sx={{ mt: 1 }}>
//             {internship.testimonials.map((testimonial, index) => (
//               <Grid item xs={12} md={6} key={index}>
//                 <Paper 
//                   elevation={2} 
//                   sx={{ 
//                     p: 3, 
//                     height: "100%",
//                     borderRadius: 2,
//                     transition: "transform 0.2s",
//                     "&:hover": {
//                       transform: "translateY(-4px)",
//                       boxShadow: 4
//                     }
//                   }}
//                 >
//                   <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                     <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56, mr: 2 }}>
//                       {testimonial.avatar}
//                     </Avatar>
//                     <Box>
//                       <Typography variant="h6">{testimonial.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {testimonial.role}
//                       </Typography>
//                     </Box>
//                   </Box>
//                   <Typography variant="body1" sx={{ fontStyle: "italic" }}>
//                     "{testimonial.content}"
//                   </Typography>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         <Divider sx={{ my: 4 }} />

//         {/* Requirements Section */}
//         <Box mb={6}>
//           <Typography variant="h4" fontWeight={700} gutterBottom>
//             Requirements
//           </Typography>
//           <List>
//             {internship.requirements.map((item, index) => (
//               <ListItem key={index} sx={{ px: 0 }}>
//                 <ListItemIcon sx={{ minWidth: "36px" }}>
//                   <CheckCircleIcon color="primary" />
//                 </ListItemIcon>
//                 <ListItemText primary={item} />
//               </ListItem>
//             ))}
//           </List>
//         </Box>

//         <Divider sx={{ my: 4 }} />

//         {/* Tech Stack Section */}
//         <Box mb={6}>
//           <Typography variant="h4" fontWeight={700} gutterBottom>
//             Tech Stack
//           </Typography>
//           <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
//             {internship.techStack.map((tech, index) => (
//               <Chip
//                 key={index}
//                 label={tech}
//                 color="primary"
//                 variant="outlined"
//                 sx={{ fontSize: "1rem", py: 2, px: 1 }}
//               />
//             ))}
//           </Box>
//         </Box>

//         {/* Apply Button */}
//         <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
//           <Button 
//             variant="contained" 
//             color="primary" 
//             size="large"
//             onClick={handleOpen}
//             sx={{ 
//               py: 1.5, 
//               px: 6, 
//               fontSize: "1.2rem",
//               borderRadius: 2,
//               boxShadow: 2,
//               "&:hover": {
//                 transform: "scale(1.02)",
//                 boxShadow: 4
//               }
//             }}
//           >
//             Apply Now
//           </Button>
//         </Box>
//       </Container>

//       {/* Modal for LinkedIn Apply */}
//       <Modal open={open} onClose={handleClose}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: { xs: "90%", md: 450 },
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 2,
//           }}
//         >
//           <Typography variant="h5" mb={1} fontWeight={600}>
//             Apply for {internship.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary" mb={3}>
//             You'll be redirected to LinkedIn to complete your application
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             size="large"
//             component="a"
//             href="https://www.linkedin.com/jobs/"
//             target="_blank"
//             sx={{ py: 1.5 }}
//           >
//             Continue to LinkedIn
//           </Button>
//           <Button
//             variant="text"
//             fullWidth
//             onClick={handleClose}
//             sx={{ mt: 1 }}
//           >
//             Cancel
//           </Button>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default InternshipDetails;




import React, { useState } from "react";
import Query from './Query';
import { 
  Box, Typography, Container, Button, Modal, Grid, Paper, 
  Card, CardContent, Avatar, List, ListItem, ListItemIcon, 
  ListItemText, Divider, Chip 
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import TimelineIcon from "@mui/icons-material/Timeline";
import CodeIcon from "@mui/icons-material/Code";

// Import banners
import javaBanner from "../../assets/images/R.jpg";
import pythonBanner from "../../assets/images/Python-1024x576.jpg";
import webBanner from "../../assets/images/cyber.png";
import databaseBanner from "../../assets/images/databasedevloper.jpg";
import aiBanner from "../../assets/images/AI-and-ML-Solutions.jpg";
import dataBanner from "../../assets/images/cyber.png";
import any from "../../assets/images/any.png";
import cloud from "../../assets/images/slide-6.jpg";

// Internship Data
const internshipData = {
  java: {
    id: "java",
    title: "Java Developer",
    subtitle: "Build scalable backend services for AI-powered educational platform",
    banner: javaBanner,
    about: `Build scalable backend services and contribute to our AI-powered educational platform using Java and Spring Boot. 
    You'll work on high-performance microservices that power our learning management system, handling thousands of concurrent users.`,
    responsibilities: [
      "Develop RESTful APIs and microservices using Spring Boot",
      "Ensure APIs are optimized for high performance and scalability",
      "Integrate APIs with AI-powered features and machine learning models",
      "Collaborate with front-end developers to ensure seamless user experience",
      "Participate in code reviews and contribute to technical documentation",
      "Debug and fix issues in existing applications",
      "Learn and implement best practices for Java development"
    ],
    benefits: [
      { icon: <TimelineIcon />, title: "Flexible Work Hours", description: "Work when you're most productive" },
      { icon: <WorkIcon />, title: "Competitive Stipend", description: "Rewarding compensation package" },
      { icon: <SchoolIcon />, title: "Certificate of Completion", description: "Industry-recognized certification" },
      { icon: <CodeIcon />, title: "Opportunity for PPO", description: "Path to full-time employment" }
    ],
    testimonials: [
      {
        name: "Shubham Kumar",
        role: "Former Java intern",
        content: "My internship at Paperhai was transformative. The mentorship and hands-on experience helped me grow tremendously as a developer.",
        avatar: "SK"
      },
      {
        name: "Vikash Kumar",
        role: "Software Engineer",
        content: "Started as an intern and now I'm a full-time engineer. Paperhai truly invests in their interns' growth and future.",
        avatar: "VK"
      }
    ],
    requirements: [
      "Strong knowledge of Core Java and OOP concepts",
      "Experience with Spring Boot and Spring Framework",
      "Understanding of RESTful APIs and microservices architecture",
      "Knowledge of databases (SQL/NoSQL)",
      "Familiarity with version control systems (Git)",
      "Good problem-solving and analytical skills",
      "Excellent communication and teamwork abilities"
    ],
    techStack: ["Java", "Spring Boot", "Microservices", "REST APIs", "MySQL", "MongoDB", "Docker", "Git"]
  },
  python: {
    id: "python",
    title: "Python Developer",
    subtitle: "Build scalable data pipelines and backend services using Python",
    banner: pythonBanner,
    about: "Work on backend systems, data pipelines, and automation using Python and related frameworks. You'll build robust applications that process large volumes of educational data.",
    responsibilities: [
      "Develop backend services using Python and Django/FastAPI",
      "Build data processing pipelines for analytics",
      "Create automation scripts for various business processes",
      "Integrate with machine learning models for content recommendation",
      "Optimize application performance and response times",
      "Write clean, maintainable, and well-documented code",
      "Collaborate with cross-functional teams"
    ],
    benefits: [
      { icon: <TimelineIcon />, title: "Flexible Work Hours", description: "Work when you're most productive" },
      { icon: <WorkIcon />, title: "Competitive Stipend", description: "Rewarding compensation package" },
      { icon: <SchoolIcon />, title: "Certificate of Completion", description: "Industry-recognized certification" },
      { icon: <CodeIcon />, title: "Opportunity for PPO", description: "Path to full-time employment" }
    ],
    testimonials: [
      {
        name: "Shubham Kumar",
        role: "Former Java intern",
        content: "My internship at Paperhai was transformative. The mentorship and hands-on experience helped me grow tremendously as a developer.",
        avatar: "SK"
      },
      {
        name: "Vikash Kumar",
        role: "Software Engineer",
        content: "Started as an intern and now I'm a full-time engineer. Paperhai truly invests in their interns' growth and future.",
        avatar: "VK"
      }
    ],
    requirements: [
      "Proficiency in Python programming",
      "Experience with Django or FastAPI frameworks",
      "Understanding of RESTful APIs",
      "Knowledge of databases and ORM",
      "Familiarity with data processing libraries (Pandas, NumPy)",
      "Experience with version control (Git)",
      "Strong analytical and problem-solving skills"
    ],
    techStack: ["Python", "Django", "FastAPI", "PostgreSQL", "Pandas", "Docker", "Redis", "Git"]
  },
  web: {
    id: "web",
    title: "Web Development",
    subtitle: "Create responsive and interactive web applications",
    banner: webBanner,
    about: "Develop responsive web applications using modern JavaScript frameworks. You'll work on the frontend of our educational platform, creating intuitive user interfaces.",
    responsibilities: [
      "Build responsive user interfaces with React.js",
      "Implement state management using Redux or Context API",
      "Create reusable components and libraries",
      "Optimize applications for maximum performance",
      "Collaborate with backend developers for API integration",
      "Ensure cross-browser compatibility",
      "Write clean and maintainable code"
    ],
    benefits: [
      { icon: <TimelineIcon />, title: "Flexible Work Hours", description: "Work when you're most productive" },
      { icon: <WorkIcon />, title: "Competitive Stipend", description: "Rewarding compensation package" },
      { icon: <SchoolIcon />, title: "Certificate of Completion", description: "Industry-recognized certification" },
      { icon: <CodeIcon />, title: "Opportunity for PPO", description: "Path to full-time employment" }
    ],
    testimonials: [
      {
        name: "Shubham Kumar",
        role: "Former Java intern",
        content: "My internship at Paperhai was transformative. The mentorship and hands-on experience helped me grow tremendously as a developer.",
        avatar: "SK"
      },
      {
        name: "Vikash Kumar",
        role: "Software Engineer",
        content: "Started as an intern and now I'm a full-time engineer. Paperhai truly invests in their interns' growth and future.",
        avatar: "VK"
      }
    ],
    requirements: [
      "Strong knowledge of HTML5, CSS3, and JavaScript",
      "Experience with React.js and its ecosystem",
      "Understanding of responsive design principles",
      "Familiarity with RESTful APIs",
      "Knowledge of version control (Git)",
      "Experience with modern build tools",
      "Good eye for UI/UX design"
    ],
    techStack: ["React", "JavaScript", "TypeScript", "Redux", "HTML5", "CSS3", "Material-UI", "Webpack"]
  },
  database: {
    id: "database",
    title: "Database Developer",
    subtitle: "Design and optimize database systems for analytics",
    banner: databaseBanner,
    about: "Design and optimize database systems for analytics. You'll work with both SQL and NoSQL databases to store and retrieve educational content efficiently.",
    responsibilities: [
      "Design database schemas for various applications",
      "Write complex SQL queries and optimize them",
      "Implement database security and backup strategies",
      "Work with both SQL and NoSQL databases",
      "Monitor database performance and tune as needed",
      "Create database documentation",
      "Collaborate with development team for data requirements"
    ],
    benefits: [
      { icon: <TimelineIcon />, title: "Flexible Work Hours", description: "Work when you're most productive" },
      { icon: <WorkIcon />, title: "Competitive Stipend", description: "Rewarding compensation package" },
      { icon: <SchoolIcon />, title: "Certificate of Completion", description: "Industry-recognized certification" },
      { icon: <CodeIcon />, title: "Opportunity for PPO", description: "Path to full-time employment" }
    ],
    testimonials: [
      {
        name: "Shubham Kumar",
        role: "Former Java intern",
        content: "My internship at Paperhai was transformative. The mentorship and hands-on experience helped me grow tremendously as a developer.",
        avatar: "SK"
      },
      {
        name: "Vikash Kumar",
        role: "Software Engineer",
        content: "Started as an intern and now I'm a full-time engineer. Paperhai truly invests in their interns' growth and future.",
        avatar: "VK"
      }
    ],
    requirements: [
      "Strong knowledge of SQL and database design",
      "Experience with MySQL, PostgreSQL, or MongoDB",
      "Understanding of data modeling principles",
      "Knowledge of indexing and query optimization",
      "Familiarity with backup and recovery procedures",
      "Experience with data migration tools",
      "Attention to detail and analytical mindset"
    ],
    techStack: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQL", "Database Design", "Data Modeling", "ETL"]
  },
  ai: {
    id: "ai",
    title: "AI/ML Developer",
    subtitle: "Develop machine learning algorithms for educational platform",
    banner: aiBanner,
    about: "Develop machine learning algorithms and recommendation systems that personalize the learning experience for thousands of students.",
    responsibilities: [
      "Develop machine learning models for content recommendation",
      "Implement NLP algorithms for text analysis",
      "Process and clean large datasets for training",
      "Evaluate model performance and fine-tune parameters",
      "Deploy ML models to production",
      "Stay updated with latest ML research",
      "Collaborate with backend team for model integration"
    ],
    benefits: [
      { icon: <TimelineIcon />, title: "Flexible Work Hours", description: "Work when you're most productive" },
      { icon: <WorkIcon />, title: "Competitive Stipend", description: "Rewarding compensation package" },
      { icon: <SchoolIcon />, title: "Certificate of Completion", description: "Industry-recognized certification" },
      { icon: <CodeIcon />, title: "Opportunity for PPO", description: "Path to full-time employment" }
    ],
    testimonials: [
      {
        name: "Shubham Kumar",
        role: "Former Java intern",
        content: "My internship at Paperhai was transformative. The mentorship and hands-on experience helped me grow tremendously as a developer.",
        avatar: "SK"
      },
      {
        name: "Vikash Kumar",
        role: "Software Engineer",
        content: "Started as an intern and now I'm a full-time engineer. Paperhai truly invests in their interns' growth and future.",
        avatar: "VK"
      }
    ],
    requirements: [
      "Strong understanding of machine learning concepts",
      "Experience with Python and ML libraries (scikit-learn, TensorFlow, PyTorch)",
      "Knowledge of NLP techniques",
      "Understanding of statistics and mathematics",
      "Experience with data preprocessing",
      "Familiarity with model deployment",
      "Research-oriented mindset"
    ],
    techStack: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "NLP", "Pandas", "NumPy", "Jupyter"]
  },
  data: {
    id: "data",
    title: "Data Analytics",
    subtitle: "Analyze data and generate insights for business decisions",
    banner: any,
    about: "Analyze educational data and generate insights for business decisions. You'll work with large datasets to identify trends and improve learning outcomes.",
    responsibilities: [
      "Analyze user behavior and learning patterns",
      "Create dashboards and reports for stakeholders",
      "Perform statistical analysis on educational data",
      "Identify trends and insights from data",
      "Work with data visualization tools",
      "Clean and prepare data for analysis",
      "Present findings to the team"
    ],
    benefits: [
      { icon: <TimelineIcon />, title: "Flexible Work Hours", description: "Work when you're most productive" },
      { icon: <WorkIcon />, title: "Competitive Stipend", description: "Rewarding compensation package" },
      { icon: <SchoolIcon />, title: "Certificate of Completion", description: "Industry-recognized certification" },
      { icon: <CodeIcon />, title: "Opportunity for PPO", description: "Path to full-time employment" }
    ],
    testimonials: [
      {
        name: "Shubham Kumar",
        role: "Former Java intern",
        content: "My internship at Paperhai was transformative. The mentorship and hands-on experience helped me grow tremendously as a developer.",
        avatar: "SK"
      },
      {
        name: "Vikash Kumar",
        role: "Software Engineer",
        content: "Started as an intern and now I'm a full-time engineer. Paperhai truly invests in their interns' growth and future.",
        avatar: "VK"
      }
    ],
    requirements: [
      "Proficiency in SQL and data querying",
      "Experience with Python or R for data analysis",
      "Knowledge of statistical methods",
      "Familiarity with data visualization tools",
      "Understanding of business metrics",
      "Strong analytical and problem-solving skills",
      "Attention to detail"
    ],
    techStack: ["SQL", "Python", "Pandas", "Tableau", "Power BI", "Excel", "Statistics", "Data Visualization"]
  },
  dataScience: {
  id: "datascience",
  title: "Data Science",
  subtitle: "Work on data-driven solutions and machine learning models",
  banner: any,
  about: "Work with large datasets to build predictive models and extract meaningful insights. You'll use statistical techniques and machine learning to solve real-world problems in the education domain.",
  responsibilities: [
    "Analyze large datasets to discover trends and patterns",
    "Build machine learning models for prediction and classification",
    "Clean and preprocess raw data for analysis",
    "Work with data visualization tools to present insights",
    "Collaborate with engineering teams to deploy models",
    "Perform exploratory data analysis (EDA)",
    "Document experiments and results"
  ],
  benefits: [
    { icon: <TimelineIcon />, title: "Flexible Work Hours", description: "Work when you're most productive" },
    { icon: <WorkIcon />, title: "Competitive Stipend", description: "Rewarding compensation package" },
    { icon: <SchoolIcon />, title: "Certificate of Completion", description: "Industry-recognized certification" },
    { icon: <CodeIcon />, title: "Opportunity for PPO", description: "Path to full-time employment" }
  ],
  testimonials: [
    {
      name: "Aman Verma",
      role: "Data Science Intern",
      content: "The internship gave me real experience working with datasets and machine learning models.",
      avatar: "AV"
    },
    {
      name: "Neha Singh",
      role: "Data Analyst",
      content: "I learned practical data analysis and visualization skills that helped me land my first job.",
      avatar: "NS"
    }
  ],
  requirements: [
    "Strong knowledge of Python programming",
    "Understanding of statistics and probability",
    "Experience with Pandas, NumPy, and Matplotlib",
    "Basic knowledge of machine learning algorithms",
    "Experience with data visualization tools",
    "Familiarity with SQL",
    "Analytical and problem-solving skills"
  ],
  techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "SQL", "Jupyter", "Statistics"]
},

cloud: {
  id: "cloud",
  title: "Cloud Computing",
  subtitle: "Build and manage scalable cloud infrastructure",
  banner: cloud,
  about: "Work on modern cloud platforms to deploy and manage scalable applications. You'll gain hands-on experience with cloud infrastructure, containerization, and CI/CD pipelines.",
  responsibilities: [
    "Deploy applications on cloud platforms (AWS/Azure/GCP)",
    "Manage cloud infrastructure and resources",
    "Work with containerization tools like Docker",
    "Set up CI/CD pipelines for automated deployment",
    "Monitor application performance in the cloud",
    "Ensure security and scalability of cloud systems",
    "Collaborate with development teams"
  ],
  benefits: [
    { icon: <TimelineIcon />, title: "Flexible Work Hours", description: "Work when you're most productive" },
    { icon: <WorkIcon />, title: "Competitive Stipend", description: "Rewarding compensation package" },
    { icon: <SchoolIcon />, title: "Certificate of Completion", description: "Industry-recognized certification" },
    { icon: <CodeIcon />, title: "Opportunity for PPO", description: "Path to full-time employment" }
  ],
  testimonials: [
    {
      name: "Rahul Sharma",
      role: "Cloud Intern",
      content: "This internship helped me understand real-world cloud infrastructure and DevOps practices.",
      avatar: "RS"
    },
    {
      name: "Priya Mehta",
      role: "DevOps Engineer",
      content: "I started as an intern and gained hands-on experience with AWS and Docker.",
      avatar: "PM"
    }
  ],
  requirements: [
    "Basic knowledge of cloud platforms (AWS/Azure/GCP)",
    "Understanding of Linux systems",
    "Experience with Docker or containerization",
    "Basic knowledge of networking concepts",
    "Understanding of CI/CD pipelines",
    "Familiarity with Git",
    "Problem-solving mindset"
  ],
  techStack: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Linux", "CI/CD", "Terraform"]
}
};

const InternshipDetails = () => {
  const { id } = useParams();
  const internship = internshipData[id];
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!internship) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Internship Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          The internship you're looking for doesn't exist or has been removed.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/Careers")}>
          Back to Internships
        </Button>
      </Container>
    );
  }

  return (
    <>
    <Box>
      {/* Banner */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "400px", md: "500px" },
          backgroundImage: `url(${internship.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          {/* Back Button */}
          <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start", mb: 2 }}>
            <Button 
              
              onClick={() => navigate("/Careers")}
              sx={{ textTransform: "none", fontWeight: 600,backgroundColor: "rgba(255,255,255,0.8)", "&:hover": { backgroundColor: "rgba(255,255,255,1)" } }}
            >
              ← Back
            </Button>
          </Box>

          {/* Title & Subtitle */}
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              color: "#fff", 
              fontWeight: 700,
              mb: 2,
              textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
              fontSize: { xs: "2.2rem", md: "3.75rem" }
            }}
          >
            {internship.title}
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: "#fff", 
              maxWidth: "800px", 
              mx: "auto",
              textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
              opacity: 0.95,
              mb: 4
            }}
          >
            {internship.subtitle}
          </Typography>

          {/* Apply Button on Banner */}
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            onClick={handleOpen}
            sx={{ 
              py: 1.5, 
              px: 6, 
              fontSize: "1.2rem",
              borderRadius: 2,
              boxShadow: 3,
              "&:hover": { transform: "scale(1.05)", boxShadow: 6 }
            }}
          >
            Apply Now
          </Button>
        </Container>
      </Box>

      {/* Content Container */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* About */}
        <Box mb={6}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            About This Role
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            {internship.about}
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Responsibilities */}
        <Box mb={6}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Responsibilities
          </Typography>
          <List>
            {internship.responsibilities.map((item, index) => (
              <ListItem key={index} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: "36px" }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Benefits */}
        <Box mb={6}>
  <Typography variant="h4" fontWeight={700} gutterBottom>
    Benefits
  </Typography>
  <Grid 
    container 
    spacing={3} 
    sx={{ mt: 1, justifyContent: { xs: "center", sm: "flex-start" } }}
  >
    {internship.benefits.map((benefit, index) => (
      <Grid 
        item 
        xs={12} 
        sm={6} 
        md={3} 
        key={index} 
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.2s",
            "&:hover": { transform: "translateY(-4px)", boxShadow: 3 },
            width: "100%",
            maxWidth: 300, // limits card width on mobile
          }}
        >
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56 }}>
                {benefit.icon}
              </Avatar>
            </Box>
            <Typography variant="h6" align="center" gutterBottom>
              {benefit.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {benefit.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>

        <Divider sx={{ my: 4 }} />

        {/* Testimonials */}
        

        <Divider sx={{ my: 4 }} />

        {/* Requirements */}
        <Box mb={6}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Requirements
          </Typography>
          <List>
            {internship.requirements.map((item, index) => (
              <ListItem key={index} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: "36px" }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Tech Stack */}
        <Box mb={0}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
          Required Skills
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
            {internship.techStack.map((tech, index) => (
              <Chip key={index} label={tech} color="primary" variant="outlined" sx={{ fontSize: "1rem",  px: 1 }} />
            ))}
          </Box>
        </Box>
      </Container>

      {/* Apply Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: { xs: "90%", md: 450 }, bgcolor: "background.paper", boxShadow: 24, p: 4, borderRadius: 2 }}>
          <Typography variant="h5" mb={1} fontWeight={600}>
            Apply for {internship.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            You'll be redirected to LinkedIn to complete your application
          </Typography>
          <Button variant="contained" color="primary" fullWidth size="large" component="a" href="https://www.linkedin.com/jobs/" target="_blank" sx={{ py: 1.5 }}>
            Continue to LinkedIn
          </Button>
          <Button variant="text" fullWidth onClick={handleClose} sx={{ mt: 1 }}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </Box>
    <Query/>
    </>
  );
};

export default InternshipDetails;