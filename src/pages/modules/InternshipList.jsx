import React from "react";
import { useNavigate } from "react-router-dom";
import "./InternshipList.css"; // Create this CSS file

const internships = [
  {
    id: "java",
    title: "Java Developer",
    description: "Build scalable backend services using Java and Spring Boot.",
  },
  {
    id: "python",
    title: "Python Developer",
    description: "Work on backend systems, data processing, and automation tools.",
  },
  {
    id: "web",
    title: "Web Development",
    description: "Develop responsive web applications using React and JS.",
  },
  {
    id: "database",
    title: "Database Developer",
    description: "Design and optimize database systems for analytics.",
  },
  {
    id: "ai",
    title: "AI/ML Developer",
    description: "Develop machine learning algorithms and recommendation systems.",
  },
  {
    id: "data",
    title: "Data Analytics",
    description: "Analyze data and generate insights for business decisions.",
  },
  {
    id: "datascience",
    title: "Data Science",
    description: "Apply statistical analysis, machine learning, and data visualization to solve complex problems.",
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    description: "Design and deploy scalable applications on AWS, Azure, or Google Cloud platforms.",
  }
];

const InternshipList = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/InternshipDetails/${id}`);
  };

  return (
    <div className="internship-container">
      <div className="header-section">
       <h1 className="main-title">
  Launch Your Career with the <span style={{ color: "#1b8e87" }}>Perfect Internship</span>
</h1>
<p className="subtitle">
  Discover exciting opportunities, gain real-world experience, and unlock your potential. Your dream internship awaits!
</p>
      </div>

      <div className="internship-grid">
        {internships.map((internship) => (
          <div className="internship-card" key={internship.id}>
            <div className="card-content">
              <h3 className="card-title">{internship.title}</h3>
              <p className="card-description">{internship.description}</p>
            </div>
            <button 
              className="details-button"
              onClick={() => handleViewDetails(internship.id)}
            >
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipList;