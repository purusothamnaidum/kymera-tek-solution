import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CompanyStats = () => {
  const [experienceYears, setExperienceYears] = useState(0);
  const [hiringPartners, setHiringPartners] = useState(0);
  const [batches, setBatches] = useState(0);
  const [industryExperts, setIndustryExperts] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const companyStatsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const experienceYearsInterval = setInterval(() => {
          setExperienceYears(prevValue => {
            const newValue = prevValue + 1;
            return newValue >= 6 ? 6 : newValue;
          });
        }, 300);

        const hiringPartnersInterval = setInterval(() => {
          setHiringPartners(prevValue => {
            const increment = 1;
            const newValue = prevValue + increment;
            return newValue >= 60 ? 60 : newValue;
          });
        }, 100);

        const batchesInterval = setInterval(() => {
          setBatches(prevValue => {
            const increment = 1;
            const newValue = prevValue + increment;
            return newValue >= 100 ? 100 : newValue;
          });
        }, 80);

        const industryExpertsInterval = setInterval(() => {
          setIndustryExperts(prevValue => {
            const newValue = prevValue + 1;
            return newValue >= 25 ? 25 : newValue;
          });
        }, 100);

        return () => {
          clearInterval(experienceYearsInterval);
          clearInterval(hiringPartnersInterval);
          clearInterval(batchesInterval);
          clearInterval(industryExpertsInterval);
        };
      }
    }, { threshold: 0.1 });

    if (companyStatsRef.current) {
      observer.observe(companyStatsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const boxStyles = {
    height: "auto",
    width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: isMobile?"column":"row",
    gap: isMobile?"10px":"6px",
    backgroundColor: "#683FBE",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
    padding: "20px",
  };

  const itemStyles = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "1rem",
  };

  const textStyles = {
    fontSize: "4rem",
  };

  const subTextStyles = {
    fontSize: "1.3125rem",
  };

  return (
    <Box sx={{ bgcolor: "#171421", width: '100%', padding: '50px' }}>
      <Box ref={companyStatsRef} sx={boxStyles}>
        <Box sx={itemStyles}>
          <Typography variant="h5" component="span" sx={textStyles}>
            {experienceYears}+
          </Typography>
          <Typography variant="body1" component="span" sx={subTextStyles}>
            years of Experience
          </Typography>
        </Box>
        <Box sx={itemStyles}>
          <Typography variant="h5" component="span" sx={textStyles}>
            {hiringPartners}+
          </Typography>
          <Typography variant="body1" component="span" sx={subTextStyles}>
            Hiring Partners
          </Typography>
        </Box>
        <Box sx={itemStyles}>
          <Typography variant="h5" component="span" sx={textStyles}>
            {batches}+
          </Typography>
          <Typography variant="body1" component="span" sx={subTextStyles}>
            Batches
          </Typography>
        </Box>
        <Box sx={itemStyles}>
          <Typography variant="h5" component="span" sx={textStyles}>
            {industryExperts}+
          </Typography>
          <Typography variant="body1" component="span" sx={subTextStyles}>
            Industry Experts
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyStats;
