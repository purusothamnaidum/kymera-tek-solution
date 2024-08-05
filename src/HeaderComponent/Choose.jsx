import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const paraStyle = {
  textAlign: "left",
  lineHeight: "1.5",
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
  display: "block",
  color: "#333",
};

const ChooseUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const options = [
    "EXPERT TRAINERS",
    "CAPSTONE PROJECTS",
    "INHOUSE INTERNSHIP",
    "PLACEMENTS",
  ];

  // Array of image file names
  const images = [
    "/Images/HomePage/ExpertTrainer.jpg",
    "/Images/HomePage/Capstone.png",
    "/Images/HomePage/Inhouse.jpg",
    "/Images/HomePage/Placements.jpg",
  ];

  // Array of text objects for each option
  const texts = [
    {
      title: "Expert Trainers",
      paragraphs: [
        {
          text: "Kymera Tex explored all over India to get the best trainers and succeeded with it. We have a pool of trainers working with highly qualified business partners and fortune companies to provide advanced and comprehensive training.",
          style: paraStyle,
        },
        {
          text: "They curate the course content with an eye on the industry needs and standards to make students skilful and champions in solving the complex challenges of the industry.",
          style: {
            ...paraStyle,
            marginTop: isMobile ? "10px" : "40px",
          },
        },
      ],
    },
    {
      title: "Capstone Projects",
      paragraphs: [
        {
          text: "At Kymera Tek, we believe in a practical learning approach. Making students work on real-time data helps in giving them a clear visualization of how it is applied in the real world.",
          style: paraStyle,
        },
        {
          text: "Considering this, we follow a collaborative group-oriented approach to learn with discussion forums and get hands-on with capstone projects to make our trainees good team players and strong thinkers to solve problems.",
          style: {
            ...paraStyle,
            marginTop: isMobile ? "10px" : "40px",
          },
        },
      ],
    },
    {
      title: "In-house Internship",
      paragraphs: [
        {
          text: "Internships aren’t just about ground work at Innomatics. We believe that with the right program, One can develop young talents and lay a foundation for recruiting brilliant young minds to work for any organization.",
          style: paraStyle,
        },
        {
          text: "We do provide paid/unpaid internship programs that offer the opportunity to edge out larger competitors by providing interns with opportunities to conquer the business challenges.",
          style: {
            ...paraStyle,
            marginTop: isMobile ? "10px" : "40px",
          },
        },
      ],
    },
    {
      title: "Placements",
      paragraphs: [
        {
          text: "We have a collaboration with over 100+ MNCs and SMEs who directly source their business requirements through techjobs. Also having a dedicated placement verticle that enables trainees to take advantage and excel in the career with extensive knowledge gained at Kymera Tek.",
          style: paraStyle,
        },
        {
          text: "For the benefit of the students to face the real challenges, we conduct mockup interviews with instant feedback,1-1 mentorship, provide extensive support to the Learning Management System (LMS) where they can access the classes and stay updated, attend career fairs, Hackathons, workshops and meetups with leading industry experts.",
          style: {
            ...paraStyle,
            marginTop: isMobile ? "10px" : "40px",
          },
        },
      ],
    },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]); // Initialize with the first option
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (newValue) => {
    setSelectedOption(options[newValue]);
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#2C3531", // Set the background color
        padding: "20px",
      }}
    >
      <Typography
        sx={{
          fontSize: isMobile ? "22px" : "28px",
          fontWeight: "bold",
          textAlign: "center", // Center the text
          marginTop: "20px",
          color: "white"
        }}
      >
        Why People Choose Our Training
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          maxWidth: "100%", // Ensure the content doesn't overflow
        }}
      >
        <Paper elevation={3} sx={{ display: "flex", flexDirection: "row" }}>
          {options.map((option, index) => (
            <Button
              key={index}
              variant={tabValue === index ? "contained" : "outlined"}
              onClick={() => handleTabChange(index)}
              sx={{
                borderRadius: "7px",
                margin: isMobile ? "5px" : "20px", // Reduce the margin for smaller screens
                fontSize: isMobile ? "5px" : "15px", // Adjust the font size for better visibility on mobile
                minWidth: isMobile ? "86px" : "120px", // Set a minimum width to prevent buttons from becoming too narrow
                fontWeight: "bold",
                backgroundColor: tabValue === index ? "#A0522D" : "", // Set background color for selected option
                color: tabValue === index ? "#fff" : "", // Set text color for selected option
                border: tabValue === index ? "2px solid #D9B08C" : "", // Add border color for selected option
                '&:hover': {
                  backgroundColor: tabValue === index ? "#8B4513" : "", // Set hover color for selected option
                }
              }}
            >
              {option}
            </Button>
          ))}
        </Paper>

        <Box
          sx={{
            marginTop: "20px",
            width: isMobile ? "122%" : "100%",
            display: "flex",
            flexDirection: { xs: "", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selectedOption && (
            <Paper elevation={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box sx={{ flex: "", paddingRight: { xs: "10px", sm: "0px" } }}>
                  <CardMedia
                    component="img"
                    height={isMobile ? "130" : "auto"} // Set height to 130 for mobile, auto for desktop
                    sx={{ width: isMobile ? "130px" : "90%",borderRadius:'15px' }} // Set width to 130px for mobile, 100% for desktop
                    image={`${images[options.indexOf(selectedOption)]}`}
                    alt={selectedOption}
                  />
                </Box>
                <Box sx={{ flex: "1" }}>
                  {/* Adjust the max width */}
                  <CardContent sx={{ padding: "10px" }}>
                    {texts[options.indexOf(selectedOption)].paragraphs.map(
                      (paragraph, index) => (
                        <Typography
                          key={index}
                          variant="body1"
                          color="text.secondary"
                          sx={{
                            ...paragraph.style,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            fontSize: isMobile ? "10px" : "20px", // Adjust text size for mobile
                          }}
                        >
                          {paragraph.text}
                        </Typography>
                      )
                    )}
                  </CardContent>
                </Box>
              </Box>
            </Paper>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ChooseUs;
