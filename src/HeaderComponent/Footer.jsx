import { Box, Typography, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        flexGrow: "grow",
        padding: "35px",
        backgroundImage: "url('/Images/HomePage/Footer.jpg')",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      {/* Box 1 */}
      <Box
        sx={{
          width: isMobile ? "100%" : "38%",

          color: "white",
          textAlign: "left",
          padding: isMobile ? "10px 10px 10px 13px" : "10px 10px 20px 30px", // Top, right, bottom, left padding
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Noto Sans",
            fontWeight: 500,
            lineHeight: "1.6",
            display: "block",
            letterSpacing: "1.3px",
          }}
        >
          Kymera Tek Solutions
        </Typography>
        <Typography
          sx={{
            fontFamily: "Noto Sans",
            fontWeight: 300,
            lineHeight: "2",
            display: "block",
            letterSpacing: "0.5px",
          }}
        >
          At Kymera Tek Solutions , We empower businesses with innovative
          DevOps, full-stack development, and HR training. Our goal is to drive
          sustainable growth by seamlessly integrating technology and talent.
        </Typography>

        <Grid
          container
          spacing={isMobile ? 5 : 4} // Increase the spacing value for mobile view
          mt={0.5}
          ml={isMobile ? 0 : 0}
          alignItems="center"
          paddingTop={"10px"}
          sx={{}}
        >
          <Grid item>
            <a href="https://www.facebook.com/techjobsolution?mibextid=kFxxJD">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{
                  color: "#3b5998",
                  fontSize: isMobile ? "40px" : "30px",
                }}
              />
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.linkedin.com/company/tech-job-solution/">
              <FontAwesomeIcon
                icon={faLinkedin} // Replaced with LinkedIn icon
                style={{
                  color: "#0e76a8",
                  fontSize: isMobile ? "40px" : "30px",
                }} // LinkedIn color
              />
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.instagram.com/techjobsolution?igsh=ZnlhNXhnMzViazZq">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{
                  color: "#C13584",
                  fontSize: isMobile ? "40px" : "30px",
                }}
              />
            </a>
          </Grid>
          <Grid item>
            <a href="https://youtube.com/@techjobsolution?si=P4sXHJMIVO-sIv6G">
              <FontAwesomeIcon
                icon={faYoutube} // Added YouTube icon
                style={{
                  color: "#FF0000",
                  fontSize: isMobile ? "40px" : "30px",
                }} // YouTube color
              />
            </a>
          </Grid>
        </Grid>
      </Box>

      {/* Box 2 */}
      <Box
        sx={{
          width: isMobile ? "88%" : "25%",
          color: "white",
          padding: isMobile ? "10px" : "30px 10px 20px 50px", // Top, right, bottom, left padding
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "left" : "left",
        }}
      >
        <Typography
          sx={{ fontSize: isMobile ? "28px" : "24px", fontWeight: "bold" }}
        >
          Courses
        </Typography>
        <ul
          style={{ listStyleType: "none", textAlign: "left", paddingLeft: "0" }}
        >
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ fontSize: "15px" }}>
              <Link
                to="/course/devsecops"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                DevSecOps
              </Link>
            </Typography>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ fontSize: "15px" }}>
              <Link
                to="/course/full-stack-development"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Full Stack Development
              </Link>
            </Typography>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ fontSize: "15px" }}>
              <Link
                to="/course/hr-training"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                HR Training
              </Link>
            </Typography>
          </li>
        </ul>
      </Box>

      {/* Box 3 */}
      <Box
        sx={{
          width: isMobile ? "81%" : "36%",

          color: "white",
          padding: isMobile ? "10px" : "30px 10px 20px 30px", // Top, right, bottom, left padding
          display: "flex",

          flexDirection: "column",
          alignItems: "left",

          backgroundSize: "cover", // Ensure the background image covers the entire box
        }}
      >
        <Typography
          sx={{
            fontSize: isMobile ? "28px" : "24px",
            marginBottom: isMobile ? "20px" : "10px",
            fontWeight: "bold",
          }}
        >
          Contact Details
        </Typography>

        <Grid container spacing={isMobile ? 0 : 2} mt={0.5} alignItems="center">
          <Grid item sx={{ fontSize: "15px" }}>
            <FontAwesomeIcon icon={faPhone} />
          </Grid>

          <Grid item>
            <Typography
              sx={{
                fontSize: "15px",
                ml: isMobile ? "15px" : "",
              }}
            >
              +91 733-8279026{" "}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={isMobile ? 0 : 2} mt={0.5} alignItems="center">
          <Grid item>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#FFA500" }} />
          </Grid>

          <Grid item>
            <Typography
              sx={{
                fontSize: "14px",
                ml: isMobile ? "15px" : "",
              }}
            >
              kymerateksolutions@gmail.com
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center" mt={0}>
          <Grid item sx={{ fontSize: "15px" }}>
            <FontAwesomeIcon icon={faLocationDot} />
          </Grid>
          <Grid item>
            <Typography>
              <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                Marathahalli
              </span>
            </Typography>
          </Grid>
          <Grid item sx={{ fontSize: "15px" }}>
            <Typography
              sx={{
                ml: "28px",
                fontSize: "14px",
                textAlign: "left",
                mt: "-15px",
              }}
            >
              A-0, 3rd floor, 11, MKB SQUARE BUILDING, near Bank Of Baroda,
              Marathahalli, Bengaluru, Karnataka 560037
            </Typography>
          </Grid>
        </Grid>

        <img
          src="/Images/razorpay.svg"
          alt="payment"
          style={{
            width: "70%",
            padding: "25px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
