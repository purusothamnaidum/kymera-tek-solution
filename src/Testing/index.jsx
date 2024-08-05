import React from "react";
import { Helmet } from 'react-helmet';
import { useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';

import TestingVideo from "./TestingVideo";
import TestingProgramForYou from "./TestingProgramForYou";
import TestingCourseFee from "./TestingCourseFee";
import TestingCoursePage from "./TestingCoursePage";
import TestingOverview from "./TestingOverview";
import TestingSampleCertificate from "./TestingSampleCerticate";
import Feedback from "../ReUsableComponent/Testimonials";
import ContactForm from "../ContactForms/CoursesContactForm";
import SkillsList from "../ReUsableComponent/Skills";

const TestingPage = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const { courseTitle } = useParams(); // Read courseTitle from URL

  return (
    <div>
       <Helmet>
        <meta charSet="utf-8" />
        <title>{courseTitle}</title> {/* Use the course title in the title */}
      </Helmet>
      {isMobile && <ContactForm course={courseTitle} />} {/* Pass courseTitle to ContactForm */}

      <TestingOverview />
      <TestingVideo />
      <TestingCoursePage />
      <TestingProgramForYou />

      <SkillsList/>

      <TestingSampleCertificate />
      <Feedback />
      <TestingCourseFee />
    </div>
  );
};

export default TestingPage;
