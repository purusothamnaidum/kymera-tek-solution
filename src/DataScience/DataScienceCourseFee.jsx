import React from 'react';
import CourseFee from '../ReUsableComponent/CourseFee';

const DatascienceCourseFee = () => {
  return (
    <CourseFee
      courseTitle="Master Datascience  Developer"
      coursePrice="59,999"
      courseDiscountedPrice="44,999"
      specialNote="Special price applicable for the next 15 seats only."
      courseEndDate="Closing Soon !!!"
      courseStartDate="22 July"
      timeCommitment="08-10 hours/week"
    />
  );
};

export default DatascienceCourseFee;
