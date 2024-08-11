/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import ContactForm from "./ContactForms/CoursesContactForm"; // Import your ContactForm component
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const GradientButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#fdd017",
  borderRadius: 30,
  color: "white",
  fontWeight: "bold",
  fontSize: "18px",
  height: 48,
  padding: "0 30px",
  [theme.breakpoints.down("sm")]: {
    margin: "10px 0",
    width: "100%",
    padding: "0 30px",
  },
  animation: "glowing 1500ms infinite",
  "@keyframes glowing": {
    "0%": { backgroundColor: "#FF4F00", boxShadow: "0 0 3px #85B09A" },
    "50%": { backgroundColor: "#C46210", boxShadow: "0 0 40px #85B09A" },
    "100%": { backgroundColor: "#E09540", boxShadow: "0 0 3px #85B09A" },
  },
}));

const SpecialOffer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          if (minutes === 0) {
            setMinutes(59);
            return 59;
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            return 59;
          }
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormSubmit = () => {
    // Your form submission logic here
    handleClose();
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        //backgroundColor: '#161421',
        padding: isMobile ? "15px" : "25px 30px",
        borderRadius: "0px 0px 0 0",
        // boxShadow: '0 -4px 8px rgba(0,0,0,0.1)',
        width: "100%",
        margin: "0px auto",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <GradientButton variant="contained" onClick={handleOpen}>
        Register Now
      </GradientButton>

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

export default SpecialOffer;
