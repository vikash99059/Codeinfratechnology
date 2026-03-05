import React from "react";

const QueryBox = () => {
  // WhatsApp number
  const whatsappNumber = "917762012673";

  // Function to redirect to WhatsApp chat
  const handleChatNow = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  // Function to trigger a call
  const handleBookCall = () => {
    window.location.href = `tel:+91${whatsappNumber}`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Still have any query?</h2>
        <p style={styles.subText}>We are here to assist you!</p>
        <div style={styles.buttonContainer}>
          <button style={styles.callButton} onClick={handleBookCall}>
            Book a Call
          </button>
          <button style={styles.chatButton} onClick={handleChatNow}>
            Chat Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Internal CSS styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    marginBottom: "40px",
    // backgroundColor: "#f5f5f5",
    // minHeight: "100vh",
  },
  box: {
    width: "100%",
    maxWidth: "800px",
   background: "linear-gradient(135deg, #19365b, #15807c)",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  heading: {
    margin: "0 0 10px 0",
    fontSize: "28px",
    color: "white",
  },
  subText: {
    margin: "0 0 25px 0",
    fontSize: "16px",
    color: "white",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
  },
  callButton: {
    backgroundColor: "#15807c",
    color: "#ffffff",
    border: "none",
    padding: "12px 25px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
  chatButton: {
    backgroundColor: "#25D366",
    color: "#ffffff",
    border: "none",
    padding: "12px 25px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

// Optional hover effect
styles.callButton[":hover"] = {
  backgroundColor: "#0056b3",
};
styles.chatButton[":hover"] = {
  backgroundColor: "#128C7E",
};

export default QueryBox;