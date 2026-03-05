// import React from "react";
// import { Search, Layout, Code, Rocket, Repeat } from "lucide-react";

// const deliverySteps = [
//   {
//     title: "Discover & Assess",
//     description:
//       "Comprehensive analysis of business goals, systems, and constraints.",
//     icon: <Search size={28} className="text-blue-600" />,
//   },
//   {
//     title: "Architect & Design",
//     description: "Scalable, secure, and future-ready solution blueprints.",
//     icon: <Layout size={28} className="text-blue-600" />,
//   },
//   {
//     title: "Build & Integrate",
//     description: "Agile engineering with rigorous quality controls.",
//     icon: <Code size={28} className="text-blue-600" />,
//   },
//   {
//     title: "Deploy & Optimize",
//     description: "Production-ready releases with performance tuning.",
//     icon: <Rocket size={28} className="text-blue-600" />,
//   },
//   {
//     title: "Operate & Evolve",
//     description: "Continuous monitoring, support, and scalability planning.",
//     icon: <Repeat size={28} className="text-blue-600" />,
//   },
// ];

// export default function DeliveryCards() {
//   return (
//     <div className="delivery-wrapper">
//       <h2 className="delivery-title">
//         Our Delivery <span style={{ color: "white" }}>Framework</span>
//       </h2>

//       <div className="delivery-grid">
//         {deliverySteps.map((step, idx) => (
//           <div key={idx} className="delivery-card">
//             <div className="delivery-icon">{step.icon}</div>
//             <div className="delivery-content">
//               <h3>{step.title}</h3>
//               <p>{step.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         .delivery-wrapper {
//   padding: 3rem 2rem;
//   background: linear-gradient(135deg, #2d4a78, #15807c);
//   font-family: system-ui, -apple-system, sans-serif;
//   width: 100%;
//   overflow-x: hidden;
// }

//         .delivery-title {
//   font-size: 2rem;
//   font-weight: 700;
//   color: #fff;
//   text-align: center;
//   position: relative;
  
//   margin: 0 auto 2rem auto;
// }

// .delivery-title::after {
//   content: "";
//   position: absolute;
//   left: 50%;              /* start from center */
//   bottom: -8px;           /* distance from text */
//   transform: translateX(-50%); /* center horizontally */
//   width: 150px;            /* line length */
//   height: 4px;            /* thickness */
//     background: linear-gradient(135deg, #2d4a78, #15807c);
//   border-radius: 2px;
// }
//         .delivery-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 1.5rem;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .delivery-card {
//           background: white;
//           border-radius: 12px;
//           overflow: hidden;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//           transition: all 0.3s ease;
//           border: 1px solid #e5e7eb;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           padding: 2rem 1rem;
//           text-align: center;
//         }

//         .delivery-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
//           border-color: #3b82f6;
//         }

//         .delivery-icon {
//           background: #e0f2fe;
//           width: 64px;
//           height: 64px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 1rem;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }

//         .delivery-content h3 {
//           font-size: 1.2rem;
//           font-weight: 600;
//           margin-bottom: 0.5rem;
//           color: #111827;
//           line-height: 1.4;
//         }

//         .delivery-content p {
//           font-size: 0.95rem;
//           color: #6b7280;
//           line-height: 1.5;
//           margin: 0;
//         }

//         /* Tablet */
//         @media (max-width: 1024px) {
//           .delivery-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         /* Mobile Landscape */
//         @media (max-width: 768px) {
//           .delivery-grid {
//             grid-template-columns: 1fr;
//           }
//         }

//         /* Small Mobile */
//         @media (max-width: 480px) {
//           .delivery-card {
//             padding: 1.5rem 1rem;
//           }

//           .delivery-icon {
//             width: 56px;
//             height: 56px;
//           }

//           .delivery-content h3 {
//             font-size: 1.1rem;
//           }

//           .delivery-content p {
//             font-size: 0.9rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


import React from "react";
import { Search, Layout, Code, Rocket, Repeat } from "lucide-react";

// import background image
import deliveryBg from "../../assets/images/tecno.jpg"; // <-- yaha apni image path dena

const deliverySteps = [
  {
    title: "Discover & Assess",
    description:
      "Comprehensive analysis of business goals, systems, and constraints.",
    icon: <Search size={28} className="text-blue-600" />,
  },
  {
    title: "Architect & Design",
    description: "Scalable, secure, and future-ready solution blueprints.",
    icon: <Layout size={28} className="text-blue-600" />,
  },
  {
    title: "Build & Integrate",
    description: "Agile engineering with rigorous quality controls.",
    icon: <Code size={28} className="text-blue-600" />,
  },
  {
    title: "Deploy & Optimize",
    description: "Production-ready releases with performance tuning.",
    icon: <Rocket size={28} className="text-blue-600" />,
  },
  {
    title: "Operate & Evolve",
    description: "Continuous monitoring, support, and scalability planning.",
    icon: <Repeat size={28} className="text-blue-600" />,
  },
  {
    title: "Support & Maintain",
    description: "Proactive support, regular updates, and ongoing optimization for long-term success.",
    icon: <Layout size={28} className="text-green-600" />, // different color to highlight
  },
];

export default function DeliveryCards() {
  return (
    <div
      className="delivery-wrapper"
      style={{
        backgroundImage: `url(${deliveryBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="delivery-overlay">
        <h2 className="delivery-title">
          Our Delivery <span style={{ color: "white" }}>Framework</span>
        </h2>

        <div className="delivery-grid">
          {deliverySteps.map((step, idx) => (
            <div key={idx} className="delivery-card">
              <div className="delivery-icon">{step.icon}</div>
              <div className="delivery-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .delivery-overlay {
          background: rgba(0, 0, 0, 0.55); /* dark overlay for readability */
          padding: 3rem 1rem;
        }

        .delivery-title {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          text-align: center;
          position: relative;
          margin: 0 auto 2rem auto;
        }

        .delivery-title::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -8px;
          transform: translateX(-50%);
          width: 150px;
          height: 4px;
          background: linear-gradient(135deg, #2d4a78, #15807c);
          border-radius: 2px;
        }

        .delivery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .delivery-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem;
          text-align: center;
        }

        .delivery-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          border-color: #3b82f6;
        }

        .delivery-icon {
          background: #e0f2fe;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .delivery-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #111827;
          line-height: 1.4;
        }

        .delivery-content p {
          font-size: 0.95rem;
          color: #6b7280;
          line-height: 1.5;
          margin: 0;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .delivery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile Landscape */
        @media (max-width: 768px) {
          .delivery-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .delivery-card {
            padding: 1.5rem 1rem;
          }

          .delivery-icon {
            width: 56px;
            height: 56px;
          }

          .delivery-content h3 {
            font-size: 1.1rem;
          }

          .delivery-content p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
