// import React from "react";


// const Footer = () => {
//   return (
//     <footer style={footerStyle}>
//       {/* top section: contact row (call us + phone) */}
//       <div style={topContactStyle}>
//         <span style={makeContactStyle}>Make a contact with our IT staffs. Call Us?</span>
//         <span style={phoneStyle}>305-587-3407</span>
//       </div>

//       {/* divider line */}
//       <hr style={hrStyle} />

//       {/* main footer columns: logo+desc, quick links, services, contact */}
//       <div style={mainGridStyle}>
//         {/* column 1 - logo & description */}
//         <div style={colStyle}>
//           <div style={logoStyle}>intech.</div>
//           <p style={descStyle}>
//             Lorem ipsum dolor amet consectetur adipietel sed elusum tempor
//             incididunt ut labore dolore magna aliqua enim ad minim veniam quis
//             nostrud exercitation.
//           </p>
//         </div>

//         {/* column 2 - quick links */}
//         <div style={colStyle}>
//           <h4 style={colTitleStyle}>Quick Link</h4>
//           <ul style={listStyle}>
//             <li>Company History</li>
//             <li>About Us</li>
//             <li>Contact Us</li>
//             <li>Services</li>
//             <li>Privacy Policy</li>
//           </ul>
//         </div>

//         {/* column 3 - services */}
//         <div style={colStyle}>
//           <h4 style={colTitleStyle}>Services</h4>
//           <ul style={listStyle}>
//             <li>Managed IT</li>
//             <li>Multi Function</li>
//             <li>Cyber Security</li>
//             <li>Data Management</li>
//             <li>Cloud Computing</li>
//           </ul>
//         </div>

//         {/* column 4 - contact info */}
//         <div style={colStyle}>
//           <h4 style={colTitleStyle}>Contact Info</h4>
//           <address style={addressStyle}>
//             Flat 20, Reynolds Neck, North Hele<br />
//             naville, FV77 8WS
//           </address>
//           <div style={contactRowStyle}>
//             <span style={contactIconStyle}>📞</span>
//             <a href="tel:+23055873407" style={contactLinkStyle}>
//               +2(305) 587-3407
//             </a>
//           </div>
//           <div style={contactRowStyle}>
//             <span style={contactIconStyle}>✉️</span>
//             <a href="mailto:info@example.com" style={contactLinkStyle}>
//               info@example.com
//             </a>
//           </div>
//           {/* explicit tel line as in image */}
//           <div style={telLineStyle}>
//             <a href="tel:305-587-3407" style={plainLinkStyle}>
//               tel:305-587-3407
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* lower footer with copyright and legal links */}
//       <div style={bottomBarStyle}>
//         <span style={copyrightStyle}>intech © 2025 All Right Reserved</span>
//         <div style={legalLinksStyle}>
//           <span style={legalLinkItemStyle}>Terms of Service</span>
//           <span style={separatorStyle}>|</span>
//           <span style={legalLinkItemStyle}>Privacy Policy</span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// // ================== STYLES (JavaScript object for inline, fully responsive) ==================
// const footerStyle = {
//   backgroundColor: "#0f1a2c", // dark navy background as in image
//   color: "#e0e5f0",
//   padding: "2rem 1.5rem 1rem",
//   fontFamily:
//     'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
//   lineHeight: 1.5,
// };

// const topContactStyle = {
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: "1.5rem",
//   fontSize: "1.1rem",
//   gap: "0.8rem 1.5rem",
// };

// const makeContactStyle = {
//   fontWeight: "400",
//   color: "#ccd9f0",
//   letterSpacing: "0.3px",
// };

// const phoneStyle = {
//   fontWeight: "700",
//   fontSize: "1.4rem",
//   color: "#ffffff",
//   background: "#1f2b40",
//   padding: "0.3rem 1.2rem",
//   borderRadius: "40px",
//   border: "1px solid #3a4a66",
// };

// const hrStyle = {
//   border: "none",
//   borderTop: "1px solid #2a3850",
//   margin: "1.5rem 0 2rem 0",
// };

// const mainGridStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(4, 1fr)",
//   gap: "2rem 1.5rem",
//   marginBottom: "2.5rem",
// };

// const colStyle = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "flex-start",
// };

// const logoStyle = {
//   fontSize: "1.8rem",
//   fontWeight: "700",
//   color: "white",
//   marginBottom: "0.75rem",
//   letterSpacing: "-0.5px",
// };

// const descStyle = {
//   fontSize: "0.9rem",
//   color: "#b0bedb",
//   margin: "0",
//   maxWidth: "280px",
//   lineHeight: "1.6",
// };

// const colTitleStyle = {
//   fontSize: "1.1rem",
//   fontWeight: "600",
//   marginBottom: "1.2rem",
//   color: "white",
//   borderBottom: "2px solid #3f5b9e",
//   paddingBottom: "0.4rem",
// };

// const listStyle = {
//   listStyle: "none",
//   padding: 0,
//   margin: 0,
//   display: "flex",
//   flexDirection: "column",
//   gap: "0.6rem",
//   fontSize: "0.95rem",
//   color: "#b0bedb",
// };

// const addressStyle = {
//   fontStyle: "normal",
//   color: "#b0bedb",
//   marginBottom: "1rem",
//   lineHeight: "1.6",
//   fontSize: "0.95rem",
// };

// const contactRowStyle = {
//   display: "flex",
//   alignItems: "center",
//   gap: "0.5rem",
//   marginBottom: "0.6rem",
// };

// const contactIconStyle = {
//   fontSize: "1.1rem",
//   color: "#7f92b0",
// };

// const contactLinkStyle = {
//   color: "#b0bedb",
//   textDecoration: "none",
//   fontSize: "0.95rem",
//   transition: "color 0.2s",
//   cursor: "pointer",
//   ":hover": {
//     color: "white",
//   },
// };

// const telLineStyle = {
//   marginTop: "0.7rem",
//   fontSize: "0.9rem",
//   color: "#8e9fc3",
//   borderTop: "1px dashed #2e3c58",
//   paddingTop: "0.7rem",
//   width: "100%",
// };

// const plainLinkStyle = {
//   color: "#a5b9da",
//   textDecoration: "none",
//   fontFamily: "monospace",
//   fontSize: "0.9rem",
// };

// const bottomBarStyle = {
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "space-between",
//   alignItems: "center",
//   borderTop: "1px solid #25334a",
//   paddingTop: "1.5rem",
//   marginTop: "1rem",
//   fontSize: "0.9rem",
//   gap: "1rem",
// };

// const copyrightStyle = {
//   color: "#9aabca",
// };

// const legalLinksStyle = {
//   display: "flex",
//   gap: "0.7rem",
//   alignItems: "center",
//   flexWrap: "wrap",
// };

// const legalLinkItemStyle = {
//   color: "#cbd5ed",
//   cursor: "default",
//   fontWeight: "400",
// };

// const separatorStyle = {
//   color: "#506280",
// };

// // ---------- responsive breakpoints (using matchMedia would be overkill, so we override with inline media queries via style objects) ----------
// // Since pure inline styles don't support @media, we attach a <style> tag in the component (or we can use the recommended CSS file).
// // To keep it self-contained and React inline, I'll add a <style> element dynamically inside the component (best practice is external, but for a single component we inject).
// const responsiveStyles = `
//   @media screen and (max-width: 992px) {
//     .footer-grid {
//       grid-template-columns: repeat(2, 1fr) !important;
//     }
//   }
//   @media screen and (max-width: 600px) {
//     .footer-grid {
//       grid-template-columns: 1fr !important;
//     }
//     .top-contact {
//       flex-direction: column;
//       align-items: flex-start;
//     }
//     .bottom-bar {
//       flex-direction: column;
//       align-items: flex-start;
//     }
//   }
// `;

// // We'll merge grid class to apply breakpoints
// const FooterWithResponsive = () => {
//   return (
//     <>
//       <style>{responsiveStyles}</style>
//       <footer style={footerStyle}>
//         {/* top contact row with class for fine control */}
//         <div style={topContactStyle} className="top-contact">
//           <span style={makeContactStyle}>Make a contact with our IT staffs. Call Us?</span>
//           <span style={phoneStyle}>305-587-3407</span>
//         </div>

//         <hr style={hrStyle} />

//         {/* main grid with class */}
//         <div style={mainGridStyle} className="footer-grid">
//           {/* col 1 */}
//           <div style={colStyle}>
//             <div style={logoStyle}>intech.</div>
//             <p style={descStyle}>
//               Lorem ipsum dolor amet consectetur adipietel sed elusum tempor
//               incididunt ut labore dolore magna aliqua enim ad minim veniam quis
//               nostrud exercitation.
//             </p>
//           </div>
//           {/* col 2 */}
//           <div style={colStyle}>
//             <h4 style={colTitleStyle}>Quick Link</h4>
//             <ul style={listStyle}>
//               <li>Company History</li>
//               <li>About Us</li>
//               <li>Contact Us</li>
//               <li>Services</li>
//               <li>Privacy Policy</li>
//             </ul>
//           </div>
//           {/* col 3 */}
//           <div style={colStyle}>
//             <h4 style={colTitleStyle}>Services</h4>
//             <ul style={listStyle}>
//               <li>Managed IT</li>
//               <li>Multi Function</li>
//               <li>Cyber Security</li>
//               <li>Data Management</li>
//               <li>Cloud Computing</li>
//             </ul>
//           </div>
//           {/* col 4 */}
//           <div style={colStyle}>
//             <h4 style={colTitleStyle}>Contact Info</h4>
//             <address style={addressStyle}>
//               Flat 20, Reynolds Neck, North Hele<br />
//               naville, FV77 8WS
//             </address>
//             <div style={contactRowStyle}>
//               <span style={contactIconStyle}>📞</span>
//               <a href="tel:+23055873407" style={contactLinkStyle}>
//                 +2(305) 587-3407
//               </a>
//             </div>
//             <div style={contactRowStyle}>
//               <span style={contactIconStyle}>✉️</span>
//               <a href="mailto:info@example.com" style={contactLinkStyle}>
//                 info@example.com
//               </a>
//             </div>
//             <div style={telLineStyle}>
//               <a href="tel:305-587-3407" style={plainLinkStyle}>
//                 tel:305-587-3407
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* bottom bar with class */}
//         <div style={bottomBarStyle} className="bottom-bar">
//           <span style={copyrightStyle}>intech © 2025 All Right Reserved</span>
//           <div style={legalLinksStyle}>
//             <span style={legalLinkItemStyle}>Terms of Service</span>
//             <span style={separatorStyle}>|</span>
//             <span style={legalLinkItemStyle}>Privacy Policy</span>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default FooterWithResponsive;

// // example usage: in your App.js, import Footer from './Footer';





import React from "react";
import "./Footer.css";
import logoImage from "../../assets/images/codery.png";
import ChatWidget from "./ChatWidget";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleWhatsAppClick = () => {
    const phoneNumber = "917762012673";
    const message = "Hello! I'm interested in your IT services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="footer-premium">
      <div className="footer-container">
        {/* Main Footer Content - 4 Columns */}
        <div className="footer-main">
          {/* Column 1 - Company Info */}
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logoImage} alt="Code Infra Technologies" />
            </div>
            <p className="footer-tagline">
              Engineering Resilient Digital Infrastructure for Modern Enterprises.
            </p>
            <div className="footer-company-details">
              <p className="footer-detail-item">
                <span className="footer-detail-label">Industry:</span>
                <span>IT Services & Consulting</span>
              </p>
              <p className="footer-detail-item">
                <span className="footer-detail-label">Company Size:</span>
                <span>11–50 employees</span>
              </p>
            </div>
          </div>

          {/* Column 2 - Quick Navigation */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Navigation</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="footer-col">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#multi-function">Multi Function</a></li>
              <li><a href="#cyber-security">Cyber Security</a></li>
              <li><a href="#data-management">Data Management</a></li>
              <li><a href="#cloud-computing">Cloud Computing</a></li>
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div className="footer-col footer-col-connect">
            <h4 className="footer-title">Connect</h4>
            
            {/* Phone with WhatsApp - Right aligned */}
            <div className="footer-contact-item">
              <span className="footer-icon">📞</span>
              <a href="tel:+917762012673" className="footer-contact-link">
                +91-7762012673
              </a>
              {/* <div className="footer-whatsapp-wrapper">
                <button 
                  onClick={handleWhatsAppClick}
                  className="footer-whatsapp-btn"
                  aria-label="Chat on WhatsApp"
                  title="Chat on WhatsApp"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    width="18" 
                    height="18"
                    fill="currentColor"
                  >
                    <path d="M19.077 4.928C17.191 3.041 14.683 2 12.006 2c-5.35 0-9.71 4.34-9.716 9.688-.002 1.713.448 3.385 1.297 4.862L2.3 21.58l5.176-1.377c1.424.773 3.02 1.18 4.658 1.181h.004c5.349 0 9.71-4.34 9.716-9.688.002-2.595-1.01-5.034-2.893-6.92zm-7.08 14.906h-.003c-1.454 0-2.875-.388-4.105-1.114l-.294-.175-3.07.817.82-2.99-.192-.305a8.105 8.105 0 0 1-1.24-4.335c.005-4.488 3.658-8.14 8.15-8.14 2.176 0 4.222.85 5.76 2.393a8.093 8.093 0 0 1 2.39 5.756c-.005 4.489-3.658 8.142-8.146 8.142zm4.472-6.098c-.245-.122-1.45-.714-1.674-.796-.224-.082-.388-.122-.552.122-.164.244-.635.796-.78.96-.143.163-.286.184-.53.061-.245-.122-1.033-.38-1.968-1.21-.727-.645-1.218-1.442-1.361-1.685-.143-.245-.015-.377.108-.5.11-.11.245-.286.367-.43.122-.143.163-.245.245-.408.082-.163.04-.306-.02-.43-.061-.122-.551-1.33-.755-1.82-.2-.48-.4-.408-.55-.416-.142-.008-.306-.008-.47-.008-.164 0-.43.061-.653.306-.224.245-.857.837-.857 2.043 0 1.206.878 2.371 1 2.536.122.163 1.694 2.632 4.18 3.577.58.224 1.04.357 1.396.458.59.163 1.125.14 1.55.085.472-.061 1.45-.592 1.654-1.163.204-.571.204-1.06.143-1.163-.06-.102-.224-.163-.47-.285z"/>
                  </svg>
                </button>
              </div> */}
            </div>

            {/* Website */}
            <div className="footer-contact-item">
              <span className="footer-icon">🌐</span>
              <a href="https://www.codeinfratechnologies.com" className="footer-contact-link" target="_blank" rel="noopener noreferrer">
                www.codeinfratechnologies.com
              </a>
            </div>

            {/* Business Hours */}
            <div className="footer-hours">
              <span className="footer-icon">⏰</span>
              <span>Mon – Sat | 9:00 AM – 7:00 PM IST</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} Code Infra Technologies. All Rights Reserved.
          </div>
        </div>
      </div>
      <ChatWidget/>
    </footer>
  );
};

export default Footer;