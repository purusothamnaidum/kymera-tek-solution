import React from "react";
import CourseCurriculum from "../ReUsableComponent/CourseCurriculum";

const JavaCourseContent = () => {
  // Define week content for the Java Full Stack course
  const courseWeekContent = [
    {
      heading: " Introduction to Java",
      points: [
        "Overview of Java",
        "History of Java",
        "Why Java?",
        "JDK, JVM, JRE"
      ]
    },
    {
      heading: " Java Basics",
      points: [
        "Data Types and Variables",
        "Primitive Data Types",
        "Non-primitive Data Types",
        "Type Conversion",
        "Operators",
        "Arithmetic Operators",
        "Relational Operators",
        "Logical Operators",
        "Assignment Operators",
        "Control Flow Statements",
        "If-else Statements",
        "Switch Case",
        "Loops (for, while, do-while)",
        "Break and Continue"
      ]
    },
    {
      heading: " Object-Oriented Programming (OOP) Concepts",
      points: [
        "Classes and Objects",
        "Defining a Class",
        "Creating Objects",
        "Constructors",
        "`this` Keyword",
        "Inheritance",
        "Types of Inheritance",
        "`super` Keyword",
        "Polymorphism",
        "Method Overloading",
        "Method Overriding",
        "Abstraction",
        "Abstract Classes",
        "Interfaces",
        "Encapsulation",
        "Access Modifiers",
        "Getters and Setters"
      ]
    },
    {
      heading: " Advanced Java Concepts",
      points: [
        "Exception Handling",
        "Types of Exceptions",
        "Try-catch Block",
        "Finally Block",
        "Throw and Throws",
        "Collections Framework",
        "List, Set, Map Interfaces",
        "ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap",
        "Streams and File I/O",
        "File Reading and Writing",
        "BufferedReader and BufferedWriter"
      ]
    },
    {
      heading: " Java Development Tools",
      points: [
        "Integrated Development Environment (IDE)",
        "Eclipse",
        "IntelliJ IDEA",
        "Build Tools",
        "Maven",
        "Gradle",
        "Version Control",
        "Git and GitHub"
      ]
    },
    {
      heading: " Databases and JDBC",
      points: [
        "Introduction to Databases",
        "Relational Databases",
        "SQL Basics",
        "JDBC (Java Database Connectivity)",
        "JDBC Architecture",
        "Connecting to a Database",
        "Executing SQL Queries",
        "ResultSet"
      ]
    },
    {
      heading: "Web Development with Java",
      points: [
        "Servlets and JSP",
        "Introduction to Servlets",
        "Servlet Lifecycle",
        "JavaServer Pages (JSP)",
        "MVC Architecture",
        "Spring Framework",
        "Introduction to Spring",
        "Spring Core",
        "Spring MVC",
        "Spring Boot"
      ]
    },
    {
      heading: " Frontend Development",
      points: [
        "HTML, CSS, JavaScript",
        "Basics of HTML",
        "Styling with CSS",
        "JavaScript Basics",
        "Frontend Frameworks",
        "React.js",
        "Angular"
      ]
    },
    {
      heading: " RESTful Web Services",
      points: [
        "Introduction to REST",
        "REST Principles",
        "HTTP Methods",
        "Building REST APIs",
        "Using Spring Boot",
        "JSON Processing",
        "Exception Handling in REST"
      ]
    },
    {
      heading: " Deployment and DevOps",
      points: [
        "Introduction to DevOps",
        "Continuous Integration and Continuous Deployment (CI/CD)",
        "Tools: Jenkins, Docker",
        "Cloud Deployment",
        "AWS Basics",
        "Deploying Java Applications on AWS"
      ]
    },
    {
      heading: "Project Work",
      points: [
        "Capstone Project",
        "Real-world Java Full Stack Application",
        "Integration of Frontend and Backend",
        "Deployment on Cloud"
      ]
    }
  ];

  return (
    <div>
      <CourseCurriculum weekContent={courseWeekContent} />
    </div>
  );
};

export default JavaCourseContent;
