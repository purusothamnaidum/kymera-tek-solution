import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const StarRating = ({ rating }) => {
  const filledStars = "★".repeat(rating);
  const emptyStars = "☆".repeat(5 - rating);

  return (
    <Box>
      {filledStars}
      {emptyStars}
    </Box>
  );
};

const TestimonialCard = ({ avatarSrc, name, text, rating }) => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <Card sx={{ mr: "25px", height: 330 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              src={avatarSrc}
              alt={name}
              sx={{ bgcolor: randomColor, color: "#fff" }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontFamily: "Arial",
                fontSize: 18,
                fontWeight: "bold",
                lineHeight: 1.5,
              }}
            >
              {name}
            </Typography>
            <StarRating rating={rating} />
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          sx={{
            marginTop: 2,
            textAlign: "left",
            fontFamily: "Arial",
            fontSize: 16,
            lineHeight: 1.5,
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

const TestimonialSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const testimonials = [
    {
      avatarSrc: "https://example.com/avatar1.jpg",
      name: "Karthik V",
      text: "The DevSecOps with AWS training was a game-changer for me. The hands-on experience and real-world examples provided by the instructor helped me master the concepts quickly. I feel more confident in my ability to secure and manage cloud environments.",
      rating: 4,
    },
    {
      avatarSrc: "https://example.com/avatar2.jpg",
      name: "Swathi T",
      text: "This training was exactly what I needed to advance my career. The instructor's deep knowledge of AWS and DevSecOps made complex topics easy to understand. The practical sessions were invaluable, and I now have the skills to implement DevSecOps practices in my organization.",
      rating: 4,
    },
    {
      avatarSrc: "https://example.com/avatar1.jpg",
      name: "Purusotham U",
      text: "Taking this course was one of the best decisions I've made for my professional development. The training covered everything from basic to advanced topics, and the real-world applications were particularly helpful. I'm now able to apply what I've learned directly to my work.",
      rating: 5,
    },
    {
      avatarSrc: "https://example.com/avatar1.jpg",
      name: "Kiran T",
      text: "The DevSecOps with AWS course exceeded my expectations. The curriculum was comprehensive, and the instructor's teaching style was engaging. The best part was the focus on security practices integrated into the DevOps pipeline, which is crucial in today's tech landscape.",
      rating: 4,
    },
    {
      avatarSrc: "https://example.com/avatar1.jpg",
      name: "Raju B",
      text: "I was impressed with the depth of the content and the practical exercises. The course covered everything from the basics to advanced topics, making it suitable for both beginners and experienced professionals.",
      rating: 4,
    },
    {
      avatarSrc: "https://example.com/avatar2.jpg",
      name: "Vishan Singh",
      text: "The training provided a comprehensive overview of DevSecOps principles and AWS tools. The instructors were top-notch, and the interactive sessions kept me engaged throughout. I highly recommend this course to anyone looking to enhance their DevSecOps skills.",
      rating: 4,
    },
  ];

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display one slide at a time
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Box sx={{ padding: isMobile ? "5px" : "20px" }}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: isMobile ? "22px" : "35px",
          marginBottom: 2,
          fontFamily: "'Jost', sans-serif",
          paddingTop: "10px",
          paddingBottom: "10px",
          position: "relative",
          color: "black",
          "&::after": {
            content: "''",
            position: "absolute",
            left: "50%",
            bottom: "-10px",
            transform: "translateX(-50%)",
            width: isMobile ? "100%" : "60%",
            height: "5px",
            backgroundColor: "#683fbe",
            borderRadius: "50%", // Creates the curved effect
          },
        }}
      >
        A few reviews from our students
      </Typography>

      <Box
        borderRadius={2}
        p={isMobile ? 1 : 4}
        width="100%"
        ml={isMobile ? 2 : 0}
      >
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} px={1}>
              <TestimonialCard
                avatarSrc={testimonial.avatarSrc}
                name={testimonial.name}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default TestimonialSlider;
