import React  from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "@mui/material";
import ContactForm from "../ContactForms/CoursesContactForm";
import DataScienceCourseOverview from "./DataScienceCourseOverview";
import DatascienceVideo from "./DataScienceVideo";
import DataScienceCourseContent from "./DataScienceCourseContent";
import ProgramForYou from "../ReUsableComponent/ProgramForYou";
import PythonProgramForYou from "../Python/PythonProgramForYou";
import SampleCertificate from "../ReUsableComponent/SampleCertificate";
import Feedback from "../ReUsableComponent/Testimonials";
import DatascienceCourseFee from "./DataScienceCourseFee";
import SkillsList from "../ReUsableComponent/Skills";


const DataScience=()=>{
    const isMobile = useMediaQuery("(max-width:768px)");

    return(

        <div>
          <Helmet>
        <meta charSet="utf-8" />
        <title>DataScience</title>
      </Helmet>
      {isMobile && <ContactForm />}

        <DataScienceCourseOverview/>
        <DatascienceVideo/>
        <DataScienceCourseContent/>
        <PythonProgramForYou/>
        <SkillsList/>
        <SampleCertificate/>
        <Feedback/>
        <DatascienceCourseFee/>
        </div>
    )
}
export default DataScience;