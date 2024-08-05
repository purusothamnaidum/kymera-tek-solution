import * as React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CompanyVision = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: '#171421', padding: '40px 0' }}>
      <Container sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
              <CardMedia
                sx={{ height: 180 }}
                image="/Images/About Us Page Images/Mission.jpg"
                title="Image Title 1"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#683FBE",
                    fontWeight: "bold",
                    fontSize: isMobile ? "20px" : "25px",
                  }}
                >
                  OUR MISSION
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: isMobile ? "0.875em" : "1em",
                    color: "black",
                    lineHeight: 1.6,
                    textAlign: "left",
                    wordSpacing: "2px",
                    webkitTextFillColor: "initial",
                  }}
                >
                  Our mission is to Empowering individuals for success with
                  comprehensive technical training, personalized placements, and
                  communication skills development. Fostering a supportive,
                  inclusive environment that nurtures growth and professional
                  excellence.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
              <CardMedia
                sx={{ height: 180 }}
                image="/Images/About Us Page Images/Vision.jpg"
                title="Image Title 2"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#683FBE",
                    fontWeight: "bold",
                    fontSize: isMobile ? "20px" : "25px",
                  }}
                >
                  OUR VISION
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: isMobile ? "0.875em" : "1em",
                    color: "black",
                    lineHeight: 1.6,
                    textAlign: "left",
                    wordSpacing: "2px",
                    webkitTextFillColor: "initial",
                  }}
                >
                  Our vision is to transform lives by equipping individuals with
                  practical technical skills, preparing them to succeed in the
                  digital era. We aim to be a symbol of excellence, renowned for
                  innovative training, precise placements, and holistic
                  communication development, ensuring graduates excel in their
                  careers.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
              <CardMedia
                sx={{ height: 180 }}
                image="/Images/About Us Page Images/Careers.jpg"
                title="Image Title 3"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#683FBE",
                    fontWeight: "bold",
                    fontSize: isMobile ? "20px" : "25px",
                  }}
                >
                  TECH JOB'S CAREER
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: isMobile ? "0.875em" : "1em",
                    color: "black",
                    lineHeight: 1.6,
                    textAlign: "left",
                    wordSpacing: "2px",
                    webkitTextFillColor: "initial",
                  }}
                >
                  We seek driven individuals who embrace our ethos of excellence
                  and innovation. Join us in empowering individuals with technical
                  and communication skills, fostering career success, and shaping
                  a dynamic society. Explore exciting career paths with us and
                  contribute to meaningful professional impacts.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CompanyVision;
