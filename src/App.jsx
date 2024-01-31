import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo';
import EducationExp from './components/EducationExp';
import PracticalExp from './components/PracticalExp';

export default function App() {
  const [generalDetails, setGeneralDetails] = useState('');
  const [eduDetails, setEduDetails] = useState('');
  function handleGeneralDetailsChange(e) {
    setGeneralDetails(e.target.value)
  }
  function handleEduDetailsChange(e) {
    setEduDetails(e.target.value)
  }

  return (
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
        start={eduDetails.start}
        end={eduDetails.end}
        onChange={handleEduDetailsChange}
      />
      <PracticalExp
        title={eduDetails.title}
        company={eduDetails.company}
        responsibilities={eduDetails.responsibilities}
        start={eduDetails.start}
        end={eduDetails.end}
        onChange={handleEduDetailsChange}
      />
    </form>
  )
}