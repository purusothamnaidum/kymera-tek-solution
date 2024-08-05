import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const container = {
  height: "5in", // Setting height to 5 inches
  width: "100%", // Setting width to 100%
  backgroundColor: "#171421", // Setting background color
  display: "flex", // Enable flexbox layout
  flexDirection: "column", // Arrange children in a column
};

const headPart = {
  height: "1in", // Setting height to 1 inch
  width: "100%", // Setting width to 100%
  backgroundColor: "#171421", // Background color for head part
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardPart = {
  height: "calc(4in - 2in)", // Remaining height
  width: "100%", // Setting width to 100%
  justifyContent: "center",
  alignItems: "center",
};

const headText = {
  fontFamily: "Plus Jakarta Sans", // Setting font family
  fontWeight: 800, // Setting font weight
  fontSize: "3rem", // Setting font size
  lineHeight: "162%", // Setting line height
  paddingBottom : "-2rem",
  width: "fit-content", // Setting width
  color: "#fff", // Setting text color
  textAlign: "center", // Setting text alignment
};

const testimonialsData = [
  {
    id: 1,
    name: "- Lakshmi Yakkateela",
    feedback:
      "Tech Job Solutions stands out! They offer comprehensive training, including real-time scenario-based departmental knowledge, interactive trainer sessions, scrum & communication workshops, and even mock interviews. It's a one-stop shop for anyone looking to switch careers from non-IT to IT – highly recommended!",
  },
  {
    id: 2,
    name: "- Sravan Kumar",
    feedback:
      "Best training institute in Hyderabad. You can get individual attention from the trainers, with only 10 people in the batch. I have taken offline training, so that I can send sometime in the institute for training and to improve my communication skills. Overall it helped me a lot in getting a good job and improve my career.",
  },
  {
    id: 3,
    name: "- Bhogapurapu Sai kiran",
    feedback:
      "Highly impressed with the institute's training and placement for technologies like MuleSoft and Power BI. The real-time employee instruction proved invaluable for future career prospects. A big thank you to the management for this exceptional establishment in Hyderabad.",
  },
  {
    id: 4,
    name: "- Mounika Kanagala",
    feedback:
      "Tech Job Solution provided exceptional training across various technologies.  Their real-time experience and work environment simulation were invaluable. The trainers and management went above and beyond, supporting me in landing a high-paying job with their interview coaching.",
  },
  {
    id: 5,
    name: "- Deepika Akula",
    feedback:
      "Best institute for DevOps training with 100% placements. Tech Job Solution provides real-time work experience along with training by making us on real-time scenarios on DevOps which helped me to crack the interview with high confidence. So, for 100% placements go for Tech Job Solution.",
  },
  {
    id: 6,
    name: "- Jagadeesh Varma",
    feedback:
      "Here in Tech Job solution, Training of various technologies and tools relevant to IT will be given and Best part is 100% placement service. Students over here are getting placed into good MNC's with minimum package of 9 Lakhs per anum. I personally got placed into Top MNC with dream package of 9 lpa related to Dell boomi within 3 months of time period",
  },
  {
    id: 7,
    name: "- Aravind Kopparam",
    feedback:
      "Hi....i was working  as an lecturer prior to joining the institute to enter in to IT sector from a NON-IT background. The training of 3 months and the support and drive received from the institute made it possible for me to enter and sustain self in the IT environment comfortably . Now i am living my dream as an IT professional Thanks to TECHJOBS",
  },
  {
    id: 8,
    name: "- Shiva Naresh",
    feedback:
      "Thanks to TechJob Solution's guidance, I successfully landed a placement despite a career gap. I'm thrilled to be starting this new opportunity with a starting salary of 9LPA. I truly appreciate their support in helping me achieve this career milestone.",
  },
  {
    id: 9,
    name: "- Zeyaul Hoda",
    feedback:
      "The Power BI training program exceeded expectations. The instructors' expertise made complex concepts clear, while dedicated soft skills trainers equipped me for the IT industry.  A well-structured curriculum with hands-on exercises and real-world examples solidified learning",
  },
  // Add more testimonials as needed
];

const CustomCard = styled(Card)(({ theme }) => ({
  height: "330px", // Adjust the height of the card
  width: "95%", // Adjust the width of the card
  margin: "-5% auto", // Center the card horizontally
  backgroundColor: "#1c1929",
  
  borderRadius:'16px'

}));

const CustomGridItem = styled(Grid)(({ theme }) => ({
  padding: "10px", // Adjust the spacing between cards
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Feedback = () => {
  return (
    <Box sx={container}>
      <Box sx={headPart}>
        <Typography variant="h6" sx={headText}>
          Testimonials
        </Typography>
      </Box>
      <Box sx={cardPart}>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          arrows={false} // Remove arrows
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={10000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {testimonialsData.map((testimonial) => (
            <CustomGridItem key={testimonial.id} item>
              <CustomCard>
                <CardContent sx={{padding:"30px"}}>
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      lineHeight: "154%",
                      color: "#FFFFFF",
                      fontFamily: "Inter, sans-serif",
                      textAlign: "left",
                      paddingTop: "5%",
                     
                    }}
                  >
                    {testimonial.feedback}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "1.25rem",
                      textAlign: "right",
                      color: "#FF5800",
                      paddingTop: "2%"
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                </CardContent>
              </CustomCard>
            </CustomGridItem>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Feedback;
