// import React from "react";
// import Slider from "react-slick";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Avatar,
//   Container
// } from "@mui/material";

// import girlIcon from "../../assets/images/girlicon.png";
// import boyIcon from "../../assets/images/girlicon.png";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const testimonials = [
//   {
//     name: "Riya Sharma",
//     designation: "Java Intern",
//     description:
//       "This internship helped me improve my coding skills and gave me real industry experience.",
//     image: girlIcon
//   },
//   {
//     name: "Rahul Verma",
//     designation: "React Intern",
//     description:
//       "Amazing mentors and real projects. I learned React and built production level apps.",
//     image: boyIcon
//   },
//   {
//     name: "Priya Patel",
//     designation: "Python Intern",
//     description:
//       "Great environment for learning. I gained confidence working on real development tasks.",
//     image: girlIcon
//   },
//   {
//     name: "Aman Singh",
//     designation: "Full Stack Intern",
//     description:
//       "The internship experience was incredible. I improved both frontend and backend skills.",
//     image: boyIcon
//   }
// ];

// const TestimonialSection = () => {

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 3000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 }
//       },
//       {
//         breakpoint: 600,
//         settings: { slidesToShow: 1 }
//       }
//     ]
//   };

//   return (
//     <Box sx={{ py: 8, background: "#f8f9fb" }}>
//       <Container>

//         {/* Heading */}
//         <Typography
//           variant="h4"
//           align="center"
//           fontWeight="bold"
//           mb={5}
//         >
//           Why Interns Say About Us
//         </Typography>

//         <Slider {...settings}>
//           {testimonials.map((item, index) => (
//             <Box key={index} px={2}>
//               <Card
//                 sx={{
//                   p: 2,
//                   borderRadius: 3,
//                   height: "100%",
//                   boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
//                 }}
//               >
//                 <CardContent>

//                   {/* Avatar + Name */}
//                   <Box
//                     display="flex"
//                     alignItems="center"
//                     mb={2}
//                   >
//                     <Avatar
//                       src={item.image}
//                       sx={{
//                         width: 50,
//                         height: 50,
//                         mr: 2
//                       }}
//                     />

//                     <Box>
//                       <Typography fontWeight="bold">
//                         {item.name}
//                       </Typography>

//                       <Typography
//                         variant="body2"
//                         color="description.secondary"
//                       >
//                         {item.designation}
//                       </Typography>
//                     </Box>
//                   </Box>

//                   {/* Description */}
//                   <Typography
//                     variant="body2"
//                     color="description.secondary"
//                   >
//                     {item.description}
//                   </Typography>

//                 </CardContent>
//               </Card>
//             </Box>
//           ))}
//         </Slider>

//       </Container>
//     </Box>
//   );
// };

// export default TestimonialSection;




import React, { useEffect, useRef, useState } from "react";
import girlIcon from "../../assets/images/girlicon.png";
import boyIcon from "../../assets/images/girlicon.png";


const testimonials = [
  {
    name: "Riya Sharma",
    designation: "Java Intern",
    description:
      "This internship helped me improve my coding skills and gave me real industry experience.",
    image: girlIcon
  },
  {
    name: "Rahul Verma",
    designation: "React Intern",
    description:
      "Amazing mentors and real projects. I learned React and built production level apps.",
    image: boyIcon
  },
  {
    name: "Priya Patel",
    designation: "Python Intern",
    description:
      "Great environment for learning. I gained confidence working on real development tasks.",
    image: girlIcon
  },
  {
    name: "Aman Singh",
    designation: "Full Stack Intern",
    description:
      "The internship experience was incredible. I improved both frontend and backend skills.",
    image: boyIcon
  }
];

const WallOfLove = () => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const items = [...testimonials, ...testimonials]; // infinite

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.children[0];
    const gap = 24;
    const step = card.offsetWidth + gap;

    track.style.transition = "transform 0.6s ease";
    track.style.transform = `translateX(-${index * step}px)`;

    if (index === testimonials.length) {
      setTimeout(() => {
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
        setIndex(0);
      }, 600);
    }
  }, [index]);

  return (
    <>
      <style>{`
        .wol-wrap {
          max-width: 1200px;
          margin: auto;
          padding: 60px 20px;
          font-family: Inter, sans-serif;
          description-align: center;
        }

        .wol-title {
          font-size: 2.2rem;
          font-weight: 800; 
          text-align: center;
          color: #0f172a;
        }

        .wol-subtitle {
          margin-top: 10px;
          color: #6b7280;
        }

        .wol-slider {
          overflow: hidden;
          margin-top: 50px;
        }

        .wol-track {
          display: flex;
          gap: 24px;
        }

        .wol-card {
          flex: 0 0 calc(25% - 18px);
          
          border-radius: 10px;
          border: 1px solid #1a8984;
          padding: 28px;
          description-align: left;
         
        }

        .wol-user {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .wol-user img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        .wol-user h4 {
          margin: 0;
          font-size: 1rem;
          font-weight: 700;
        }

        .wol-user span {
          font-size: 0.85rem;
          color: #6b7280;
        }

        .wol-description {
          margin: 18px 0;
          font-size: 0.95rem;
          color: #374151;
          line-height: 1.6;
        }

        .wol-stars {
          color: #f97316;
          font-size: 1.1rem;
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .wol-card {
            flex: 0 0 calc(50% - 12px);
          }
            .wol-wrap {
          width: 80vw;
          margin: auto;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .wol-card {
            flex: 0 0 100%;
            width: 80vw;
          }
            .wol-wrap {
          width: 80vw;
          margin: auto;
        
        }
        }
      `}</style>

      <section className="wol-wrap">
        <h2 className="wol-title">Why Interns <span style={{color:"#1a8984"}}>Say About Us</span> </h2>
        

        <div className="wol-slider">
          <div className="wol-track" ref={trackRef}>
            {items.map((item, i) => (
              <div className="wol-card" key={i}>
                <div className="wol-user">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.designation}</span>
                  </div>
                </div>
                <p className="wol-description">{item.description}</p>
                <div className="wol-stars">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WallOfLove;