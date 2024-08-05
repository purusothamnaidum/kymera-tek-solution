import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const logos = [
  { id: 1, src: "/Images/Companies Images/Accenture.png" },
  { id: 2, src: "/Images/Companies Images/Deloitte.png" },
  { id: 3, src: "/Images/Companies Images/Infosys.png" },
  { id: 4, src: "/Images/Companies Images/LTIMindtree.png" },
  { id: 5, src: "/Images/Companies Images/TCS.png" },
  { id: 7, src: "/Images/Companies Images/Wipro.png" },
  // Add more logo objects as needed
];

const FeaturedClients = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const ClientContainer = {
    height: "auto",
    width: "100%",
    padding: isMobile ? "10px" : "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const HeadPart = {
    height: isMobile ? "auto" : "1in",
    width: isMobile ? "100%" : "60%",
    backgroundColor: "#683FBE",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    margin: "0 auto",
    padding: isMobile ? "10px" : "0",
  };

  const headingStyles = {
    fontFamily: "Arial, sans-serif",
    fontSize: isMobile ? "20px" : "28px",
    fontWeight: "bold",
    wordSpacing: "2px",
    color: "#fff",
  };

  const ImgPart = {
    height: "calc(4in - 1.3in)",
    backgroundColor: "#FFFFFF",
    padding: isMobile ? "20px" : "50px",
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={ClientContainer}>
      <div style={HeadPart}>
        <h1 style={headingStyles}>Who are with us</h1>
      </div>
      <div style={ImgPart}>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          arrows={false}
        >
          {logos.map((logo) => (
            <div key={logo.id} style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={logo.src}
                alt={`logo-${logo.id}`}
                style={{
                  width: isMobile ? "80%" : "50%",
                  height: "auto",
                  aspectRatio: "3/2",
                  objectFit: "contain",
                  mixBlendMode: "color-burn",
                }}
                onError={(e) => { e.target.src = "/Images/default-logo.png"; }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedClients;
