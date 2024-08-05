import React from 'react';
import CourseFee from '../ReUsableComponent/CourseFee';

const AWSCourseFee = () => {
  return (
    <CourseFee
      courseTitle="Master AWS & DevOps Engineer"
      coursePrice="19,999"
      courseDiscountedPrice="9,999"
      specialNote="Special price applicable for the next 15 seats only."
       courseEndDate="Closing Soon !!!"
      courseStartDate="22 July"
      timeCommitment="08-10 hours/week"
    />
  );
};

export default AWSCourseFee;
