import React from "react";
import VideoComponent from "../ReUsableComponent/VideoComponent";

const AWSVideo = () => {
  const testingData = {
    videoUrl: "https://youtu.be/CgkrM7Q4taw",
    courseDuration: "3 MONTHS",
    courseTitle: "Become a AWS & DevOps Engineer",
    courseDescription: `In just three months, achieve mastery in AWS DevOps through our scenario-based training program, tailored to real-world applications. You'll dive deep into critical tools such as Jenkins, Ansible, Python, Terraform, Bash, Docker, and Kubernetes. Each session is designed to build your expertise step-by-step, preparing you to tackle complex challenges with confidence. Engage in hands-on exercises that simulate actual DevOps scenarios, enhancing your learning and applicability in the job market. Transform your skillset and become a proficient cloud architect ready to excel in the tech-driven landscape.`,
    expertsCount: 5,
    sessionsCount: 20,
    courseImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnRiqLzKhACbQA_PMO5s95Yuiyr6pg_Q0zeoQgBO0lQw&s"
  };

  return <VideoComponent {...testingData} />;
};

export default AWSVideo;
