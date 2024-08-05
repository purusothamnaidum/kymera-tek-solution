import { Container, Typography, Paper, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import React from 'react';

const CourseOverview = ({ title, description, title2 }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth={false}
      style={{
        height: "auto",
        width: "100%",
        backgroundColor: "#000000",
        backgroundImage: `url('/Images/Black.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: isMobile ? "90px 20px" : "80px 20px",
      
      }}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <Typography
          style={{
            width: isMobile ? "100%" : "90%",
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 800,
            fontSize: isMobile ? "1.5rem" : "2.5rem",
            lineHeight: "130%",
            color: "#FFFFFF",
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -30%)",
          }}
        >
          Unlock Your Potential with Our Comprehensive <span style={{ color: "#FF9900" }}>{title}</span> <br />
          {title2}
        </Typography>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          position: "relative",
          width: "100%",
          marginTop: isMobile ? "4rem" : "6rem",
        }}
      >
        <Typography
          variant="h1"
          style={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 800,
            width: isMobile ? "100%" : "90%",
            fontSize: isMobile ? "0.9rem" : "1.1rem",
            lineHeight: "180%",
            color: "#FFFFFF",
            marginLeft: isMobile ? "0" : "60px",
            marginTop: "2rem",
          }}
        >
          {description}
        </Typography>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        style={{
          position: "relative",
          marginTop: "2rem",
          marginBottom: "1",
        }}
      >
        <Paper
          elevation={3}
          style={{
            padding: isMobile ? "0.5rem" : "1rem",
            backgroundColor: "#ffffffcc",
            color: "#683fbe",
            borderRadius: "8px",
          }}
        >
          <Typography
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 700,
              fontSize: isMobile ? "1rem" : "1.5rem",
              lineHeight: "130%",
              textAlign: "center",
            }}
          >
            Guaranteed interviews from our hiring network!
          </Typography>
        </Paper>
      </motion.div>
    </Container>
  );
}

export default CourseOverview;
