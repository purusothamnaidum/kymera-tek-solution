import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ContactForm from "../ContactForms/CoursesContactForm";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const ImageComponent = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [ref] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [showText, setShowText] = useState(false);
  const [refText, inViewText] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewText) {
      setShowText(true);
    }
  }, [inViewText]);

  const textSpringProps = useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? "translateY(0)" : "translateY(100px)",
    from: { opacity: 0, transform: "translateY(100px)" },
    config: { duration: 2000 },
  });

  const bodySpringProps = useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? "translateY(0)" : "translateY(100px)",
    from: { opacity: 0, transform: "translateY(100px)" },
    config: { duration: 2000 },
  });

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={6} order={isSmallScreen ? 1 : 2}>
        <Box
          sx={{
            position: "relative",
            height: isSmallScreen ? "5.5in" : "7in",
            backgroundColor: "#116466",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: isSmallScreen ? "-40%" : "0",
          }}
          ref={ref} // Attach the ref to the container
        >
          <animated.div
            style={{
              ...textSpringProps,
              width: isSmallScreen ? "100%" : "70%",
              position: "absolute",
              textAlign: isSmallScreen ? "center" : "justify",
              top: isSmallScreen ? "20%" : "37%",
              marginLeft: isSmallScreen ? "100%" : "60%",
            }}
            ref={refText}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: isSmallScreen ? 600 : 700,
                fontFamily: "Inter, sans-serif",
                fontSize: isSmallScreen ? "20px" : "50px",
                lineHeight: "1.2",
                color: "#FFFFFF",
                position: "absolute",
                textAlign: isSmallScreen ? "center" : "left",
                width: isSmallScreen ? "100%" : "100%",
                top: isSmallScreen ? "20%" : "37%",
                transform: "translate(-52%, -48%)",
                marginLeft: isSmallScreen ? "0" : "3%",
                padding: isSmallScreen ? "" : "10px 35px",
              }}
            >
              Make your life easier with help from {" "}
              <span
                style={{
                  fontStyle: "italic",
                  color: "#D9B08C",
                  fontWeight: isSmallScreen ? 600 : 700,
                }}
              >
                Kymera
              </span>
            </Typography>
          </animated.div>

          <animated.div style={{ ...bodySpringProps }}>
            <Typography
              variant="body1"
              sx={{
                marginTop: isSmallScreen ? "5%" : "37%",
                color: "#FFFFFF",
                fontFamily: "Poppins, sans-serif", // Apply Poppins font family
                fontWeight: isSmallScreen ? 200 : 300, // Use font weight 300 (light)
                fontSize: "16px",
                textAlign: isSmallScreen ? "center" : "justify",
                lineHeight: isSmallScreen ? "2" : "1.5",
                marginLeft: isSmallScreen ? "0" : "15%",
                maxWidth: isSmallScreen ? "100%" : "70%",
              }}
            >
              We help your career to elevate to the next level, including
              values, ethics, software development, product design, QA &
              consulting services.
            </Typography>
          </animated.div>

          <Button
            variant="contained"
            sx={{
              width: isSmallScreen ? "65%" : "50%",
              height: "50px",
              marginTop: "30px",
              backgroundColor: "#D9B08C",
              marginLeft: isSmallScreen ? "0" : "-10%",
              borderRadius: "30px",
              color: "black",
              fontSize: "16px", // Increase font size
              fontFamily: "Roboto, sans-serif", // Apply Roboto font family
              fontWeight: 500, // Use font weight 300 (light)
            }}
            onClick={handleOpen}
          >
            Request a Consultation
          </Button>

          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <ContactForm handleClose={handleClose} />
            </DialogContent>
          </Dialog>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} order={isSmallScreen ? 1 : 2}>
        <Box
          sx={{
            position: "relative",
            height: isSmallScreen ? "5in" : "7in",
            overflow: "hidden",
            backgroundColor: "  #116466",
          }}
        >
          <img
            src="/Images/HomePage/Home.jpg"
            alt="Description of the "
            style={{
              width: isSmallScreen ? "90%" : "650px",
              height: isSmallScreen ? "100%" : "400px",
              top: isSmallScreen ? "5%" : "20%",
              left: isSmallScreen ? "5%" : "5%",
              position: "absolute",
              animation: isSmallScreen
                ? " slideLeftRightMobile 8s linear infinite alternate"
                : "slideLeftRight 8s linear infinite alternate",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ImageComponent;
