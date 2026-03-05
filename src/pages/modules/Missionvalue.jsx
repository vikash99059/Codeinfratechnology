import React, { useEffect, useRef, useState } from "react";
import missionImg from "../../assets/images/pngmission.png";

const MissionVision = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mv-unique-section"
      style={{
        padding: "20px 20px",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      <div className="mv-unique-container" style={styles.container}>
        {/* LEFT SIDE */}
        <div
          className="mv-unique-left"
          style={{
            ...styles.left,
            ...(visible ? styles.leftShow : styles.leftHide),
          }}
        >
          <div className="mv-unique-card" style={styles.card}>
            <h2 className="mv-unique-heading" style={styles.heading}>
              🎯 OUR MISSION
            </h2>
            <p className="mv-unique-text" style={styles.text}>
              To engineer reliable, scalable, and intelligent digital
              foundations that empower businesses to innovate and lead in an
              increasingly connected world.
            </p>
          </div>

          <div className="mv-unique-card" style={styles.card}>
            <h2 className="mv-unique-heading" style={styles.heading}>
              🔭 OUR VISION
            </h2>
            <p className="mv-unique-text" style={styles.text}>
              To be recognized as a trusted global technology partner
              delivering resilient infrastructure and high-impact digital
              solutions for forward-looking enterprises.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="mv-unique-right"
          style={{
            ...styles.right,
            ...(visible ? styles.rightShow : styles.rightHide),
          }}
        >
          <img
            className="mv-unique-image"
            src={missionImg}
            alt="Mission Vision"
            style={styles.image}
          />
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 900px) {
          .mv-unique-container {
            flex-direction: column;
          }
          .mv-unique-right {
            justify-content: center !important;
            margin-top: 30px;
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: "40px",
  },

  left: {
    flex: "1 1 390px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px",
    transition: "all 0.8s ease",
  },

  right: {
    flex: "1 1 390px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "stretch",
    transition: "all 1s ease",
  },

  leftHide: {
    opacity: 0,
    transform: "translateY(60px)",
  },

  rightHide: {
    opacity: 0,
    transform: "scale(0.9)",
  },

  leftShow: {
    opacity: 1,
    transform: "translateY(0)",
  },

  rightShow: {
    opacity: 1,
    transform: "scale(1)",
  },

  card: {
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    padding: "24px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    background: "#fff",
  },

  heading: {
    margin: "0 0 10px 0",
    fontSize: "22px",
    fontWeight: "700",
    color: "#111827",
  },

  text: {
    margin: 0,
    color: "#4b5563",
    lineHeight: 1.7,
    fontSize: "15px",
  },

  image: {
    width: "100%",
    height: "100%",
    maxHeight: "390px",
    borderRadius: "16px",
    objectFit: "cover",
    transition: "transform 1s ease",
  },
};

export default MissionVision;