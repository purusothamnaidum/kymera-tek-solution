import React from "react";
import { Helmet } from "react-helmet";

import {
  Container,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  ListItemIcon,
} from "@mui/material";
import {
  LocationOn,
  Business,
  Work,
  Description,
  Group,
  School,
  MonetizationOn,
  Send,
  FiberManualRecord,
} from "@mui/icons-material";

const styles = {
  root: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "800px",
    marginTop: "40px",
  },
  header: {
    textAlign: "center",
    marginBottom: "10px",
    marginLeft: "10px", // Adjusted margin left for header
  },
  location: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
  },
  section: {
    textAlign: "left",
    marginTop: "20px",
    padding: "5px",
    borderRadius: "10px",
    marginLeft: "30px", // Adjusted margin left for sections
    marginRight: "30px", // Adjusted margin right for sections
  },
  applyButton: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    marginTop: "20px",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
  icon: {
    marginRight: "10px",
    fontSize: "24px",
  },
  circleIcon: {
    fontSize: "12px",
    marginRight: "5px",
  },
  listItemIcon: {
    minWidth: "30px", // Decreased minWidth to reduce gap
  },
  listItemText: {
    marginLeft: "-10px", // Negative margin to bring text closer to the icon
  },
};

const sectionColors = [
  "#F25D50", // Red
  "#FFC700", // Yellow
  "#57BB8A", // Green
  "#785EFF", // Purple
  "#1A94BC", // Blue
];

const CareersPage = () => {
  const jobDetails = {
    title: "Customer Service Representative",
    location: "Madhapur, Hyderabad",
    company: "Tech Job Solutions",
    schedule: "June 3 through June 6, 10:30 am - 4:00 pm",
    description: [
      "Respond to inbound calls, emails, and chats with knowledge and efficiency.",
      "Identify and address customer needs, with a goal of total satisfaction.",
      "Provide expert answers to questions about products, pricing, and availability while presenting the value of our product portfolio to customers.",
      "Meet customer-service department metrics and scores.",
    ],
    ageRange: "18 to 30 years",
    experience: "6 months to 18 months in an international BPO/ITES",
    skills: [
      "Experience in an international BPO/ITES environment",
      "Strong English language and Communication skills",
      "Ability to solve problems",
      "Ability to multitask and prioritize",
      "Ability to work individually and as a team member",
    ],
    education: "Bachelor's degree not required",
  };

  const handleClickOpen = () => {};

  return (
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Careers</title>
      </Helmet>
      <Container style={styles.root}>
        <Box style={styles.header}>
          <Typography variant="h4" component="h1">
            TECHJOB IS HIRING
          </Typography>
        </Box>
        <Box style={styles.header}>
          <Typography variant="h4" component="h1">
            {jobDetails.title}
          </Typography>
          <Box style={styles.location}>
            <LocationOn style={{ ...styles.icon, color: sectionColors[0] }} />
            <Typography variant="body1">{jobDetails.location}</Typography>
          </Box>
        </Box>
        <Divider />
        <Box style={styles.section}>
          <Typography
            style={{ fontSize: "26px", fontWeight: 700 }}
            component="h2"
          >
            <Business style={{ ...styles.icon, color: sectionColors[2] }} />{" "}
            {jobDetails.company}
          </Typography>
        </Box>
        {/* <Box style={styles.section}>
        <Typography style={{fontSize:'16px',fontWeight:700}} >
          <Schedule style={{ ...styles.icon, color: sectionColors[3] }} /> {jobDetails.schedule}
        </Typography>
      </Box> */}
        <Box style={styles.section}>
          <Typography
            style={{ fontSize: "26px", fontWeight: 700 }}
            component="h2"
          >
            <Description style={{ ...styles.icon, color: sectionColors[4] }} />{" "}
            Job Description
          </Typography>
          <List>
            {jobDetails.description.map((point, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemIcon style={styles.listItemIcon}>
                  <FiberManualRecord
                    style={{ ...styles.circleIcon, color: sectionColors[0] }}
                  />
                </ListItemIcon>
                <ListItemText primary={point} style={styles.listItemText} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box style={styles.section}>
          <Typography
            style={{ fontSize: "26px", fontWeight: 700 }}
            component="h2"
          >
            <Group style={{ ...styles.icon, color: sectionColors[1] }} /> Age
            Range
          </Typography>
          <Typography variant="body1" style={{ marginLeft: "25px" }}>
            <FiberManualRecord
              style={{ ...styles.circleIcon, color: sectionColors[0] }}
            />{" "}
            {jobDetails.ageRange}
          </Typography>
        </Box>
        <Box style={styles.section}>
          <Typography
            style={{ fontSize: "26px", fontWeight: 700 }}
            component="h2"
          >
            <Work style={{ ...styles.icon, color: sectionColors[2] }} />{" "}
            Experience
          </Typography>
          <Typography variant="body1" style={{ marginLeft: "25px" }}>
            <FiberManualRecord
              style={{ ...styles.circleIcon, color: sectionColors[0] }}
            />{" "}
            {jobDetails.experience}
          </Typography>
        </Box>
        <Box style={styles.section}>
          <Typography
            style={{ fontSize: "26px", fontWeight: 700 }}
            component="h2"
          >
            <School style={{ ...styles.icon, color: sectionColors[3] }} />{" "}
            Skills
          </Typography>
          <List>
            {jobDetails.skills.map((skill, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemIcon style={styles.listItemIcon}>
                  <FiberManualRecord
                    style={{ ...styles.circleIcon, color: sectionColors[0] }}
                  />
                </ListItemIcon>
                <ListItemText primary={skill} style={styles.listItemText} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box style={styles.section}>
          <Typography
            style={{ fontSize: "26px", fontWeight: 700 }}
            component="h2"
          >
            <MonetizationOn
              style={{ ...styles.icon, color: sectionColors[0] }}
            />{" "}
            Education
          </Typography>
          <Typography variant="body1" style={{ marginLeft: "25px" }}>
            <FiberManualRecord
              style={{ ...styles.circleIcon, color: sectionColors[0] }}
            />{" "}
            {jobDetails.education}
          </Typography>
        </Box>
        <Divider />
        <Grid container justifyContent="center">
          <Button
            style={styles.applyButton}
            variant="contained"
            endIcon={<Send />}
            onClick={handleClickOpen}
          >
            Apply Now
          </Button>
        </Grid>
        {/* <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Apply for {jobDetails.title}</DialogTitle>
        <DialogContent>
          {submitted ? (
            <Typography variant="h6" component="p" style={{ textAlign: 'center', margin: '20px 0' }}>
              Successfully Submitted!
            </Typography>
          ) : (
            // <CareersContactForm onSubmit={handleFormSubmit} />
          )}
        </DialogContent>
      </Dialog> */}
      </Container>
    </>
  );
};

export default CareersPage;
