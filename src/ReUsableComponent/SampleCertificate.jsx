import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const SampleCertificate = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        height: 'auto',
        width: '100%',
        backgroundColor: '#171421',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: isMobile ? '20px' : '40px',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Plus Jakarta Sans',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: isMobile ? '2rem' : '3rem',
          lineHeight: '140%',
          color: '#FFFFFF',
          marginBottom: isMobile ? '10px' : '20px',
        }}
      >
        Sample Certificate
      </Typography>
      <img 
        src="/Images/Courses Images/Course.jpeg"
        alt="Sample Certificate" 
        style={{
          maxWidth: isMobile ? '90%' : '65%',
          borderRadius: '10px',
        }}
      />
    </Box>
  );
};

export default SampleCertificate;
