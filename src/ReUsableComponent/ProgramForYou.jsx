import React, { useState } from "react";
import { Box, Button, Typography, useMediaQuery, useTheme, Modal } from "@mui/material";
import ContactForm from "../ContactForms/CoursesContactForm";

const ProgramForYou = ({ mainTitle, subTitle, applyText, checkText, programData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
        bgcolor: "#171421",
        height: "auto",
        overflow: "hidden",
        color: "white",
        padding: isMobile ? "20px" : "0px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <Box
        sx={{
          height: "auto",
          width: isMobile ? "100%" : "45%",
          display: "flex",
          padding: isMobile ? "20px" : "50px",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundImage: "url(/PCYBG.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginBottom: isMobile ? "20px" : "0",
        }}
      >
        <Typography
          sx={{
            fontSize: isMobile ? "2rem" : "2.5rem",
            marginBottom: "1rem",
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 800,
            lineHeight: "130%",
            color: "white",
            textAlign: "left",
          }}
        >
          {mainTitle}
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            marginBottom: "2.5rem",
            fontFamily: "Inter, sans-serif",
            lineHeight: "150%",
            color: "white",
            textAlign: "left",
          }}
        >
          {subTitle}
        </Typography>

        <Button
          sx={{
            width: isMobile ? "100%" : "70%",
            padding: ".875rem 2.5rem",
            fontSize: ".85rem",
            lineHeight: "150%",
            borderRadius: ".375rem",
            margin: "0 0 1rem",
            background: "#683fbe",
            fontWeight: 600,
            color: "#f6f6ff",
            textAlign: "left",
            "&:hover": {
              backgroundColor: "#572ca6",
            },
          }}
          onClick={handleOpen}
        >
          {applyText}
          <img src="/Images/Courses Images/PFY1.svg" alt="Icon" style={{ marginLeft: "0.5rem" }} />
        </Button>

        <Button
          sx={{
            width: isMobile ? "100%" : "70%",
            padding: "1rem 2rem",
            fontSize: ".85rem",
            borderRadius: ".5rem",
            border: "1px solid #533298",
            background: "#171421",
            color: "#fff",
            fontWeight: 600,
            lineHeight: "150%",
            cursor: "pointer",
            textAlign: "left",
            "&:hover": {
              backgroundColor: "#2a272e",
            },
          }}
        >
          {checkText}
        </Button>
      </Box>

      <Box
        sx={{
          height: "auto",
          width: isMobile ? "100%" : "60%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {programData.map((box, index) => (
          <Box
            key={index}
            sx={{
              padding: ".75rem 1rem",
              borderRadius: ".375rem",
              background:
                "linear-gradient(258.73deg, rgba(65, 40, 114, 0) 8.37%, #36235f 91.76%)",
              display: "flex",
              margin: "1rem 0",
              fontFamily: "Inter, sans-serif",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img src="/Images/Courses Images/PFY2.svg" alt="icon" />
            <Typography
              sx={{
                color: "white",
                fontSize: "20px",
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 800,
                padding: "10px",
                lineHeight: "150%",
              }}
            >
              {box.title}
            </Typography>
          </Box>
        ))}
      </Box>

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
    </Box>
  );
};

export default ProgramForYou;
