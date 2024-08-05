import React from 'react';
import ProgramForYou from '../ReUsableComponent/ProgramForYou';

const AWSProgramForYou = () => {
  const TestingProgramData = [
    {
      title: "I am a College Graduate looking for a Job"
    },
    {
      title: "I am an experienced IT Software Developer OR Testing Professional and looking for an extra edge on the Skills"
    },
    {
      title: "I have a career GAP earlier and do not have any IT Experience"
    },
    {
      title: "I am planning to switch from NON-IT or Testing or Development or Networking"
    },
    {
      title: "I am a Project Manager and need to discuss with the client on end to end technical and PM aspects. As well as I need to manage a development team also."
    }
  ];

  return (
    <ProgramForYou
      mainTitle="Who Can Apply for this Course?"
      subTitle="Whether you’re a beginner or an intermediate professional seeking to upskill, transition or broaden your horizons in the field, our program is designed to help you succeed."
      applyText="Apply now"
      checkText="Is this program right for me?"
      programData={TestingProgramData}
    />
  );
};

export default AWSProgramForYou;
