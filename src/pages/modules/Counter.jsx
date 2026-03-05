import React, { useEffect, useRef, useState } from "react";

const statsData = [
  { id: 1, number: 90, label: "Project Complete" },
  { id: 2, number: 216, label: "Satisfied Clients" },
  { id: 3, number: 35, label: "Experienced Staffs" },
  { id: 4, number: 10, label: "International Awards" },
];

// ✅ Counter Hook
const useCounter = (end, startCounting, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const incrementTime = 20;
    const step = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration, startCounting]);

  return count;
};

// ✅ Counter Item
function CounterItem({ number, label, start }) {
  const count = useCounter(number, start);

  return (
    <div className={`counter-box ${start ? "show" : ""}`}>
      <h2 className="counter-number">{count}</h2>
      <p className="counter-label">{label}</p>
    </div>
  );
}

export default function CounterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Check viewport visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Hover handler (ONLY when visible)
  const handleMouseEnter = () => {
    if (isVisible) {
      setStartCount(true);
    }
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="counter-section"
        onMouseEnter={handleMouseEnter}
      >
        <div className="counter-container">
          {statsData.map((item) => (
            <CounterItem
              key={item.id}
              number={item.number}
              label={item.label}
              start={startCount}
            />
          ))}
        </div>
      </section>

      {/* ✅ INTERNAL CSS */}
      <style>{`
        .counter-section {
          width: 100%;
          // padding: 70px 20px;
          margin-bottom:30px;
           background: linear-gradient(135deg, #2d4a78, #15807c);
          position: relative;
          overflow: hidden;
        }

        .counter-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          text-align: center;
        }

        .counter-box {
          color: #fff;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.7s ease;
        }

        .counter-box.show {
          opacity: 1;
          transform: translateY(0);
        }

        .counter-number {
          font-size: 48px;
          font-weight: 800;
          color: #2dd4bf;
          margin-bottom: 8px;
        }

        .counter-label {
          font-size: 14px;
          color: #e6e6e6;
        }

        /* ✅ Tablet */
        @media (max-width: 992px) {
          .counter-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .counter-number {
            font-size: 40px;
          }
        }

        /* ✅ Mobile */
        @media (max-width: 576px) {
          .counter-container {
            grid-template-columns: 1fr;
          }

          .counter-number {
            font-size: 34px;
          }

          .counter-section {
            padding: 50px 15px;
          }
        }
      `}</style>
    </>
  );
}