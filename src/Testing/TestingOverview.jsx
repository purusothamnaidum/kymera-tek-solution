import React from 'react';
import CourseOverview from '../ReUsableComponent/CourseOverview';

const courses = [
  {
    title: "Testing ",
    title2:'Environment',
    description: "Learning both Manual and Automation Testing opens up opportunities for precision in identifying and fixing software defects. Mastery in these testing techniques ensures robust software quality and performance, making you a valuable asset in the tech industry. This dual expertise lays a strong foundation for a successful career in the testing field.",
   
  },
  // Add more courses as needed
];

const TestingCourseOverview = () => {
  return (
    <div>
      {courses.map((course, index) => (
        <CourseOverview
          key={index}
          title={course.title}
          title2={course.title2}
          description={course.description}
          
        />
      ))}
    </div>
  );
}

export default TestingCourseOverview;
