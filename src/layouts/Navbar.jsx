import React, { useEffect, useState } from "react";
import "./Navbar.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";

// Import logo image (make sure to add your logo in the assets folder)
import logo from "../assets/images/codery.png"; // Adjust path according to your project structure

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { text: "HOME", link: "/" },
    { text: "ABOUT", link: "/About" },
    { text: "SERVICES", link: "/Servicespage" },
    { text: "CAREERS", link: "/Careers" },
    { text: "CONTACT", link: "/ContactBanner" }
  ];
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AppBar
        position="fixed"
        className={`premium-navbar ${scrolled ? "navbar-scrolled" : ""}`}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar className="navbar-toolbar" disableGutters>
            {/* Large Logo */}
            <Box
              className="logo-container"
              onClick={handleLogoClick}
              sx={{ cursor: "pointer" }}
            >
              <img
                src={logo}
                alt="Codeinfra Techno"
                className="logo-image"
              />
              <Box className="logo-text-container">
                <Typography variant="caption" className="logo-subtitle">
                  Redefining Infrastructure for a Digital Era
                </Typography>
              </Box>
            </Box>

            {/* Desktop Menu - Centered */}
            {!isMobile && (
              <Box className="menu-desktop-center">
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    href={item.link}
                    color="inherit"
                    className="nav-link"
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}

            {/* Desktop Demo Button */}
            {!isMobile && (
              <Button
                variant="contained"
                className="demo-button desktop-demo"
                onClick={() => navigate("/Watchdemo")}
              >
                Watch Demo
              </Button>
            )}

            {/* Mobile Hamburger Menu - Right Side */}
            {isMobile && (
              <Box className="mobile-right-container">
                <IconButton
                  color="inherit"
                  className="hamburger-button"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <MenuIcon className="hamburger-icon" />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Premium Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="premium-mobile-drawer"
        PaperProps={{
          sx: {
            width: 320,
            background: "linear-gradient(135deg, #2d4a78, #15807c);",
            color: "#ffffff",
          },
        }}
      >
        <Box className="drawer-content">
          {/* Close Button */}
          <IconButton
            className="drawer-close-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <CloseIcon />
          </IconButton>

          {/* Drawer Logo Section */}
          <Box className="drawer-header">
            <img
              src={logo}
              alt="Codeinfra Techno"
              className="drawer-logo-image"
            />
            {/* <Typography variant="h5" className="drawer-logo-title">
              Code infra- Technology
            </Typography>
            <Typography variant="caption" className="drawer-logo-subtitle">
               Redefining Infrastructure for a Digital Era
            </Typography> */}
          </Box>

          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)", my: 2 }} />

          {/* Drawer Menu Items */}
          <List className="drawer-menu-list">
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding className="drawer-menu-item">
                <ListItemButton
                  onClick={() => setMobileMenuOpen(false)}
                  href={item.link}
                  className="drawer-menu-button"
                >
                  <ListItemText
                    primary={item.text}
                    className="drawer-menu-text"
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Demo Button in Drawer */}
          <Box className="drawer-demo-container">
            <Button
              fullWidth
              variant="contained"
              className="demo-button drawer-demo-button"
              onClick={() => {
                navigate("/Watchdemo");
                setMobileMenuOpen(false);
              }}
            >
              Watch Demo
            </Button>
          </Box>

          {/* Social Media Links */}
          <Box className="drawer-social">
            <Typography variant="body2" className="social-title">
              Follow Us
            </Typography>
            <Box className="social-icons">
              <IconButton className="social-icon" size="small">
                <FacebookIcon />
              </IconButton>
              <IconButton className="social-icon" size="small">
                <TwitterIcon />
              </IconButton>
              <IconButton className="social-icon" size="small">
                <LinkedInIcon />
              </IconButton>
              <IconButton className="social-icon" size="small">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;