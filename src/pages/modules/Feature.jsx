// import React from "react";
// import { motion } from "framer-motion";
// import "./Feature.css";

// import hrImg from "../../assets/images/manit2.png";
// import attendanceImg from "../../assets/images/manit2.png";
// import payrollImg from "../../assets/images/manit2.png";

// const sections = [
//   {
//     title: "HR MANAGEMENT SIMPLIFIED",
//     desc: `Adapt to new realities, work faster and smarter. Determine a defined future of work for your organization with a strong, flexible, global HR solution.`,
//     points: [
//       "Easy access to documents and information",
//       "An employee database that scales",
//       "Smart HR workflows",
//       "Automation of HR processes",
//     ],
//     img: hrImg,
//   },
//   {
//     title: "TIME AND ATTENDANCE",
//     desc: `Unlock higher productivity through our advanced time and attendance system and create a seamless onboarding experience that accelerates employee success.`,
//     points: [
//       "Enhanced employee accountability",
//       "Accurate payroll processing",
//       "Flexible attendance recording",
//       "Transparent attendance policies",
//     ],
//     img: attendanceImg,
//   },
//   {
//     title: "PAYROLL MANAGEMENT",
//     desc: `Simplify complex payroll operations with a secure, automated and fully compliant payroll management system ensuring accurate and timely payouts.`,
//     points: [
//       "Accurate payroll calculations & deductions",
//       "Generate compliant payslips",
//       "Plan future payroll costs",
//       "Secure data & privacy protection",
//     ],
//     img: payrollImg,
//   },
// ];

// const HRPlatformSection = () => {
//   return (
//     <section className="hrps-wrapper">
//       {/* Heading */}


//       {/* Sections */}
//       {sections.map((item, index) => (
//         <motion.div
//           key={index}
//           className={`hrps-section ${
//             index % 2 !== 0 ? "reverse" : ""
//           }`}
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           {/* Content */}
//           <div className="hrps-content">
//             <h3>{item.title}</h3>
//             <p className="hrps-desc">{item.desc}</p>

//             <ul className="hrps-list">
//               {item.points.map((point, i) => (
//                 <li key={i}>{point}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Image */}
//           <div className="hrps-image">
//             <img src={item.img} alt={item.title} />
//           </div>
//         </motion.div>
//       ))}
//     </section>
//   );
// };

// export default HRPlatformSection;



import React from "react";
import { motion } from "framer-motion";
import "./Feature.css";

import softwareImg from "../../assets/images/customized.png";
import cloudImg from "../../assets/images/cloude.png";
import digitalImg from "../../assets/images/digiral.png";

const sections = [
  {
    title: "CUSTOM SOFTWARE ENGINEERING",
    desc: `We architect and develop bespoke software platforms tailored to your operational and strategic requirements.`,
    points: [
      "Enterprise Web Applications",
      "Mobile Application Development (iOS & Android)",
      "SaaS Platform Engineering",
      "API Design & Systems Integration",
      "UI/UX Architecture",
      "Product Modernization",
    ],
    impact:
      "Accelerated innovation, improved user experience, and scalable application ecosystems.",
    img: softwareImg,
  },
  {
    title: "CLOUD & INFRASTRUCTURE ENGINEERING",
    desc: `We design resilient, cloud-native infrastructures that ensure availability, performance, and cost efficiency.`,
    points: [
      "Cloud Strategy & Architecture (AWS, Azure, GCP)",
      "DevOps & CI/CD Implementation",
      "Containerization & Kubernetes Orchestration",
      "Infrastructure Automation",
      "System Monitoring & Reliability Engineering",
      "Security Hardening & Compliance",
    ],
    impact:
      "High availability, optimized costs, and enterprise-grade reliability.",
    img: cloudImg,
  },
  {
    title: "DIGITAL TRANSFORMATION & CONSULTING",
    desc: `We help organizations transition from legacy environments to modern digital-first operations.`,
    points: [
      "Technology Advisory",
      "Legacy System Modernization",
      "Process Automation",
      "Enterprise Integration",
      "Digital Roadmapping",
      "Operational Optimization",
    ],
    impact:
      "Faster time-to-market, improved efficiency, and future-ready operations.",
    img: digitalImg,
  },
];

const HRPlatformSection = () => {
  return (
    <section className="hrps-wrapper">
      <div className="hrps-container">
        {/* Main Heading */}
        <div className="hrps-main-heading">
          <h2>
            OUR CORE <span style={{ color: "#1b8985" }}>SERVICES</span>
          </h2>

          <div
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "green",
              margin: "10px auto",
              borderRadius: "2px",
            }}
          ></div>
        </div>


        {/* Sections */}
        {sections.map((item, index) => (
          <motion.div
            key={index}
            className={`hrps-section ${index % 2 !== 0 ? "reverse" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Content */}
            <div className="hrps-content">
              <h3>{item.title}</h3>
              <p className="hrps-desc">{item.desc}</p>

              <ul className="hrps-list">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <p className="hrps-impact">
                <strong>Business impact:</strong> {item.impact}
              </p>
            </div>

            {/* Image */}
            <div className="hrps-image">
              <img src={item.img} alt={item.title} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HRPlatformSection;