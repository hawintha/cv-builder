import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import ExperienceInfo from './components/ExperienceInfo';
import Preview from './components/Preview';
import exampleData from './example-data';

export default function App() {
  const [genDetails, setGenDetails] = useState(exampleData.genDetails);
  const [eduDetails, setEduDetails] = useState(exampleData.eduDetails);
  const [expDetails, setExperienceDetails] = useState(exampleData.expDetails);
  function handleGenDetailsChange(e) {
    setGenDetails({ ...genDetails, [e.target.id]: e.target.value });
  }
  function handleEduDetailsChange(e) {
    setEduDetails({ ...eduDetails, [e.target.id]: e.target.value });
  }
  function handleExperienceDetailsChange(e) {
    setExperienceDetails({ ...expDetails, [e.target.id]: e.target.value });
  }
  return (
    <>
      <form action="">
        <GeneralInfo
          firstName={genDetails.firstName}
          lastName={genDetails.lastName}
          email={genDetails.email}
          phone={genDetails.phone}
          location={genDetails.location}
          onChange={handleGenDetailsChange}
        />
        <EducationInfo
          school={eduDetails.school}
          degree={eduDetails.degree}
          location={eduDetails.eduLocation}
          start={eduDetails.eduStartDate}
          end={eduDetails.eduEndDate}
          onChange={handleEduDetailsChange}
        />
        <ExperienceInfo
          title={expDetails.title}
          company={expDetails.company}
          responsibilities={expDetails.responsibilities}
          start={expDetails.expStartDate}
          end={expDetails.expEndDate}
          onChange={handleExperienceDetailsChange}
        />
      </form>
      <Preview
        genDetails={genDetails}
        eduDetails={eduDetails}
        expDetails={expDetails}
      />
    </>
  )
}