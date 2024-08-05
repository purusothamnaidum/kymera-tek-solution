import React from 'react';
import CourseOverview from '../ReUsableComponent/CourseOverview';

const courses = [
  {
    title: "AWS Devops ",
    title2: 'Engineer',
    description: (
      <>
        Dive into the dynamic world of cloud operations with our live "Mastering the AWS DevOps Course." This expert-led training bridges the gap between development and operations by utilizing tools like Jenkins, Ansible, and Kubernetes within the AWS ecosystem. Gain practical experience with real-world projects that prepare you to design, build, and maintain scalable and efficient cloud infrastructures. Become proficient in DevOps practices and AWS technologies to enhance your credibility and marketability as a cloud architect. Enroll today and start shaping the future of cloud services!
      </>
    )
  }
  
  // Add more courses as needed
];

const AWSCourseOverview = () => {
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

export default AWSCourseOverview;
