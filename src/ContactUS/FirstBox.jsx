import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";

const FirstBox = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const BoxStyles = {
    width: "320px",
    height: isMobile ? "290px" : "320px",
    bgcolor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12px",
    marginRight: "10px",
  };

  const boxWidth = isMobile ? "90%" : "320px";
  const boxMargin = isMobile ? "10px" : "10px";

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: isMobile ? "1200px" : "200px",
          bgcolor: "#1F305E",
          zIndex: "0",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: isMobile ? "34%" : "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "space-around",
          width: "95%",
          zIndex: "1",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Box sx={{ ...BoxStyles, width: boxWidth, margin: boxMargin }}>
          <img src="/Images/Contact/Location.jpg" alt="Your mage" width={65} />
          <h5
            style={{
              fontFamily: "Montserrat, sans-serif",
              textTransform: "uppercase",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            OUR MAIN OFFICE
          </h5>
          <p
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontSize: "18px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            A-0, 3rd floor, 11, MKB SQUARE BUILDING, near Bank Of Baroda,
            Marathahalli, Bengaluru, Karnataka 560037{" "}
          </p>
        </Box>

        <Box sx={{ ...BoxStyles, width: boxWidth, margin: boxMargin }}>
          <img src="/Images/Contact/Phone.jpg" alt="phone" width={65} />
          <h5
            style={{
              fontFamily: "Montserrat, sans-serif",
              textTransform: "uppercase",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            PHONE NUMBER
          </h5>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "18px" }}>
            +91 733-8279026
          </p>
        </Box>

        <Box sx={{ ...BoxStyles, width: boxWidth, margin: boxMargin }}>
          <img src="/Images/Contact/Fax.jpg" alt="fax" width={65} />
          <h5
            style={{
              fontFamily: "Montserrat, sans-serif",
              textTransform: "uppercase",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            FAX
          </h5>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "18px" }}>
            +91 733-8279026
          </p>
        </Box>

        <Box sx={{ ...BoxStyles, width: boxWidth, margin: boxMargin }}>
          <img src="/Images/Contact/E-Mail.jpg" alt="mail" width={65} />
          <h5
            style={{
              fontFamily: "Montserrat, sans-serif",
              textTransform: "uppercase",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            EMAIL
          </h5>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "18px" }}>
            kymerateksolutions@gmail.com
          </p>
        </Box>
      </Box>
    </>
  );
};

export default FirstBox;
