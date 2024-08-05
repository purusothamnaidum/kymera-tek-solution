import React from 'react';
import CourseFee from '../ReUsableComponent/CourseFee';


const TestingCourseFee = () => {
  

  return (
    <CourseFee
      courseTitle="Master Testing"
      coursePrice="59,999"
      courseDiscountedPrice="44,999"
      specialNote="Special price applicable for the next 15 seats only."
     courseEndDate="Closing Soon !!!"
      courseStartDate="22 July"
      timeCommitment="08-10 hours/week"
    />
  );
};

export default TestingCourseFee;
