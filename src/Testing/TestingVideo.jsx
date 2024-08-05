import React from "react";
import VideoComponent from "../ReUsableComponent/VideoComponent";

const TestingVideo = () => {
  const testingData = {
    videoUrl: "https://youtu.be/CgkrM7Q4taw",
    courseDuration: "3 MONTHS",
    courseTitle: "Become a Testing Expert",
    courseDescription: `In just three months, achieve mastery in Testing through our scenario-based training program, tailored to real-world applications. You'll dive deep into critical tools such as Selenium, JUnit, TestNG, and Cypress. Each session is designed to build your expertise step-by-step, preparing you to tackle complex challenges with confidence. Engage in hands-on exercises that simulate actual testing scenarios, enhancing your learning and applicability in the job market. Transform your skillset and become a proficient tester ready to excel in the tech-driven landscape.`,
    expertsCount: 5,
    sessionsCount: 20,
    courseImage:"https://img.freepik.com/free-vector/software-tester-concept-illustration_114360-12815.jpg?t=st=1717067929~exp=1717071529~hmac=3099dde47992baf8e21662e85f08c322f4d582e1c4e74955d3848e942f730007&w=900"
  };

  return <VideoComponent {...testingData} />;
};

export default TestingVideo;
