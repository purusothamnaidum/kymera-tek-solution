import React from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

const AboutUs = ({ onClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Grid container spacing={0}>
      {/* Left Column */}
      <Grid item xs={12} sm={6} order={isSmallScreen ? 1 : 2}>
        {/* Left Column */}
        <Box
          sx={{
            height: "100%",
            width: "100%",
            bgcolor: "black",
            marginTop: isSmallScreen ? "20px" : "",
            position: "relative",
            paddingTop: isSmallScreen ? "56.25%" : "0", // 16:9 Aspect Ratio for small screens
            paddingBottom: isSmallScreen ? "0" : "56.25%", // Maintain aspect ratio for larger screens
            overflow: "hidden", // Hide overflow to ensure the iframe respects the border-radius
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/CgkrM7Q4taw?autoplay=1&mute=1&loop=1&playlist=CgkrM7Q4taw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          ></iframe>
        </Box>
      </Grid>

      {/* Right Column */}

      <Grid item xs={12} sm={6} order={isSmallScreen ? 1 : 2}>
        <Paper
          sx={{
            minHeight: "510px",
            padding: "50px",
            //backgroundColor: "#e0e0e0",
            backgroundColor: "#D1E8E2"
          }}
        >
          {/* About Content */}
          <div className="section-head long-shape mb-40 style-3">
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: "21px",
                textTransform: "capitalize",
                fontWeight: 700,
                margin: 0,
                lineHeight: 1.4,
                display: "block",
                fontFamily: "Inter, sans-serif",
              }}
            >
              About{" "}
              <span
                style={{
                  fontWeight: 400,
                  color: "#4A00E1",
                  fontStyle: "italic",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                Kymera
              </span>
            </Typography>
          </div>
          {/* Additional Text */}
          <Typography
            variant="h5"
            component="h5"
            sx={{
              fontSize: "19px",
              lineHeight: "28px",
              fontStyle: "italic",
              marginBottom: "25px",
              marginTop: "50px",
              display: "block",
              unicodeBidi: "isolate",
              fontFamily: "Inter, sans-serif",
            }}
          >
            “It is only when they go wrong that machines remind you how powerful
            they are.”
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#666",
              marginBottom: "20px",
              fontSize: "14px",
              lineHeight: 2,
              display: "block",
              unicodeBidi: "isolate",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Kymera Tek is the partner of choice for many of the world’s
            leading enterprises, SMEs, and technology challengers. We help
            businesses elevate their value through custom software development,
            product design, QA, and consultancy services.
          </Typography>

          {/* Specialization Text */}
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              marginBottom: "20px",
              fontSize: "14px",
              lineHeight: 2,
              display: "block",
              unicodeBidi: "isolate",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Kymera Tek specializes in technological and IT-related services such
            as product engineering, warranty management, building cloud, etc.
          </Typography>
          {/* Add your content here */}

          {/* MoreAbout Button */}
          <Link to="/about">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4A00E1",
                color: "#fff",
                padding: "10px 25px",
                borderRadius: "25px",
              }}
            >
              MoreAbout
            </Button>
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
