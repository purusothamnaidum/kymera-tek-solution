import React, { useState } from "react";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const data = [
  {
    image: "/Images/HomePage/Courses/MuelSoft.jpg",
    Description:
      "Mulesoft is the #1 integration platform for SOA, SaaS, and APIs in the world. By utilising an API-led strategy to connect devices, data, and applications both on-premises and in the cloud.",
  },
  {
    image: "/Images/HomePage/Courses/PowerBI.jpg",
    Description:
      "Stay agile and build solutions that move your business forward with the only set of low-code tools your teams need. Power Platform is built from the ground up to work together.",
  },
  {
    image: "/Images/HomePage/Courses/AWS.jpg",
    Description:
      " Utilizing AWS DevOps, we streamline our software development processes, seamlessly integrating development and operations to achieve agility and efficiency.",
  },
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box
      sx={{
        bgcolor: "#D9B08C",
        padding: "50px",
        margin: isMobile ? "5px" : "0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginLeft: "25px",
        }}
      >
        <Box
          sx={{
            borderRadius: "50px",
            width: "28px",
            height: "10px",
            bgcolor: "#2C3531",
            marginTop: "17px",
            marginLeft: "10px",
          }}
        ></Box>
        <Typography
          sx={{
            padding: "10px",
            textAlign: "left",
            paddingLeft: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#2C3531",
          }}
        >
          OUR COURSES
        </Typography>
      </Box>
      <Typography
        color="#D1E8E2"
        style={{
          textAlign: "left",
          padding: "15px",
          marginLeft: isMobile ? "-10px" : "14px",
          fontWeight: "bolder",
          fontSize: isMobile ? "22px" : "34px",
        }}
      >
        Exclusive IT Technologies
      </Typography>
      <div
        style={{
          padding: isMobile ? "" : "20px",
          marginTop: isMobile ? "20px" : "",
        }}
      >
        <Slider {...settings}>
          {data.map((service, index) => (
            <div key={index}>
              <Card
                sx={{
                  maxWidth: 300,
                  height: 400,
                  borderRadius: "10px",
                  position: "relative",
                }}
                onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
                onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
              >
                <CardMedia
                  component="img"
                  height="163"
                  image={service.image}
                  alt={service.name}
                  sx={{
                    transition: "transform 0.3s", // Add transition for smooth effect
                    "&:hover": {
                      transform: "scale(1.1)", // Zoom in effect on hover
                    },
                  }}
                />
                <CardContent>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "22px",
                      "&:hover": {
                        cursor: "pointer",
                        color: "#0070FF",
                      },
                    }}
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {service.Description}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    padding: "10px",
                    cursor: "pointer",
                    left: 0,
                    width: "100%",
                    bgcolor: "white",
                    color: "black",
                    textAlign: "center",
                    overflow: "hidden",
                    "&::before": {
                      content: "''",
                      position: "absolute",
                      left: "-100%", // Start from the left
                      top: 0,
                      width: "100%",
                      height: "100%",
                      background: "#0070FF",
                      transition: "left 1s", // Adjust transition duration here
                    },
                    "&:hover::before": {
                      left: 0, // Fill towards the right
                    },
                    "&:hover": {
                      color: "white", // Change text color to white on hover
                    },
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      position: "relative",
                    }}
                  >
                    Read More
                  </Typography>
                </Box>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </Box>
  );
};

export default Services;
