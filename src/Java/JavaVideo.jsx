import React from "react";
import VideoComponent from "../ReUsableComponent/VideoComponent";

const JavaVideo = () => {
  const testingData = {
    videoUrl: "https://youtu.be/CgkrM7Q4taw",
    courseDuration: "3 MONTHS",
    courseTitle: "Become a Java Fullstack Developer",
    courseDescription: "Our 'Java Bootcamp: From Zero to Hero' course is a transformative three-month journey designed to elevate your Java skills from basic to advanced levels. Throughout the program, you'll delve into key Java libraries, such as Pandas for data analysis, and explore advanced concepts like Object-Oriented Programming. With hands-on experience in deploying Large Language Models (LLMs) and modern frameworks like Django for web development, you'll emerge equipped to tackle real-world challenges and excel in professional settings.",
    expertsCount: 5,
    sessionsCount: 20,
    courseImage: "/Images/java.webp"
  };

  return <VideoComponent {...testingData} />;
};

export default JavaVideo;
