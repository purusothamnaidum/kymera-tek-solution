import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Divider, Button, Modal, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TabPanel from "./TabPanel";
import ContactForm from "../ContactForms/CoursesContactForm";


const CourseCurriculum = ({ weekContent, pdfLink }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    setDownloadLink(pdfLink);
    handleClose();
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "#171421", padding: isMobile ? "20px" : "0px 60px" }}>
      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
        <Tabs
          orientation={isMobile ? "horizontal" : "vertical"}
          variant="scrollable"
          value={selectedTab}
          onChange={handleChange}
          sx={{
            width: isMobile ? "100%" : "19%",
            marginLeft: "0px",
            color: "white",
            "& .MuiTabs-flexContainer": {
              flexDirection: isMobile ? "row" : "column",
            },
          }}
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          {weekContent.map((_, index) => (
            <Tab
              key={index}
              label={`Week ${index + 1}`}
              sx={{
                fontSize: "1rem",
                margin: isMobile ? "0 .25rem" : "0 .75rem",
                fontWeight: 500,
                lineHeight: "130%",
                fontFamily: "Plus Jakarta Sans",
                color: selectedTab === index ? "white" : "grey",
                "&.Mui-selected": {
                  color: "white",
                },
              }}
            />
          ))}
        </Tabs>
        {!isMobile && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              m: 2,
              width: "2px",
              height: "auto",
              borderRadius: "20px",
              backgroundColor: "white",
            }}
          />
        )}
        <Box sx={{ flex: "1 1 auto", position: "relative", width: isMobile ? "100%" : "78%" }}>
          {weekContent.map((weekData, index) => (
            <TabPanel key={index} value={selectedTab} index={index}>
              <Typography
                sx={{
                  fontSize: "2rem",
                  lineHeight: "140%",
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 600,
                  color: "#a48bd9",
                }}
              >
                {weekData.heading}
              </Typography>
              {weekData.points.map((point, pointIndex) => (
                <Box
                  key={pointIndex}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "30px",
                  }}
                >
                  <img
                    src="/Images/Courses Images/PC.svg"
                    alt={`Week ${index + 1} Image`}
                    style={{ marginRight: "1rem" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      lineHeight: "140%",
                      color: "white",
                    }}
                  >
                    {point}
                  </Typography>
                </Box>
              ))}
            </TabPanel>
          ))}
        </Box>
        
          <Box
            sx={{
              width: isMobile?"100%":"51%",
              height: isMobile?"auto":"350px",
            
              margin: isMobile?"15px 0px":"25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: isMobile?"30px":"2rem",
              gap: "1rem",
              borderRadius: ".75rem",
              background: "#221d32",
              boxShadow: "0 2px 40px 0 rgba(0, 0, 0, .2)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  width: "5rem",
                  height: "3rem",
                  background:
                    "linear-gradient(145deg, rgba(104, 63, 190, .2), rgba(73, 48, 128, .2))",
                  filter: "drop-shadow(0 2px 20px rgba(99, 52, 200, .06))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/Images/Courses Images/PC1.svg"
                  alt="Your Image"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    filter: "drop-shadow(0 1.5px 15px rgba(99, 52, 200, .06))",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans",
                    fontSize: "1.55rem",
                    paddingTop: "15px",
                    fontWeight: 400,
                    color: "white",
                    lineHeight: "140%",
                    background:
                      "linear-gradient(130deg, #fff, hsla(0, 0%, 100%, .5))",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Explore our detailed curriculum!
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: ".875rem",
                    paddingTop: "15px",
                    lineHeight: "175%",
                    color: "hsla(0, 0%, 100%, .7)",
                  }}
                >
                  Understand the in-depth concepts and tools you will learn
                  throughout the program.
                </Typography>
              </Box>
            </Box>
            <Button
              onClick={handleOpen}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                color: "white",
                background: "#683FBE",
                transition: "background .1s ease-in-out",
                cursor: "pointer",
                lineHeight: "130%",
                padding: "12px",
                borderRadius: ".5rem",
                marginTop: "1rem",
              }}
            >
              Download Detailed Curriculum
              <img
                src="/Images/Courses Images/PC2.svg"
                alt="Your Imge"
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
            </Button>
          </Box>
        
      </Box>
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
      {downloadLink && (
        <a href={downloadLink} target="_blank" rel="noopener noreferrer" download>
          Download your PDF
        </a>
      )}
    </Box>
  );
};

export default CourseCurriculum;
