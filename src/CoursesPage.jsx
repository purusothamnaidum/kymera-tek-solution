import { useParams } from "react-router-dom";
import AWSDevops from "./AWSDevops";
import FullStackDevelopment from "./FullStackDevelopment";
import HRTraining from "./HRTraining";

const CoursePage = () => {
  const { courseTitle } = useParams();
  switch (courseTitle) {
    case "devsecops":
      return <AWSDevops />;
    case "full-stack-development":
      return <FullStackDevelopment />;
    case "hr-training":
      return <HRTraining />;
    default:
      return <div>Course not found</div>;
  }
};

export default CoursePage;
