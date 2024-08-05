import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const trainers = [
  {
    name: "Hari Prakash",
    title: "Mainframe Developer",
    image: "/Images/TrainerProfiles/HariPrakash.jpg",
    description: "Mainframe Architect with 12+ years of experience designing, building, and implementing secure, scalable enterprise solutions on z/OS platforms."
  },
  {
    name: "Ameet Parse",
    title: "Cloud Security Developer & AI Lead",
    image: "/path/to/jane-smith.jpg",
    description: "Cloud Security Architect & AI Lead with 22+ years of experience securing and optimizing cloud environments with integrated AI functionalities."
  },
  {
    name: "Praveen",
    title: "Senior Test Engineer",
    image: "/path/to/john-doe.jpg",
    description: "Senior Test Engineer with 8+ years of experience designing, executing, and automating tests to ensure software quality across the development lifecycle."
  },
  {
    name: "Dhruv Singh",
    title: "Power BI Developer",
    image: "/path/to/jane-smith.jpg",
    description: "Power BI Architect with 8+ years of experience designing, implementing, and managing the overall Power BI strategy for the organization."
  },
  {
    name: "Rakesh",
    title: "Senior Data Analyst",
    image: "/path/to/jane-smith.jpg",
    description: "Senior Data Analyst with 8+ years of experience driving data-driven decision making through analysis, visualization, and automation."
  },
  {
    name: "Mannoj Pandetti",
    title: "Talent Development Specialist",
    image: "/Images/TrainerProfiles/Mannoj.jpg", // Add a default image
    description: "Manoj Pandetti, an experienced professional with 8+ years in soft skills training for communication, interview, and behavioral skills in a leading MNC.."
  }
  // Add more trainer profiles as needed
];

const TrainerProfiles = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box
      sx={{
        width: '99%',
        padding: '20px',
        // backgroundColor: '#f5f5f5',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Plus Jakarta Sans',
          fontWeight: 700,
          fontSize: '2rem',
          color: '#333',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        Learn From Industry Experts
      </Typography>
      <Slider {...settings}>
        {trainers.map((trainer, index) => (
          <Box key={index} sx={{ padding: '10px' }}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            >
              <CardMedia
                component="img"
                height="370"
                image={trainer.image}
                alt={trainer.name}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    color: '#000',
                  }}
                >
                  {trainer.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: "bold",
                    fontSize: '1rem',
                    color: '#666',
                  }}
                >
                  {trainer.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    color: '#333',
                  }}
                >
                  {trainer.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TrainerProfiles;
