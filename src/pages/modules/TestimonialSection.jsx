import React from "react";
import waveBg from "../../assets/images/whitebackground.jpg"; // ✅ apne path ke hisaab se change karo

const testimonials = [
  {
    id: 1,
    name: "Henrietta Mcguire",
    role: "Designer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt enim minim quis nostrud exercitation ullamco laboris nisi aliquip.",
  },
  {
    id: 2,
    name: "Stephen Patrick",
    role: "Designer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt enim minim quis nostrud exercitation ullamco laboris nisi aliquip.",
  },
  {
    id: 3,
    name: "Olivia Watson",
    role: "Designer",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt enim minim quis nostrud exercitation ullamco laboris nisi aliquip.",
  },
  {
    id: 4,
    name: "Daniel Craig",
    role: "Designer",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt enim minim quis nostrud exercitation ullamco laboris nisi aliquip.",
  },
  {
    id: 5,
    name: "Sophia Lee",
    role: "Designer",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt enim minim quis nostrud exercitation ullamco laboris nisi aliquip.",
  },
  {
    id: 6,
    name: "Michael Brown",
    role: "Designer",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt enim minim quis nostrud exercitation ullamco laboris nisi aliquip.",
  },
];

export default function TestimonialSection() {
  return (
    <>
      <section
        className="testimonial-section"
        style={{
          backgroundImage: `url(${waveBg})`,
        }}
      >
        <div className="testimonial-container">
          <h2 className="testimonial-title">
            See what our customers
            <br />
            <span>are saying...</span>
          </h2>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <div key={item.id} className="testimonial-card">
                <div className="testimonial-header">
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>

                <p className="testimonial-text">{item.text}</p>
                <div className="stars">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL CSS */}
      <style>{`
        .testimonial-section {
          width: 100%;
          padding: 80px 20px;
          background-color: #f7f7f7;
          background-repeat: no-repeat;
          background-position: bottom;
          background-attachment: fixed;
          background-size: cover;
        }

        .testimonial-container {
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .testimonial-title {
          font-size: 32px;
          font-weight: 700;
          color: #333;
          margin-bottom: 50px;
        }

        .testimonial-title span {
          color: #2aa198;
          border-bottom: 3px solid #2aa198;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .testimonial-card {
          background: #fff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          text-align: left;
          transition: 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-6px);
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .testimonial-header img {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          object-fit: cover;
        }

        .testimonial-header h4 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }

        .testimonial-header p {
          margin: 0;
          font-size: 13px;
          color: #777;
        }

        .testimonial-text {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .stars {
          color: #ffc107;
          font-size: 16px;
        }

        @media (max-width: 992px) {
          .testimonial-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .testimonial-title {
            font-size: 24px;
          }

          .testimonial-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-section {
            padding: 60px 15px;
            background-attachment: scroll;
          }
        }
      `}</style>
    </>
  );
}