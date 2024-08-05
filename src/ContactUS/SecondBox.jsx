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
  fontWeight: 700,
  fontSize: "16px",
  color: "#1F305E",
  fontFamily: "Open Sans, sans-serif",
};

const inputStyle = {
  width: "100%",
  borderRadius: "3px",
  borderBottom: "4px solid #1F305E",
  color: "#1F305E",
  marginBottom: "10px",
  border: "none",
  outline: "none",
  fontSize: "16px",
  padding: "15px",
  backgroundColor: "white",
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
      faYoutube: "https://youtube.com/@techjobsolution?si=P4sXHJMIVO-sIv6G",
      faTwitter: "https://www.twitter.com/yourprofile",
      faFacebook: "https://www.facebook.com/techjobsolution?mibextid=kFxxJD",
      faLinkedin: "https://www.linkedin.com/company/tech-job-solution/",
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
          height: isMobile ? "400px" : "400px",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          marginRight: isMobile ? 0 : "6%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ flex: 1, marginRight: isMobile ? 0 : "40px" }}>
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

          <Box sx={{ flex: 1, marginLeft: isMobile ? "20px" : "10px" }}>
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
            height: "170px",
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
            padding: "15px 0px",
            cursor: "pointer",
            fontSize: "18px",
            width: "100%",
            borderRadius: "5px",
          }}
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
