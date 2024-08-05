import React from "react";
import CourseCurriculum from "../ReUsableComponent/CourseCurriculum";

const TestingCoursePage = () => {
  // Define week content for different courses
  const course1WeekContent = [
    {
      heading: "MANUAL CONCEPTS",
      points: [
        "Introduction to Manual Testing",
        "Software Development Life Cycle (SDLC) and Testing",
        "Test Planning and Documentation",
        "Test Execution and Reporting",
        "Functional Testing Techniques",
        "Non-Functional Testing Techniques",
        "Regression Testing",
        "Exploratory Testing",
        "Test Management Tools",
        "Test Metrics and Reporting",
        "Risk-Based Testing",
        "Best Practices and Guidelines",
        "Case Studies and Practical Exercises",
      ],
    },
    {
      heading: "JAVA CONCEPTS COVERAGE",
      points: [
        "Overview of Java Programming Language",
        "History and Evolution of Java",
        "Installation of Java Development Kit (JDK)",
        "Setting up Integrated Development Environment (IDE)",

        "Intro to Java",
        "Getting started with new class creation and basic syntaxes",
        "Different data types and wrapper classes",
        "Conditional and Looping Statements",
        "Static vs non-static methods, objects initialization",
        "Constructors basics and its purpose",
        "Intro to Strings and Exceptions",
        "Intro to Arrays",
        "Integrating the basics of Java with the Selenium concepts at a later point of time",

      
      ],
    },
    {
      heading: "JAVA CONCEPTS COVERAGE",
      points: [
        "Classes and Objects",
        "Encapsulation, Inheritance, and Polymorphism",
        "Constructors and Methods",
        "Access Modifiers",

        "Understanding Exceptions in Java",
        "try-catch Blocks",
        "Handling Checked and Unchecked Exceptions",
        "Custom Exception Classes",

        "Introduction to Collections Framework",
        "ArrayList, LinkedList, HashSet, HashMap",
        "Iterators and List Iterators",
        "Sorting and Searching in Collections",
      ],
    },

    
      {
        heading: "Introduction to Selenium",
        points: [
          "Basics of Selenium: What is Selenium IDE and Selenium RC",
          "Different types of Locators for searching the elements.",
          "Finding The Elements based on different types of paths.",
          "Finding the elements based on different types of CSS Selectors.",
          "Intro to Web Tables and handling dynamic rows and columns.",
          "Implicit and Explicit Wait Times, other attributes with the Web Elements",
          "Handling Pop Up’s using selenium web driver",
          "Actions Class",
          "Handling multiple windows and tabs based on different combinations",
          "Capturing Screenshots, Elements using Selenium WebDriver",
          "Handling Frames and Shadow Frames",
          "Uploading and Downloading of Files using Selenium",
          "Selenium 4 Locators",
          "Chrome Options and Desired Capabilities which helps us in enhancing the Driver",
          "Handling Different types of Calendars"
        ]
      },
      {
        heading: "TestNG Framework",
        points: [
          "What is TestNG and Installation of TestNG Plugin from Marketplace?",
          "Annotations of TestNG",
          "Sample Test Cases Scripting via TESTNG",
          "Execution of Test Cases in TESTNG",
          "Parameterization of Values",
          "Grouping of Test Cases",
          "Assert Statements",
          "Dependency of Test Cases",
          "Purpose of WebDriverEventListener, ITestListener and other more listeners and it’s usage",
          "Using Listeners as part of scripting.",
          "Parallel Testing"
        ]
      },
      {
        heading: "Basics Of Cucumber Framework",
        points: [
          "Installation of Cucumber Plugin from Marketplace",
          "Creating a New Feature File and syntax",
          "Runner File and creating step definitions",
          "Combine TESTNG with Cucumber",
          "Executing cases using Runner File",
          "Preparing the Scenario Name based on the Tags",
          "Scenario Outline and different cucumber tags and annotations",
          "PickledTestStep Concept and its purpose",
          "Data Tables",
          "Parallel Testing"
        ]
      },
      {
        heading: "Properties Files, Excel Operations, Test Automation Frameworks, JSON & XML File Operations, Generating Extent Reports",
        points: [
          "Creating a Property File",
          "Reading a Value from Property Files",
          "Setting the Values to the Property Files",
          "Writing the Data to the Excel Sheet using poi library",
          "Reading the Data from the Excel Sheet using poi Library",
          "Concept of Data Provider (means distributing the data to the test cases)",
          "Introduction to Test Automation Frameworks",
          "Data-Driven Framework",
          "Keyword-Driven Framework",
          "Hybrid Framework",
          "Writing the Data to the JSON and XML File",
          "Reading the Data from the JSON and XML File",
          "Modifying the contents of JSON and XML File",
          "Generating reports using extent cucumber adapter",
          "Generating reports using the regular way",
          "Discussion about different types of reports such as ExtentHTMLReporter, ExtentSparkReporter, ExtentPDFReporter"
        ]
      }
    
    
  ];

  return (
    <div>
      <CourseCurriculum
        weekContent={course1WeekContent}
        pdfLink="path_to_testing_course_curriculum.pdf"
      />
    </div>
  );
};

export default TestingCoursePage;
