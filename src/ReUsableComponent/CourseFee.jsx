import React, { useState } from "react";
import { Box, Button, Typography, useMediaQuery, useTheme, Modal } from "@mui/material";
import ContactForm from "../ContactForms/CoursesContactForm";

const CourseFee = ({  courseTitle,specialNote, courseEndDate, courseStartDate, timeCommitment }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  

  const handleOpen = () => {
    
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (values) => {
    console.log(values);
    handleClose();
  };

  return (
    <Box
      sx={{
        bgcolor: "#683fbe",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        width: isMobile ? "90%" : "75%",
        height: "auto",
        margin: "40px auto",
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          height: "auto",
          width: isMobile ? "100%" : "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: isMobile ? "30px" : "70px",
        }}
      >
        <Typography
          sx={{
            fontSize: isMobile ? "1.8rem" : "2.2rem",
            lineHeight: "2.5rem",
            marginBottom: "1.3rem",
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 800,
            color: "#fdfdfd",
          }}
        >
          {courseTitle}
        </Typography>

        <Button
          sx={{
            padding: ".75rem",
            fontSize: ".95rem",
            lineHeight: "1.3rem",
            width: isMobile ? "100%" : "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#e8ddff",
            borderRadius: "6.61765px",
            fontWeight: 700,
            marginTop: "1rem",
            color: "black",
          }}
          onClick={handleOpen}
        >
          Apply
          <img
            src="/Images/Courses Images/CF.svg"
            alt="arrow"
            style={{
              height: "1rem",
              width: "1rem",
              marginLeft: ".25rem",
              filter: "brightness(0) saturate(100%)",
            }}
          />
        </Button>

        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: isMobile ? "80%" : "40%",
              bgcolor: "white",
              boxShadow: 24,
              p: 1,
              borderRadius: ".75rem",
            }}
          >
            <ContactForm onSubmit={handleFormSubmit} />
          </Box>
        </Modal>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <img src="/Images/Courses Images/CF1.svg" alt="log" style={{ marginRight: "0.5rem" }} />
          <Typography
            sx={{
              fontWeight: 600,
              color: "white",
            }}
          >
            {specialNote}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          height: "auto",
          width: isMobile ? "100%" : "50%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundImage: "url('CF2.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "1rem",
          padding: isMobile ? "30px" : "70px",
        }}
      >
        <Typography
          sx={{
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            lineHeight: "2rem",
            marginBottom: "0.8rem",
            fontWeight: 400,
            textAlign: "left",
            color: "#cccad2",
            fontFamily: "Plus Jakarta Sans",
            fontStyle: "normal",
          }}
        >
          Enrolment ends on
        </Typography>
        <Typography
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 700,
            fontSize: isMobile ? "1.8rem" : "2.2rem",
            marginBottom: "18px",
            lineHeight: "130%",
            color: "#f6f6ff",
          }}
        >
          {courseEndDate}
        </Typography>

        <Typography
          sx={{
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            lineHeight: "2rem",
            marginBottom: "0.8rem",
            fontWeight: 400,
            textAlign: "left",
            color: "#cccad2",
            fontFamily: "Plus Jakarta Sans",
            fontStyle: "normal",
          }}
        >
          Course starts on
        </Typography>
        <Typography
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 700,
            fontSize: isMobile ? "1.8rem" : "2.2rem",
            marginBottom: "18px",
            lineHeight: "130%",
            color: "#f6f6ff",
          }}
        >
          {courseStartDate}
        </Typography>

        <Typography
          sx={{
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            lineHeight: "2rem",
            marginBottom: "0.8rem",
            fontWeight: 400,
            textAlign: "left",
            color: "#cccad2",
            fontFamily: "Plus Jakarta Sans",
            fontStyle: "normal",
          }}
        >
          Time commitment
        </Typography>
        <Typography
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 700,
            fontSize: isMobile ? "1.8rem" : "2.2rem",
            marginBottom: "18px",
            lineHeight: "130%",
            color: "#f6f6ff",
          }}
        >
          {timeCommitment}
        </Typography>
      </Box>
    </Box>
  );
};

export default CourseFee;
