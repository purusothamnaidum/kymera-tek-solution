// AWSDevops.js
import React from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from '@mui/material';
import AWSCourseOverview from "./AWSCourseOverview";
import AWSVideo from "./AWSVideo";
import AWSCourseContent from "./AWSCourseContent";
import AWSProgramForYou from "./AWSProgramForYou";
import AWSSampleCerticate from "./AWSSampleCerticate";
import Feedback from "./Feedback";
import AWSCourseFee from "./AWSCourseFee";
import ContactForm from "../ContactForms/CoursesContactForm";
import SkillsList from "../ReUsableComponent/Skills";

const AWSDevops = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AWS Devops</title>
      </Helmet>
      {isMobile && <ContactForm/>}
      <AWSCourseOverview />
      <AWSVideo />
      <AWSCourseContent />
      <AWSProgramForYou />
      <SkillsList/>
      <AWSSampleCerticate />
      <Feedback />
      <AWSCourseFee />
    </>
  );
};

export default AWSDevops;
