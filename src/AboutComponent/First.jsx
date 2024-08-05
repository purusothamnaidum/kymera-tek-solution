import React, { useRef, useState, useEffect } from "react";
import { Typography, Container } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { useIntersection } from "react-use";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const AboutContainer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const containerStyle = {
    height: "auto",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#171421",
    // Add more styles as needed
  };

  const aboutUsStyle = {
    textAlign: "center",
    marginTop: "8%",
  };

  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const intersection1 = useIntersection(textRef1, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });

  const intersection2 = useIntersection(textRef1, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });

  const [showText2, setShowText2] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText2(true);
    }, 1000); // Show the second text after 5 seconds
    return () => clearTimeout(timeout);
  }, []);

  const animationProps1 = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: {
      opacity: intersection1 && intersection1.intersectionRatio >= 0.5 ? 1 : 0,
      transform:
        intersection1 && intersection1.intersectionRatio >= 0.5
          ? "translateY(0)"
          : "translateY(50px)",
    },
    config: { tension: 100, friction: 100 },
  });

  const animationProps2 = useSpring({
    from: { opacity: 0, transform: "translateY(100px)" },
    to: {
      opacity: intersection2 && intersection2.intersectionRatio >= 0.5 ? 1 : 0,
      transform:
        intersection2 && intersection2.intersectionRatio >= 0.5
          ? "translateY(0)"
          : "translateY(50px)",
    },
    config: { tension: 100, friction: 120 },
  });

  return (
    <Container maxWidth="100%" style={containerStyle}>
      <div style={aboutUsStyle}>
        <animated.div ref={textRef1} style={animationProps1}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: "2.5rem", // equivalent to 23.584px
              fontWeight: 700,
              fontFamily: "Flama Medium, Arial, sans-serif",
              color: "#683FBE",
              letterSpacing: "0.03em",
              lineHeight: "1.25em",
              margin: 0,
              padding: 0,
            }}
          >
            About Us
          </Typography>
        </animated.div>
        {showText2 && (
          <animated.div ref={textRef2} style={animationProps2}>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: "1.1rem",
                fontFamily: "Avenir Next, sans-serif, Arial, sans-serif",
                color: "white",
                lineHeight: "27px",
                letterSpacing: "normal",
                paddingTop: "1%",
                boxSizing: "border-box",
                display: "block",
        
                width:'80%',
                margin:'auto',
                unicodeBidi: "isolate",
                textAlign: "justify",
                marginBottom: isMobile?"":'20px'
              }}
            >
              {/* Add your About Us text here */}
              Tech Job Solution is a premier training and placement company
              dedicated to shaping the future of tech professionals. Established
              with the vision of bridging the gap between education and industry
              requirements, we specialize in providing comprehensive technical
              training, internship placements, and communication skills
              development services. Our mission is to empower individuals with
              the skills and opportunities they need to thrive in the
              competitive landscape of the tech industry.
            </Typography>
          </animated.div>
        )}
      </div>
    </Container>
  );
};

export default AboutContainer;
