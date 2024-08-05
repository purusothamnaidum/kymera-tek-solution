import React, { useState } from "react";
import { Box, Container, Button, useMediaQuery, Modal } from "@mui/material"; // Fixed the imports
import { useTheme } from "@mui/material/styles";
import ContactForm from "../ContactForms/CoursesContactForm";

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Styles for the outer container
  const containerStyles = {
    paddingLeft: "10px",
    height: 'auto',
    marginBottom: '30px',
    paddingRight: "10px",
    boxSizing: "border-box",
  };

  // Styles for the main colored box
  const boxStyles = {
    height: "auto",
    width: "100%",
    backgroundColor: "#171421",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Styles for the inner white box
  const innerBoxStyles = {
    height: "auto",
    width: isMobile ? "90%" : "80%",
    margin: "20px",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "center" : "flex-start",
    textAlign: isMobile ? "center" : "left",
  };

  // Styles for the left part of the inner box (heading)
  const leftPartStyles = {
    width: isMobile ? "100%" : "70%",
    borderRight: isMobile ? "none" : "1px solid #ccc",
    padding: "10px",
    color: "#fff",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.5em",
    position: "relative",
    paddingLeft: isMobile ? "0" : "80px",
  };

  // Styles for the yellow color bar
  const yellowBarStyles = {
    position: "absolute",
    left: isMobile ? "50%" : 0,
    top: isMobile ? "10px" : "15%",
    transform: isMobile ? "translateX(-50%)" : "translateY(-50%)",
    height: "6px",
    width: "60px",
    backgroundColor: "yellow",
  };

  // Styles for the additional text
  const additionalTextStyles = {
    fontSize: isMobile ? "1.25em" : "1.8em",
    letterSpacing: "-1px",
    color: "var(--light)",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    marginTop: "10px",
  };

  // Styles for the right part of the inner box (placeholder)
  const rightPartStyles = {
    width: isMobile ? "100%" : "30%",
    padding: "10px",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonStyles = {
    color: "#FFFFFF",
    borderColor: "#FFFF00",
    marginTop: isMobile ? "20px" : "70px",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1em",
    fontWeight: "bold",
    textTransform: "none",
    padding: "10px",
    width: "200px",
    borderWidth: "5px",
  };

  return (
    <>
      <Container maxWidth={false} sx={containerStyles}>
        <Box sx={boxStyles}>
          <Box sx={innerBoxStyles}>
            <Box sx={leftPartStyles}>
              <Box sx={yellowBarStyles} />
              Let's Get in Touch
              <Box sx={additionalTextStyles}>
                LET'S TALK ABOUT YOUR <br />
                BUSINESS IT SERVICES NEEDS
              </Box>
            </Box>
            <Box sx={rightPartStyles}>
              <Button variant="outlined" sx={buttonStyles} onClick={handleClickOpen}>
                Get in touch
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
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
          <ContactForm />
        </Box>
      </Modal>
    </>
  );
};

export default ContactSection;
