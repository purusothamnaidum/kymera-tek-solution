import React from "react";
import CourseCurriculum from "../ReUsableComponent/CourseCurriculum";

const AWSCourseContent = () => {
  // Define week content for different courses
  const course1WeekContent = [
    {
      heading: "Introduction to AWS & DevOps",
      points: [
        " Course Introduction",
        "DevOps Overview",
        "Interactive Q&A Session",
        "Introduction to Continuous Integration",
        "Exploring the Fundamentals of Continuous Delivery"
      ],
    },
    {
      heading: "Prerequisites Introduction and Setup",
      points: [
        "Required Tools and Information",
        "Chocolatey Installation for Windows Users",
        "Homebrew Setup for MacOS Users",
        "Software Installation Process",
        "Ubuntu 20 Tool Prerequisites",
        "Registration Processes",
        "Setting Up AWS",
        "Setting Up AWS - I",
      ],
    },
    {
      heading: "VM Setup",
      points: [
        "Introduction to Virtualization",
        "Understanding Virtualization",
        "Manual VM Setup (Windows & MacOS Intel Chip)",
        "VM Implementation on MacOS M1 Chip",
        "Exploring Vagrant & Virtualbox",
        "Conclusion",
      ],
    },
    {
      heading: "Vagrant and Linux Servers",
      points: [
        "Vagrant Virtual Machines Overview",
        "Configuring Vagrant IP, RAM, and CPU Settings",
        "Synchronization of Directories in Vagrant",
        "Introduction to Vagrant Provisioning",
        "Setting Up a Website Environment",
        "WordPress Installation and Configuration",
        "Automation of Website Setup Procedures",
        "Automating WordPress Installation",
      ],
    },
    {
      heading: "Project Setup Manual & Automated",
      points: [
        "Project Overview",
        "Virtual Machine Configuration",
        "Setting Up Database, Cache, and Queue Systems",
        "Application Deployment",
        "Nginx Web Server Configuration",
        "Project Validation Process",
        "Introduction to Automation",
        "Automated Deployment Scripting",
      ],
    },
    {
      heading: "Networking",
      points: [
        "ISO Overview",
        "Exploring Networks & IP Concepts",
        "Understanding Protocols, Ports, and More",
        "Networking Commands Tutorial",
      
      ],
    },
    {
      heading: "Containers",
      points: [
        "Introduction to Containers",
        "Understanding Docker",
        "Docker Fundamentals Test",
        "Practical Exercises with Docker Containers",
        "Vprofile Project: Container Implementation",
        "Introduction to Microservices",
        "Microservice Project Implementation",
      ],
    },
    {
      heading: "Bash Scripting",
      points: [
        "Introduction to Bash Scripts",
        "Virtual Machine Configuration for Scripting",
        "Creating Your First Bash Script",
        "Exploring a Sample Script",
        "ChatGPT Integration in Scripts",
        "Understanding Script Variables",
        "Variables in Bash Quiz",
        "Handling Command Line Arguments",
        "Introduction to System Variables",
        "Command Line Arguments Quiz",
        "Using Quotes in Bash Scripts"
      ],
    },
    {
      heading: "AWS - Lift and Shift",
      points: [
        "Introduction to AWS Cloud for Project Setup - Lift and Shift",
        "Understanding Security Groups & Key Pairs",
        "Managing EC2 Instances",
        "Building and Deploying Artifacts",
        "Configuring Load Balancer & DNS",
        "Setting Up an Autoscaling Group",
      ],
    },
  ];



  return (
    <div>
     
      <CourseCurriculum weekContent={course1WeekContent} />
     
    </div>
  );
};

export default AWSCourseContent;
