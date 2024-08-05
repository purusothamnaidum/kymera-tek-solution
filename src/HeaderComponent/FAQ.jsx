import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
// import PhoneIcon from "@mui/icons-material/Phone";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const QuestionAnswer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
// Container styles
const containerStyles = {
  height: "auto", // Example height in inches
  width: "100%",
  backgroundColor: "#FFFFFF", // You can customize this as needed
  boxSizing: "border-box",
  borderRadius: "8px", // Optional, for rounded corners
  //boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional, for a shadow effect
  overflow: "auto", // To handle overflow content
  display: "flex",
  flexDirection: "column", // Ensure content stacks vertically
  padding:'40px',
};

// Header part styles
const headPart = {
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

// FAQ part styles
const faqPart = {
  height: "auto", // Fixed typo
  overflowY: "auto", // To handle overflow content
  padding: isMobile?"5px":"30px", // Added padding for content spacing
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

// Typography styles
const headerStyles = {
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  fontWeight: 800,
  fontSize: isMobile?"1.5rem":"2.75rem",
  color: "#171421",
  lineHeight: 1.2,
  wordSpacing: "1px", // Adjust word spacing
  boxSizing: "border-box",
  textAlign: "center",

};


// Accordion styles
const accordionStyles = {
  width: isMobile?"100%":"60%", // Adjust the width as needed
  marginBottom: "20px", // Add space between accordions
  borderRadius: "5px",
};

// Question styles
const QueStyle = {
  display: "flex",
  justifyContent: "space-between",
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "1.25rem",
  lineHeight: "140%",
};

// Answer styles
const ansStyle = {
  display: "flex",
  justifyContent: "space-between",
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  fontWeight: 200,
  fontSize: "1.25rem",
  lineHeight: "140%",
};


  return (
    <Box sx={containerStyles}>
      <Box sx={headPart}>
        <Typography sx={headerStyles}>Frequently Asked Questions</Typography>
      </Box>
      <Box sx={faqPart}>
        <Accordion sx={accordionStyles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={QueStyle}>
              I have a full-time job. Will I get enough time to take this
              program?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={ansStyle}>
              Yes! This program is built keeping in mind the time constraints of
              full-time professionals. You will be committing 12-14 hours a week
              to this program.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={QueStyle}>
              Do I have to attend all of the live sessions in real-time?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={ansStyle}>
              We strongly recommend you make time for live sessions so you can
              ask questions directly and make the most out of it. But if you are
              unable to attend a live session due to unavoidable circumstances,
              you can always access the recording of the session that you
              missed.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography sx={QueStyle}>
              How are the sessions conducted ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={ansStyle}>
              All program instruction will be online and the sessions will be
              conducted on Zoom with the help of the Airtribe platform. The
              community associated with the program will be managed on Slack.
              All you need is a good internet connection to attend the live
              sessions and other activities.{" "}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Typography sx={QueStyle}>
              Why learn with a community for an online program ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={ansStyle}>
              Haven't all of our schools and colleges till date been a
              community, our best friends are from our schools and colleges we
              attended? We all start with the same purpose (degree), the same
              group of people (cohort), and have a fixed time duration to
              complete programs. Online cohort-based programs have a community
              component built-in which helps them drive a superior learning
              experience, new connections, and friendships for participants
              which could potentially unlock new opportunities for them.{" "}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            <Typography sx={QueStyle}>
              Will this program help me in landing a job?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={ansStyle}>
              Our main aim with this program is to help accelerate your career.
              While we can’t guarantee jobs, we will be making every effort to
              help you in landing a job with our career assistance services. We
              provide mock interviews, resume preparation, and professional
              guidance to enhance your readiness for the job market.
              Additionally, we assist you in building a strong profile that
              showcases your skills and accomplishments, making a lasting
              impression on potential employers.{" "}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6-content"
            id="panel6-header"
          >
            <Typography sx={QueStyle}>
              Is any prior programming experience required to enroll in this
              program?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={ansStyle}>
              Yes, prior experience with at least one programming language
              (preferably JavaScript) is required to participate in this
              program.{" "}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7-content"
            id="panel7-header"
          >
            <Typography sx={QueStyle}>Are placements guaranteed?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={ansStyle}>
              Airtribe's career services team diligently works to arrange
              interviews for all qualified learners. While we arrange three
              guaranteed interviews within six months of graduating from the
              course for learners who maintain at least 70% attendance and score
              well in assessments, we do not guarantee placements, as they
              ultimately depend on each learner's performance in the interviews.{" "}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8-content"
            id="panel8-header"
          >
            <Typography sx={QueStyle}>
              What's the eligibility criteria for the 3 guaranteed interviews?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={ansStyle}>
              <b>Eligibility for the three guaranteed interviews includes:</b>
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="1. Indian residents with a college degree and 60%+ academic scores." />
              </ListItem>
              <ListItem>
                <ListItemText primary="2. Enrollment in Airtribe's Backend Engineering Launchpad course." />
              </ListItem>
              <ListItem>
                <ListItemText primary="3. Commitment to attend three relevant job interviews." />
              </ListItem>
              <ListItem>
                <ListItemText primary="4. Maintenance of 80% live course attendance and 70%+ assessment scores." />
              </ListItem>
              <ListItem>
                <ListItemText primary="5. Compliance with the course's terms, including participation in interviews with higher-paying companies." />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        {/* Add Paper component */}

        
      </Box>
    </Box>
  );
};

export default QuestionAnswer;