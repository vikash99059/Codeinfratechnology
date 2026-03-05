import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./ExpertsSection.css";

import team1 from "../../assets/images/team.jpg";
import team2 from "../../assets/images/team.jpg";
import team3 from "../../assets/images/team.jpg";
import team4 from "../../assets/images/team.jpg";
import team5 from "../../assets/images/team.jpg";

const teamData = [
  { img: team1, name: "Jose Day" },
  { img: team2, name: "Lee Harvey" },
  { img: team3, name: "Nannie Martin" },
  { img: team4, name: "Norman Benson" },
  { img: team5, name: "Mable Roberson" },
];

const ExpertsSection = () => {
  return (
    <Box className="experts-wrapper">
      <Box className="experts-container">

        {/* LEFT CONTENT */}
        <Box className="experts-left">
          <Typography className="experts-title">
            Meet with our <br />
            <span>best experts</span>
          </Typography>

          <Typography className="experts-desc">
            Dolor sit amet consectetur elit sed eiusmod tempor incididunt
            labore et dolore magna aliqua enim minim veniam quis nostrud
            exercitation ullamco.
          </Typography>

          <Button className="experts-btn">Join Us</Button>
        </Box>

        {/* RIGHT TEAM GRID */}
        <Box className="experts-right">
          {teamData.map((member, index) => (
            <Box className="team-card" key={index}>
              <div className="team-img-wrap">
                <img src={member.img} alt={member.name} />
              </div>
              <Typography className="team-name">
                {member.name}
              </Typography>
              <Typography className="team-role">
                CO-FOUNDER
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ExpertsSection;