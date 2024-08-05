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
      name: "Sravan Kumar",
      text: "Best training institute in Hyderabad. You can get individual attention from the trainers, with only 10 people in the batch. I have taken offline training, so that I can send sometime in the institute for training and to improve my communication skills. Overall it helped me a lot in getting a good job and improve my career.",
      rating: 5,
    },
    {
      avatarSrc: "https://example.com/avatar1.jpg",
      name: "Zeyaul Hoda",
      text: "I completed the Power BI training program. The instructors are exceptionally knowledgeable and skilled in Power BI, making complex concepts easy to understand.Apart from technical skills there are very well organised soft skill trainer who will guide and make you understand about the environment of IT industry, interview, behaviour in organisation and all the rules of organisation..",
      rating: 4,
    },
    {
      avatarSrc: "https://example.com/avatar1.jpg",
      name: "RANA DEEP",
      text: "I'm sharing this with own experience which I had earlier,this is the purely training centre which you had to gain skills.After that job placements would be provided if you selected it's your luck if not company won't put any efforts to give a job . Think and join if you want to learn some skills.",
      rating: 3,
    },
    {
      avatarSrc: "https://example.com/avatar1.jpg",
      name: "Sunil Ravula",
      text: "The environment of the institute and the trainers are very friendly to learn the technologies and the management really helped me to crack the interview along with the communication skills.Happy learner of power BI at TJS,thanks to the team TJS.",
      rating: 4,
    },
    {
      avatarSrc: "https://example.com/avatar2.jpg",
      name: "Mounika Kanagala",
      text: "Tech job solution provides the best training in all technologies with real time experience with a real time work environment.The Trainers &  Management really supported me to crack the interview with a best ctc.Thank you team TJS...",
      rating: 5,
    },
    // Add more testimonials as needed
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
