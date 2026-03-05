import React, { useState } from "react";
import backgroundimage from "../../assets/images/whitebackground.jpg";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Stack,
  Divider,
} from "@mui/material";

const VideoLeadSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const phoneNumber = "7762012673";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const message = `Hello, I want to know more about your services.

Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}`;

    const url = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:+91${phoneNumber}`;
  };

  return (
    <Box
      sx={{
        py: { xs: 5, md: 10 },
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 6 }}>
          
          {/* ================= VIDEO CARD ================= */}
          <Paper
            elevation={6}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              mb: { xs: 3, md: 5 }, // ✅ gap added
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                pt: { xs: "56.25%", md: "42%" },
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/1oTuMPIwHmk?autoplay=1&mute=0&controls=1&loop=1&playlist=1oTuMPIwHmk"
                title="IT Services Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </Box>
          </Paper>

          {/* ================= INFO BAR ================= */}
          <Paper
            elevation={0}
            sx={{
              mb: { xs: 3, md: 4 },
              borderRadius: 3,
              background: "linear-gradient(135deg, #2d4a78, #15807c)",
              color: "#fff",
              textAlign: "center",
              py: 2.5,
              px: 2,
            }}
          >
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ fontSize: { xs: "20px", md: "26px" } }}
            >
              🚀 Grow Your IT Business Faster
            </Typography>

            <Typography sx={{ opacity: 0.95 }}>
              Fill details and connect instantly with our experts
            </Typography>
          </Paper>

          {/* ================= FORM CARD ================= */}
          <Paper
            elevation={4}
            sx={{
              borderRadius: 4,
              p: { xs: 3, md: 5 },
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(6px)",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  size="medium"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  size="medium"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  name="mobile"
                  size="medium"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 1.5 }} />
              </Grid>

              {/* PREMIUM SMALL BUTTONS */}
              <Grid item xs={12}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    variant="contained"
                    size="medium"
                    onClick={handleWhatsApp}
                    sx={{
                      px: 4,
                      py: 1,
                      fontWeight: 600,
                      borderRadius: "12px",
                      textTransform: "none",
                      fontSize: "14px",
                      background:
                        "linear-gradient(45deg,#25D366,#128C7E)",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                    }}
                  >
                    💬 Submit
                  </Button>

                  <Button
                    variant="contained"
                    size="medium"
                    onClick={handleCall}
                    sx={{
                      px: 4,
                      py: 1,
                      fontWeight: 600,
                      borderRadius: "12px",
                      textTransform: "none",
                      fontSize: "14px",
                      background:
                        "linear-gradient(45deg,#ff4b2b,#ff416c)",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                    }}
                  >
                    📞 Book a Call
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoLeadSection;