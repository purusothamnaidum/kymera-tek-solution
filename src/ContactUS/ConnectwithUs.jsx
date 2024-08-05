import { Box, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from '@mui/material';
import FirstBox from "./FirstBox";
import SecondBox from "./SecondBox";

const ContactUsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          bgcolor: "#1F305e",
          padding: isMobile ? "50px" : "100px",
        }}
      >
        <Typography
          sx={{
            fontSize: isMobile ? "40px" : "60px",
            textAlign: "center",
            color: "white",
          }}
        >
          Contact Us
        </Typography>
      </Box>

      {/* First overlapping box */}
      <FirstBox />

      {/* Second overlapping box */}
      <SecondBox />

      <Box
        sx={{
          width: "100%",
          height: isMobile ? "900px" : "700px",
          bgcolor: "#C0C0C0",
          zIndex: "0",
        }}
      />
    </Box>
  );
};

export default ContactUsPage;
