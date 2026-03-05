import React from "react";
import { Box, Container, Typography, useTheme, useMediaQuery } from "@mui/material";

const PartnerLogosSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const partners = [
    { name: "Amazon Web Services", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/800px-Amazon_Web_Services_Logo.svg.png" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/800px-Microsoft_logo.svg.png" },
    { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/800px-Google_Cloud_logo.svg.png" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/800px-Oracle_logo.svg.png" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/800px-Salesforce.com_logo.svg.png" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/800px-Adobe_Corporate_Logo.png" },
    { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/800px-Intel_logo_%282006-2020%29.svg.png" },
   
  ];

  const allPartners = [...partners, ...partners];

  return (
    <Box
      component="section"
      sx={{
        // py: { xs: 6, md: 8 },
        // backgroundColor: 'background.paper',
        // borderTop: '1px solid',
        // borderBottom: '1px solid',
        borderColor: 'divider',
         maxWidth : '1200px',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      <Container 
        maxWidth={false} 
        sx={{
          maxWidth: '1024px',
          margin: '0 auto',
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
       <Typography
  variant="h3"
  component="h2"
  align="center"
  sx={{
    fontSize: { xs: '20px', sm: '22px', md: '27px' },
    fontWeight: 700,
    color: '#000',
    mb: { xs: 4, md: 6 },
    lineHeight: 1.3,
    maxWidth: '800px',
    mx: 'auto'
  }}
>
  Partnering with the world's{" "}
  <span style={{ color: '#1b8985', fontWeight: 700 }}>
    leading universities and companies
  </span>
</Typography>
        {/* Logo Slider / Grid */}
        {!isMobile ? (
          // Desktop / Tablet: continuous scroll
          <Box
            className="logo-slider"
            sx={{
              display: 'flex',
              gap: { xs: 3, md: 4, lg: 5 },
              animation: 'scroll 40s linear infinite',
            }}
          >
            {allPartners.map((partner, index) => (
              <Box key={index} sx={{ flexShrink: 0, width: { xs: 120, sm: 140, md: 160, lg: 180 }, height: { xs: 40, sm: 70, md: 80 }, display: 'flex', alignItems: 'center', justifyContent: 'center',  borderRadius: 2 }}>
                <Box component="img" src={partner.logo} alt={partner.name} sx={{ maxWidth: '64%', maxHeight: '68%', objectFit: 'contain' }} />
              </Box>
            ))}
          </Box>
        ) : (
          // Mobile: 2 columns grid
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 2,
              justifyItems: 'center',
            }}
          >
            {partners.map((partner, index) => (
              <Box key={index} sx={{ width: 120, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2,  p: 1 }}>
                <Box component="img" src={partner.logo} alt={partner.name} sx={{ maxWidth: '64%', maxHeight: '68%', objectFit: 'contain' }} />
              </Box>
            ))}
          </Box>
        )}
      </Container>

      {/* Animations for desktop scroll */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-1 * (160px + 20px) * ${partners.length})); }
        }
      `}</style>
    </Box>
  );
};

export default PartnerLogosSection;

