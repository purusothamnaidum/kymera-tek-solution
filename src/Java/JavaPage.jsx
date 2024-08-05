import React from "react";
import { useMediaQuery } from "@mui/material";
import { Helmet } from "react-helmet";
import ContactForm from "../ContactForms/CoursesContactForm";
import JavaCourseOverview from "./JavaCourseOverview";
import JavaVideo from "./JavaVideo";
import JavaCourseContent from "./JavaCourseContent";
import PythonProgramForYou from "../Python/PythonProgramForYou";
import SampleCertificate from "../ReUsableComponent/SampleCertificate";
import Feedback from "../ReUsableComponent/Testimonials";
import JavaCourseFee from "./JavaCourseFee";
import SkillsList from "../ReUsableComponent/Skills";


const JavaPage = () => {
    const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div>
          <Helmet>
        <meta charSet="utf-8" />
        <title>Java</title>
      </Helmet>
      {isMobile && <ContactForm />}
      <JavaCourseOverview/>
      <JavaVideo/>
      <JavaCourseContent/>
      <PythonProgramForYou/>
      <SkillsList/>
      <SampleCertificate/>
      <Feedback/>
      <JavaCourseFee/>
    </div>
  )
}

export default JavaPage