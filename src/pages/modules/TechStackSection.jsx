import React from "react";
import "./TechStackSection.css";

import { FaReact, FaNodeJs, FaAws, FaFigma } from "react-icons/fa";
import { SiMongodb, SiEthereum, SiKubernetes, SiAndroid } from "react-icons/si";

import bgImage from "../../assets/images/whitebackground.jpg";

const techData = [
  {
    title: "Frontend",
    items: "React, Next.js, TypeScript",
    icon: <FaReact color="#61DAFB" size={28} />,
  },
  {
    title: "Backend",
    items: "Node.js, Python, Microservices",
    icon: <FaNodeJs color="#68A063" size={28} />,
  },
  {
    title: "Database",
    items: "MongoDB, PostgreSQL, Redis",
    icon: <SiMongodb color="#47A248" size={28} />,
  },
  {
    title: "Mobile",
    items: "iOS (Swift), Android (Kotlin), React Native",
    icon: <SiAndroid color="#3DDC84" size={28} />,
  },
  {
    title: "Cloud Infrastructure",
    items: "AWS, Azure, Kubernetes",
    icon: <FaAws color="#FF9900" size={28} />,
  },
  {
    title: "Web3 & Blockchain",
    items: "Smart Contracts, NFTs, DeFi",
    icon: <SiEthereum color="#627EEA" size={28} />,
  },
  {
    title: "Design",
    items: "Figma, Canva, Adobe XD",
    icon: <FaFigma color="#F24E1E" size={28} />,
  },
  {
    title: "Blockchain Platforms",
    items: "Ethereum, Polygon, Solana",
    icon: <SiKubernetes color="#326CE5" size={28} />,
  },
];

const TechStackSection = () => {
  return (
    <section
      className="tech-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="tech-container">
        {/* Heading */}
        <div className="tech-header">
          <h2>
  Our Tech <span style={{ color: "#198c85e" }}>Stack</span>
</h2>
          <p>
            Code Infra Technology — Technologies we work with across
            development, design, and deployment
          </p>
        </div>

        {/* Grid */}
        <div className="tech-grid">
          {techData.map((tech, index) => (
            <div className="tech-card" key={index}>
              <div className="tech-icon">{tech.icon}</div>
              <h3>{tech.title}</h3>
              <p>{tech.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;