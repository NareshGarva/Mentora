import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import SocialLinks from './SocialLinks';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Experties from './Experties'

function MultiStepForm() {
  // current step of the form
  const [step, setStep] = useState(1);

  // form data stored in one object
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    rate: '',
    phone: '',
    profileImage: '',
    bio: '',
    linkedin: '',
    github: '',
    website: '',
    companyName: '',
    joiningDate: '',
    leavingDate: '',
    description: '',
    institution: '',
    degree:'',
    fieldOfStudy:'',
    GraduationYear:'',
    GPA:'',
    skills:'',
    category:'',
  });

  // go to next step
  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  // go to previous step
  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  // handle input change and update formData
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // render form based on step
  switch (step) {
    case 1:
      return (
        <PersonalInfo
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 2:
      return (
        <SocialLinks
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 3:
      return (
        <Education
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      );
      case 4:
        return(
          <WorkExperience
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={formData}

            
            />
        );

     case 5:
      return (
        <Experties
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    default:
      return <div>Unknown step</div>;
  }
}

export default MultiStepForm;
