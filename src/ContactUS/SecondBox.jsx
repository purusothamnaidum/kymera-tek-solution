import React, { useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";

const labelStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "8px",
  color: "#333",
  display: "block",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  marginBottom: "20px",
  boxSizing: "border-box",
  fontFamily: "Arial, sans-serif",
  transition: "border-color 0.3s ease",
};
const socialIconStyle = {
  fontSize: "40px",
  margin: "0 15px",
  cursor: "pointer",
  padding: "5px",
  color: "#1F305E",
};

const SecondBox = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const socialMediaStyle = {
    display: "flex",
    marginTop: isMobile ? "20px" : 0,
    justifyContent: isMobile ? "center" : "flex-start",
  };

  const handleSocialMediaClick = (socialMedia) => {
    const urls = {
      faInstagram: "https://www.instagram.com/kymeratek_solutions/",
      faYoutube: "https://www.youtube.com/@KymeraTekSolutions",
      faTwitter: "https://www.twitter.com/yourprofile",
      faFacebook: "https://www.facebook.com/kymera-tek-solutions",
      faLinkedin: "https://www.linkedin.com/company/unavailable/",
    };
    const url = urls[socialMedia];
    if (url) {
      window.open(url, "_blank");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_n6sz019",
        "template_ctje8qo",
        templateParams,
        "-yDXwwX9dj3yVyUwD"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          // Reset form fields after submission
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: isMobile ? "20%" : "25%",
        left: "50%",
        transform: "translate(-50%, 50%)",
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        zIndex: "1",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      {/* First box */}
      <Box
      sx={{
        width: isMobile ? "100%" : "48%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        padding: isMobile ? "20px" : "40px",
        marginRight: isMobile ? 0 : "6%",
        bgcolor: "#cde5d9",
        borderRadius: "12px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
        <Box sx={{ flex: 1, marginRight: isMobile ? 0 : "20px" }}>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            style={{
              ...inputStyle,
              height: "50px",
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>

        <Box sx={{ flex: 1, marginTop: isMobile ? "20px" : 0 }}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            style={{
              ...inputStyle,
              height: "50px",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
      </Box>

      <label style={labelStyle}>Message</label>
      <textarea
        placeholder="Enter Your Message"
        style={{
          ...inputStyle,
          height: "150px",
          resize: "none",
        }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "#1F305E",
          color: "white",
          border: "none",
          padding: "15px",
          cursor: "pointer",
          fontSize: "18px",
          width: "100%",
          borderRadius: "8px",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#17294D")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#1F305E")}
      >
        Submit
      </button>
    </Box>
      {/* Second box */}
      <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          borderRadius: "15px",
          alignItems: isMobile ? "center" : "flex-start",
          paddingLeft: isMobile ? 0 : "20px",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "35px" : "45px",
            fontWeight: 700,
            lineHeight: 1.1,
            fontFamily: "Montserrat, sans-serif",
            color: "#1B356A",
            marginBottom: "20px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Get In Touch
        </h2>
        <h6
          style={{
            lineHeight: 1.8,
            fontStyle: "italic",
            fontSize: isMobile ? "1rem" : "1.125rem",
            margin: "20px 0 0",
            fontFamily: "'Open Sans', sans-serif !important",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          At Kymera Tek Solutions, we're here to help you navigate your DevOps,
          full-stack development, and HR training needs. Whether you have a
          project in mind, or want to build one, need expert consultation, or
          want to enhance your skills, our team is ready to collaborate with
          you.
        </h6>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1rem",
            lineHeight: 2,
            margin: isMobile ? "12px" : "20px 0 0",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Just fill out the form, and our team will get back to you promptly
          with insights and customized solutions designed to drive your success.
        </p>

        <div style={socialMediaStyle}>
          <FontAwesomeIcon
            icon={faInstagram}
            style={socialIconStyle}
            onClick={() => handleSocialMediaClick("faInstagram")}
          />
          <FontAwesomeIcon
            icon={faYoutube}
            style={socialIconStyle}
            onClick={() => handleSocialMediaClick("faYoutube")}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            style={socialIconStyle}
            onClick={() => handleSocialMediaClick("faTwitter")}
          />
          <FontAwesomeIcon
            icon={faFacebook}
            style={socialIconStyle}
            onClick={() => handleSocialMediaClick("faFacebook")}
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            style={socialIconStyle}
            onClick={() => handleSocialMediaClick("faLinkedin")}
          />
        </div>
      </Box>
    </Box>
  );
};

export default SecondBox;
