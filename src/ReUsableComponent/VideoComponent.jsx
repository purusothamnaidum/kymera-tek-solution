import React from "react";
import { Container, Typography, Paper, Box, ListItemIcon, useMediaQuery } from "@mui/material";
import ReactPlayer from "react-player";
import GroupsIcon from "@mui/icons-material/Groups";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import { useTheme } from "@mui/material/styles";

const VideoComponent = ({
  videoUrl,
  courseDuration,
  courseTitle,
  courseDescription,
  expertsCount,
  sessionsCount,
  courseImage,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Container
        maxWidth={false}
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#171421",
          padding: isMobile ? "10px" : "0",
        }}
      >
        <ReactPlayer url={videoUrl} width={isMobile ? "100%" : "800px"} height={isMobile ? "230px" : "450px"} controls />
      </Container>
      <Container
        maxWidth={false}
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#171421",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: isMobile ? "100%" : "80%",
            height: "auto",
            padding: isMobile ? "1rem" : "4rem",
          }}
        >
          <Box
            sx={{
              width: isMobile ? "100%" : "80%",
              padding: isMobile ? "0" : "4rem",
            }}
          >
            <Typography
              variant="h1"
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 600,
                fontSize: isMobile ? "1.7rem" : "1.5rem",
                lineHeight: "140%",
                color: "#8665cc",
                marginBottom: ".75rem",
                textTransform: "uppercase",
                textAlign: isMobile ? "justify" : "left",
              }}
            >
              IN {courseDuration}
            </Typography>
            <Typography
              variant="h1"
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 700,
                fontSize: isMobile ? "1.5rem" : "2.5rem",
                lineHeight: "130%",
                marginBottom: "1.5rem",
                color: "#fff",
                verticalAlign: "baseline",
                textDecoration: "none",
                boxSizing: "border-box",
                textAlign: isMobile ? "left" : "left",
              }}
            >
              {courseTitle}
            </Typography>

            <Typography
              variant="body1"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: isMobile ? "1rem" : "1rem",
                color: "#FFFFFF",
                lineHeight: "152%",
                letterSpacing: "0.01em",
                wordSpacing: "0.04em",
                textDecoration: "none",
                verticalAlign: "baseline",
                marginTop: "1rem",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              {courseDescription}
            </Typography>
          </Box>
          <Box
            sx={{
              width: isMobile ? "100%" : "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "flex-start" : "flex-start",
            }}
          >
            <Paper
              sx={{
                width: "100%",
                height: "auto",
                background:
                  "linear-gradient(180deg, #2a194c, rgba(42, 25, 76, .2))",
                borderRadius: ".75rem",
                marginLeft: isMobile ? "0" : "15%",
                marginTop: isMobile ? "1rem" : "5%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden", // Ensure the image fits well within the rounded corners
              }}
              elevation={3}
            >
              <img
                src={courseImage}
                alt="Description"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: ".75rem",
                }}
              />
            </Paper>

            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                width: isMobile ? "100%" : "auto",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <Paper
                sx={{
                  width: isMobile ? "100%" : "50%",
                  height: "1.6in",
                  background:
                    "linear-gradient(180deg, #2a194c, rgba(42, 25, 76, .2))",
                  borderRadius: ".75rem",
                  marginLeft: isMobile ? "0" : "10%",
                  marginTop: "15%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "1rem",
                  alignItems: "center",
                }}
                elevation={3}
              >
                <Box
                  sx={{
                    width: "48%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#F3B998",
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 800,
                    fontSize: "4rem",
                    lineHeight: "100%",
                    marginBottom: "-2%",
                    marginLeft: isMobile ? "0" : "25%",
                  }}
                >
                  {expertsCount}
                  <span style={{ fontSize: "1.5rem" }}>&nbsp;+</span>
                </Box>

                <Box
                  sx={{
                    height: "50%",
                    display: "flex",
                    color: "#FFFFFF",
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 800,
                    fontSize: "1rem",
                    alignItems: "center",
                    marginLeft: isMobile ? "0" : "20%",
                    marginTop: "-10%",
                  }}
                >
                  <ListItemIcon sx={{ marginRight: isMobile ? "0" : "-22px" }}>
                    <GroupsIcon sx={{ color: "#FFFFFF" }} />
                  </ListItemIcon>
                  EXPERTS
                </Box>
              </Paper>

              <Paper
                sx={{
                  width: isMobile ? "100%" : "50%",
                  height: "1.6in",
                  background:
                    "linear-gradient(180deg, #2a194c, rgba(42, 25, 76, .2))",
                  borderRadius: ".75rem",
                  marginLeft: isMobile ? "0" : "10%",
                  marginTop: "15%",
                  marginRight: isMobile ? "0" : "-20%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "1rem",
                  alignItems: "center",
                }}
                elevation={3}
              >
                <Box
                  sx={{
                    width: "48%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#F3B998",
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 800,
                    fontSize: "4rem",
                    lineHeight: "100%",
                    marginBottom: "-2%",
                    marginLeft: isMobile ? "0" : "25%",
                  }}
                >
                  {sessionsCount}
                  <span style={{ fontSize: "1.5rem" }}>&nbsp;+</span>
                </Box>

                <Box
                  sx={{
                    height: "50%",
                    display: "flex",
                    color: "#FFFFFF",
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 800,
                    fontSize: ".75rem",
                    alignItems: "center",
                    marginLeft: isMobile ? "0" : "20%",
                    marginTop: "-10%",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      marginRight: isMobile ? "0" : "-20px",
                      marginLeft: isMobile ? "0" : "-20%",
                    }}
                  >
                    <OnlinePredictionIcon sx={{ color: "#FFFFFF" }} />
                  </ListItemIcon>
                  LIVE SESSIONS
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default VideoComponent;
