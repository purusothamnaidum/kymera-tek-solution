import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const SkillsList = () => {
  const prePlacementSkills = [
    "Daily Interaction Session",
    "Self Intro Preparation",
    "Weekly AI Mock Interview",
    "Communication Skills",
    "Resume Building",
    "Resume Uploading – LinkedIn, Naukri etc.",
    "LinkedIn profile optimization",
    "Interview Preparation",
    "Mock Interviews & Screening",
    "Interview Tips And Tricks",
  ];

  const postPlacementSkills = [
    "Mail Etiquettes",
    "Meeting Etiquettes",
    "Minutes Of Meeting(MOM)",
    "Agile Methodology",
    "Jira – Scrum Portal Hands On",
    "Timesheet Entry",
    "Corporate IT Culture",
    "Log-in To Log-out Activities",
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const styles = {
    container: {
      backgroundColor: '#171421',
      color: '#ffffff',
      padding: isMobile ? '2rem' : '5rem',
      width: '100%',
      margin: 'auto',
    },
    mainHeading: {
      color: '#683fbe',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      marginBottom: '2rem',
      fontFamily: 'Arial, sans-serif',
      fontWeight: 700,
    },
    subHeading: {
      color: '#683fbe',
      textAlign: 'center',
      marginBottom: '1rem',
      fontFamily: 'Arial, sans-serif',
      fontWeight: 600,
      fontSize: isMobile ? '18px' : '22px',
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.75rem',
      listStyle: 'none',
    },
    listItemIcon: {
      width: '24px',
      height: '24px',
      marginRight: '0.75rem',
    },
  };

  return (
    <Box style={styles.container}>
      <Grid container spacing={isMobile ? 5 : 20}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom style={styles.subHeading}>
            SKILLS TO CRACK THE JOB INTERVIEW
          </Typography>
          <Box component="ul" style={{ paddingLeft: 0 }}>
            {prePlacementSkills.map((skill, index) => (
              <Box component="li" key={index} style={styles.listItem}>
                <img src="/Images/Courses Images/PC.svg" alt="icon" style={styles.listItemIcon} />
                <Typography variant="h6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 400, marginTop: '10px' }}>
                  {skill}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom style={styles.subHeading}>
            SKILLS REQUIRED AFTER PLACEMENT
          </Typography>
          <Box component="ul" style={{ paddingLeft: 0 }}>
            {postPlacementSkills.map((skill, index) => (
              <Box component="li" key={index} style={styles.listItem}>
                <img src="/Images/Courses Images/PC.svg" alt="icon" style={styles.listItemIcon} />
                <Typography variant="h6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 400, marginTop: '10px' }}>
                  {skill}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsList;
