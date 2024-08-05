import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const WhoWeAre = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const containerStyle = {
    height: "auto",
    width: "100%",
    backgroundColor: "#171421",
  };

  const leftPartStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: isMobile ? "10%" : "5%",
    padding: "20px",
  };

  const rightPartStyle = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: isMobile ? "1.8rem" : "2rem",
    fontWeight: "bold",
    color: "#683FBE",
    marginBottom: "10px",
  };

  const bodyStyle = {
    fontSize: isMobile ? "1.2rem" : "1rem",
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "Regular",
    fontWeight: 400,
    color: "white",
    width:'100%',
    lineHeight: isMobile ? "1.5" : "1.8",
    letterSpacing: "0.02em",
    wordSpacing: "0",
    padding: "0px",
    textAlign:isMobile?"center": "justify",
  };

  const [showBody, setShowBody] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const headingAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(50px)",
    },
    config: { duration: 2000 },
  });

  const bodyAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(50px)",
    },
    config: { duration: 2000 },
  });

  useEffect(() => {
    if (inView) {
      setShowBody(true);
    }
  }, [inView]);

  return (
    <Container maxWidth="100%" style={containerStyle}>
      <Grid container spacing={0} style={{ height: "100%" }}>
        <Grid item xs={12} md={7} style={leftPartStyle} ref={ref}>
          <animated.div style={headingAnimation}>
            <Typography variant="h4" component="div" style={headingStyle}>
              Who We Are
            </Typography>
          </animated.div>
          {showBody && (
            <animated.div style={bodyAnimation}>
              <Typography variant="body1" style={bodyStyle}>
                Tech Job Solution : Where Dreams Meet Opportunities Welcome to
                Tech Job Solution, your gateway to a brighter future in the tech
                industry. We are more than just a training and placement company
                – we are your partners in success, committed to guiding you
                towards your professional goals with passion and dedication. Our
                comprehensive range of services, including technical training,
                internship placements, and communication skills development, are
                designed to empower individuals with the knowledge and
                experience they need to excel in today's fast-paced world. What
                sets us apart is our unwavering focus on excellence and
                innovation. Our team of experienced trainers, comprised of
                industry experts with years of hands-on experience, bring a
                unique perspective to the classroom, ensuring that you receive
                the most relevant and up-to-date education possible. Combined
                with our state-of-the-art infrastructure and supportive learning
                environment, Tech Job Solution offers a holistic approach to
                career development that sets you up for success from day one.
                Whether you're a recent graduate looking to kickstart your
                career or a student eager to gain practical experience, Tech Job
                Solution has something for everyone. Join us and unlock your
                full potential as you embark on a journey towards a brighter
                tomorrow.
              </Typography>
            </animated.div>
          )}
        </Grid>
        <Grid item xs={12} md={5} style={rightPartStyle}>
          <img
            src="/Images/About Us Page Images/aboutus.png"
            alt="Placeholder"
            style={{ maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhoWeAre;
 