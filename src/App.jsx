import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo';
import EducationExp from './components/EducationExp';
import PracticalExp from './components/PracticalExp';
import Preview from './components/Preview';
import exampleData from './example-data';

export default function App() {
  const [generalDetails, setGeneralDetails] = useState(exampleData.generalDetails);
  const [eduDetails, setEduDetails] = useState(exampleData.eduDetails);
  const [practicalDetails, setPracticalDetails] = useState(exampleData.practicalDetails);
  function handleGeneralDetailsChange(e) {
    setGeneralDetails({ ...generalDetails, [e.target.id]: e.target.value });
  }
  function handleEduDetailsChange(e) {
    setEduDetails({ ...eduDetails, [e.target.id]: e.target.value });
  }
  function handlePracticalDetailsChange(e) {
    setPracticalDetails({ ...practicalDetails, [e.target.id]: e.target.value });
  }
  return (
    <>
      <form action="">
        <GeneralInfo
          firstName={generalDetails.firstName}
          lastName={generalDetails.lastName}
          email={generalDetails.email}
          phone={generalDetails.phone}
          onChange={handleGeneralDetailsChange}
        />
        <EducationExp
          school={eduDetails.school}
          degree={eduDetails.degree}
          start={eduDetails.eduStartDate}
          end={eduDetails.eduEndDate}
          onChange={handleEduDetailsChange}
        />
        <PracticalExp
          title={practicalDetails.title}
          company={practicalDetails.company}
          responsibilities={practicalDetails.responsibilities}
          start={practicalDetails.jobStartDate}
          end={practicalDetails.jobEndDate}
          onChange={handlePracticalDetailsChange}
        />
      </form>
      <Preview
        generalDetails={generalDetails}
        eduDetails={eduDetails}
        practicalDetails={practicalDetails}
      />
    </>
  )
}