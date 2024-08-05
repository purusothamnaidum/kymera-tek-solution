import { Box, Button, Typography } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const getCourseLink = (course) => {
  switch (course) {
    case "testing":
      return "https://chat.whatsapp.com/IZNLyZtlQQ7CiYKDM9PRmo";
    case "aws":
      return "https://chat.whatsapp.com/GQBsGRXCfG9A1kTJlw4TRg";
    case "mainframe":
      return "https://example.com/mainframes";
    case "cybersecurity":
      return "https://example.com/cybersecurity";
    case "python":
      return "https://example.com/python";
    case "java":
      return "https://example.com/java";
    default:
      return "#";
  }
};

const Dummy = () => {
  return (
    <Box sx={{ textAlign: "center", padding: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: "zoomInOut 1.5s ease-in-out",
        }}
      >
        <WhatsAppIcon
          sx={{
            color: "#25D366",
            mr: 1,
            fontSize: 100,
            justifyContent: "center",
            alignItems: "center",
            animation: "blinking 2s infinite",
          }}
        />
      </Box>
      <Typography
        sx={{
          mt: 2,
          fontSize: 18,
          fontFamily: "Arial, sans-serif",
          fontWeight: 500,
          color: "#ED9121",
        }}
      >
        Join in Our WhatsApp Community to get Course Details
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button
          variant="contained"
          sx={{
            padding: 1,
            width: "10%",
            background: "linear-gradient(45deg, #32CD32, #006400)",
            color: "white",
            fontWeight: 400,
            marginTop: 2,
            fontSize: 15,
            "&:hover": {
              background: "linear-gradient(45deg, #006400, #32CD32)",
            },
          }}
          href={getCourseLink()}
        >
          Click Here
        </Button>
      </Box>
      <style jsx global>{`
        @keyframes zoomInOut {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes blinking {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </Box>
  );
};

export default Dummy;
