// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Chip,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Dialog,
//   IconButton,
//   Stack,
//   Divider,
// } from "@mui/material";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import CloseIcon from "@mui/icons-material/Close";
// import "./ProjectsGallery.css";

// const ProjectsGallery = () => {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [selectedProject, setSelectedProject] = useState(null);

//   // ✅ filters
//   const filters = [
//     { id: "all", label: "All" },
//     { id: "design", label: "AI Design" },
//     { id: "web", label: "Web Development" },
//     { id: "illustration", label: "Illustration" },
//     { id: "photography", label: "Photography" },
//   ];

//   // ✅ 2–2 projects per category
//   const projects = [
//     // DESIGN
//     {
//       id: 1,
//       title: "Virtual Integration Platform",
//       category: "design",
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
//       technologies: ["React", "Node.js", "TensorFlow"],
//       framework: "MERN Stack",
//       purpose: "AI-powered automation dashboard for enterprises",
//     },
//     {
//       id: 2,
//       title: "AI Analytics Dashboard",
//       category: "design",
//       image:
//         "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
//       technologies: ["React", "Python", "OpenAI"],
//       framework: "AI Stack",
//       purpose: "Predictive analytics platform",
//     },

//     // WEB
//     {
//       id: 3,
//       title: "Managed IT System",
//       category: "web",
//       image:
//         "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
//       technologies: ["Next.js", "AWS", "MongoDB"],
//       framework: "Next.js",
//       purpose: "Enterprise monitoring system",
//     },
//     {
//       id: 4,
//       title: "Enterprise Web Portal",
//       category: "web",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
//       technologies: ["React", "Firebase", "Node"],
//       framework: "MERN",
//       purpose: "Corporate service portal",
//     },

//     // ILLUSTRATION
//     {
//       id: 5,
//       title: "Creative Illustration Pack",
//       category: "illustration",
//       image:
//         "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800",
//       technologies: ["Figma", "Illustrator"],
//       framework: "Design System",
//       purpose: "Marketing illustration assets",
//     },
//     {
//       id: 6,
//       title: "Digital Art Collection",
//       category: "illustration",
//       image:
//         "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800",
//       technologies: ["Photoshop", "Procreate"],
//       framework: "Creative Suite",
//       purpose: "High-quality artwork series",
//     },

//     // PHOTOGRAPHY
//     {
//       id: 7,
//       title: "Cyber Security Suite",
//       category: "photography",
//       image:
//         "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
//       technologies: ["Python", "SIEM", "Azure"],
//       framework: "Microservices",
//       purpose: "Threat detection platform",
//     },
//     {
//       id: 8,
//       title: "Cloud Solutions Platform",
//       category: "photography",
//       image:
//         "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
//       technologies: ["Docker", "Kubernetes", "AWS"],
//       framework: "Cloud Native",
//       purpose: "Cloud infrastructure management",
//     },
//   ];

//   const filteredProjects =
//     activeFilter === "all"
//       ? projects
//       : projects.filter((p) => p.category === activeFilter);

//   return (
//     <Box className="pg-wrapper">
//       {/* ✅ Heading */}
//       <Typography variant="h4" className="pg-heading">
//         Delivered Projects
//       </Typography>

//       <Typography className="pg-sub">
//         Thousands of successful implementations across industries
//       </Typography>

//       {/* ✅ Filter chips */}
//       <Stack
//         direction="row"
//         spacing={2}
//         justifyContent="center"
//         flexWrap="wrap"
//         mb={5}
//       >
//         {filters.map((f) => (
//           <Chip
//             key={f.id}
//             label={f.label}
//             clickable
//             color={activeFilter === f.id ? "primary" : "default"}
//             onClick={() => setActiveFilter(f.id)}
//           />
//         ))}
//       </Stack>

//       {/* ✅ Cards */}
//       {/* ✅ Cards */}
// <Grid
//   container
//   spacing={3}
//   className="pg-grid"
//   justifyContent="center"
//   alignItems="stretch"
// >
//   {filteredProjects.map((project) => (
//     <Grid item xs={12} sm={6} md={3} key={project.id}>
//       <Card
//         className="pg-card"
//         onClick={() => setSelectedProject(project)}
//         elevation={0}
//       >
//         <CardMedia
//           component="img"
//           image={project.image}
//           alt={project.title}
//           className="pg-card-img"
//         />

//         <CardContent className="pg-card-body">
//           <Typography className="pg-card-title">
//             {project.title}
//           </Typography>

//           <IconButton className="pg-view-btn">
//             <VisibilityIcon />
//           </IconButton>
//         </CardContent>
//       </Card>
//     </Grid>
//   ))}
// </Grid>

//       {/* ✅ PREMIUM POPUP */}
//       <Dialog
//         open={Boolean(selectedProject)}
//         onClose={() => setSelectedProject(null)}
//         maxWidth="md"
//         fullWidth
//       >
//         {selectedProject && (
//           <Box className="pg-dialog">
//             <IconButton
//               className="pg-close"
//               onClick={() => setSelectedProject(null)}
//             >
//               <CloseIcon />
//             </IconButton>

//             <div className="pg-dialog-grid">
//               {/* LEFT */}
//               <div className="pg-dialog-left">
//                 <Typography variant="h6" fontWeight={700} mb={2}>
//                   Technologies Used
//                 </Typography>

//                 <div className="pg-tech">
//                   {selectedProject.technologies.map((t, i) => (
//                     <span key={i}>{t}</span>
//                   ))}
//                 </div>

//                 <Divider sx={{ my: 2 }} />

//                 <Typography fontWeight={700}>Framework</Typography>
//                 <Typography color="text.secondary" mb={2}>
//                   {selectedProject.framework}
//                 </Typography>

//                 <Typography fontWeight={700}>
//                   Project Purpose
//                 </Typography>
//                 <Typography color="text.secondary">
//                   {selectedProject.purpose}
//                 </Typography>
//               </div>

//               {/* RIGHT IMAGE */}
//               <div className="pg-dialog-right">
//                 <img
//                   src={selectedProject.image}
//                   alt={selectedProject.title}
//                 />
//               </div>
//             </div>
//           </Box>
//         )}
//       </Dialog>
//     </Box>
//   );
// };

// export default ProjectsGallery;




// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Chip,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Dialog,
//   IconButton,
//   Stack,
//   Divider,
// } from "@mui/material";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import CloseIcon from "@mui/icons-material/Close";
// import "./ProjectsGallery.css";

// const ProjectsGallery = () => {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [selectedProject, setSelectedProject] = useState(null);

//   const filters = [
//     { id: "all", label: "All" },
//     { id: "design", label: "AI Design" },
//     { id: "web", label: "Web Development" },
//     { id: "illustration", label: "Illustration" },
//     { id: "photography", label: "Photography" },
//   ];

//   const projects = [
//     {
//       id: 1,
//       title: "Virtual Integration Platform",
//       category: "design",
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
//       technologies: ["React", "Node.js", "TensorFlow"],
//       framework: "MERN Stack",
//       purpose: "AI-powered automation dashboard for enterprises",
//     },
//     {
//       id: 2,
//       title: "AI Analytics Dashboard",
//       category: "design",
//       image:
//         "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
//       technologies: ["React", "Python", "OpenAI"],
//       framework: "AI Stack",
//       purpose: "Predictive analytics platform",
//     },
//     {
//       id: 3,
//       title: "Managed IT System",
//       category: "web",
//       image:
//         "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
//       technologies: ["Next.js", "AWS", "MongoDB"],
//       framework: "Next.js",
//       purpose: "Enterprise monitoring system",
//     },
//     {
//       id: 4,
//       title: "Enterprise Web Portal",
//       category: "web",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
//       technologies: ["React", "Firebase", "Node"],
//       framework: "MERN",
//       purpose: "Corporate service portal",
//     },
//   ];

//   const filteredProjects =
//     activeFilter === "all"
//       ? projects
//       : projects.filter((p) => p.category === activeFilter);

//   return (
//     <Box className="pg-outer">
//       <Box className="pg-wrapper">
//         {/* Heading */}
//         <Typography variant="h4" className="pg-heading">
//           Delivered Projects
//         </Typography>

//         <Typography className="pg-sub">
//           Thousands of successful implementations across industries
//         </Typography>

//         {/* Filters */}
//         <Stack
//           direction="row"
//           spacing={2}
//           justifyContent="center"
//           flexWrap="wrap"
//           mb={5}
//         >
//           {filters.map((f) => (
//             <Chip
//               key={f.id}
//               label={f.label}
//               clickable
//               color={activeFilter === f.id ? "primary" : "default"}
//               onClick={() => setActiveFilter(f.id)}
//             />
//           ))}
//         </Stack>

//         {/* Cards */}
//         <Grid
//   container
//   spacing={3}
//   className="pg-grid"
//   justifyContent="center"
//   alignItems="stretch"
// >
//           {filteredProjects.map((project) => (
//             <Grid item xs={12} sm={6} md={3} key={project.id}>
//               <Card
//                 className="pg-card"
//                 onClick={() => setSelectedProject(project)}
//                 elevation={0}
//               >
//                 <CardMedia
//                   component="img"
//                   image={project.image}
//                   alt={project.title}
//                   className="pg-card-img"
//                 />

//                 <CardContent className="pg-card-body">
//                   <Typography className="pg-card-title">
//                     {project.title}
//                   </Typography>

//                   <IconButton className="pg-view-btn">
//                     <VisibilityIcon />
//                   </IconButton>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* Popup */}
//       <Dialog
//         open={Boolean(selectedProject)}
//         onClose={() => setSelectedProject(null)}
//         maxWidth="md"
//         fullWidth
//       >
//         {selectedProject && (
//           <Box className="pg-dialog">
//             <IconButton
//               className="pg-close"
//               onClick={() => setSelectedProject(null)}
//             >
//               <CloseIcon />
//             </IconButton>

//             <div className="pg-dialog-grid">
//               {/* LEFT */}
//               <div className="pg-dialog-left">
//                 <Typography variant="h6" fontWeight={700} mb={2}>
//                   Technologies Used
//                 </Typography>

//                 <div className="pg-tech">
//                   {selectedProject.technologies.map((t, i) => (
//                     <span key={i}>{t}</span>
//                   ))}
//                 </div>

//                 <Divider sx={{ my: 2 }} />

//                 <Typography fontWeight={700}>Framework</Typography>
//                 <Typography color="text.secondary" mb={2}>
//                   {selectedProject.framework}
//                 </Typography>

//                 <Typography fontWeight={700}>
//                   Project Purpose
//                 </Typography>
//                 <Typography color="text.secondary">
//                   {selectedProject.purpose}
//                 </Typography>
//               </div>

//               {/* RIGHT */}
//               <div className="pg-dialog-right">
//                 <img
//                   src={selectedProject.image}
//                   alt={selectedProject.title}
//                 />
//               </div>
//             </div>
//           </Box>
//         )}
//       </Dialog>
//     </Box>
//   );
// };

// export default ProjectsGallery;




import React, { useState } from "react";
import image from "../../assets/images/R.png";
import image1 from "../../assets/images/r1.jpg";
import {
  Box,
  Typography,
  Chip,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import "./ProjectsGallery.css";

const ProjectsGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Application" },
    { id: "photography", label: "Photography" },
  ];

  const projects = [
    // Web Development Projects
    {
      id: 1,
      title: "Enterprise Web Portal",
      category: "web",
      image: image,
      technologies: ["React", "Node.js", "Firebase"],
      framework: "MERN",
      purpose: "Corporate service portal for internal teams",
    },
    {
      id: 2,
      title: "Managed IT System",
      category: "web",
      image: image1 ,
      technologies: ["Next.js", "AWS", "MongoDB"],
      framework: "Next.js",
      purpose: "Enterprise system for monitoring and management",
    },

    // Mobile Application Projects
    {
      id: 3,
      title: "Food Delivery App",
      category: "mobile",
      image: image,
      technologies: ["React Native", "Firebase", "Redux"],
      framework: "React Native",
      purpose: "Mobile app for food ordering and delivery tracking",
    },
    {
      id: 4,
      title: "Fitness Tracker",
      category: "mobile",
      image: image1,
      technologies: ["Flutter", "Dart", "SQLite"],
      framework: "Flutter",
      purpose: "Track workouts, steps, and calories for users",
    },

    // Photography Projects
    {
      id: 5,
      title: "Nature Photography Portfolio",
      category: "photography",
      image: image1,
      technologies: ["Adobe Lightroom", "Photoshop"],
      framework: "Photography",
      purpose: "High-quality landscape and wildlife photography portfolio",
    },
    {
      id: 6,
      title: "Event Photography",
      category: "photography",
      image: image,
      technologies: ["Canon DSLR", "Photoshop"],
      framework: "Photography",
      purpose: "Capture and edit corporate and private event photos",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <Box className="pg-outer">
      <Box className="pg-wrapper">
        {/* Heading */}
        <Typography variant="h4" className="pg-heading">
          Delivered  <span style={{color:"#1d918b"}}>Projects</span>
        </Typography>

        <Typography className="pg-sub">
          Showcasing our best work across Web, Mobile, and Photography
        </Typography>

        {/* Filters */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          flexWrap="wrap"
          mb={5}
        >
          {filters.map((f) => (
            <Chip
              key={f.id}
              label={f.label}
              clickable
              color={activeFilter === f.id ? "primary" : "default"}
              onClick={() => setActiveFilter(f.id)}
            />
          ))}
        </Stack>

        {/* Cards */}
        <Grid container spacing={3} className="pg-grid" justifyContent="center">
          {filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={3} key={project.id}>
              <Card
                className="pg-card"
                onClick={() => setSelectedProject(project)}
                elevation={0}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  className="pg-card-img"
                />

                <CardContent className="pg-card-body">
                  <Typography className="pg-card-title">
                    {project.title}
                  </Typography>

                  <IconButton className="pg-view-btn">
                    <VisibilityIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Popup */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        maxWidth="md"
        fullWidth
      >
        {selectedProject && (
          <Box className="pg-dialog">
            <IconButton
              className="pg-close"
              onClick={() => setSelectedProject(null)}
            >
              <CloseIcon />
            </IconButton>

            <div className="pg-dialog-grid">
              {/* LEFT */}
              <div className="pg-dialog-left">
                <Typography variant="h6" fontWeight={700} mb={2}>
                  Technologies Used
                </Typography>

                <div className="pg-tech">
                  {selectedProject.technologies.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>

                <Divider sx={{ my: 2 }} />

                <Typography fontWeight={700}>Framework</Typography>
                <Typography color="text.secondary" mb={2}>
                  {selectedProject.framework}
                </Typography>

                <Typography fontWeight={700}>Project Purpose</Typography>
                <Typography color="text.secondary">
                  {selectedProject.purpose}
                </Typography>
              </div>

              {/* RIGHT */}
              <div className="pg-dialog-right">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: "100%", borderRadius: 8 }}
                />
              </div>
            </div>
          </Box>
        )}
      </Dialog>
    </Box>
  );
};

export default ProjectsGallery;