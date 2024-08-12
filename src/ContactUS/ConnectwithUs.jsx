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
      }}
    >
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          padding: isMobile ? "50px" : "30px",
          bgcolor: '#90AFC5'
        }}
      >
        <Typography
          sx={{
            fontSize: isMobile ? "40px" : "60px",
            textAlign: "center",
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
          zIndex: "0",
          bgcolor: "#FFE8D4"
        }}
      />
    </Box>
  );
};

export default ContactUsPage;
