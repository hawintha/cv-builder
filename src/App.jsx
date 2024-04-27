import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import ExperienceInfo from './components/ExperienceInfo';
import Preview from './components/Preview';
import exampleData from './example-data';

export default function App() {
  const [genDetails, setGenDetails] = useState(exampleData.genDetails);
  const [eduDetails, setEduDetails] = useState(exampleData.eduDetails);
  const [expDetails, setExpDetails] = useState(exampleData.expDetails);

  function handleGenDetailsChange(e) {
    setGenDetails({ ...genDetails, [e.target.id]: e.target.value });
  }

  function handleEduDetailsChange(e) {
    let targetUUID = e.target.parentElement.parentElement.id;
    setEduDetails(eduDetails.map((entry) => { //Update the entry array in details
      if (entry.id === targetUUID) {
        entry[e.target.id] = e.target.value; //Update matching entry using input value
      }
      return entry
    }));
  }

  function handleExpDetailsChange(e) {
    let targetUUID = e.target.parentElement.parentElement.id;
    setExpDetails(expDetails.map((entry) => { //Update the entry array in details
      if (entry.id === targetUUID) {
        entry[e.target.id] = e.target.value; //Update matching entry using input value
      }
      return entry
    }));
  }

  function createForm(array, setState, obj) {
    const clone = structuredClone(array); //Copy array
    clone.push(obj);
    setState(clone); //Update array with the newly added object
  }
  const createEduForm = () => {
    createForm(eduDetails, setEduDetails, {
      school: "Unspecified",
      degree: "",
      eduLocation: "",
      eduStartDate: "",
      eduEndDate: "",
      id: uuidv4(),
      isCollapsed: true
    })
  }
  const extraExpForm = () => {
    createForm(expDetails, setExpDetails, {
      title: "Unspecified",
      company: "",
      responsibilities: "",
      expStartDate: "",
      expEndDate: "",
      id: uuidv4(),
      isCollapsed: true
    })
  }

  return (
    <main>
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
          details={eduDetails}
          onChange={handleEduDetailsChange}
          createForm={createEduForm}
        />
        <ExperienceInfo
          details={expDetails}
          onChange={handleExpDetailsChange}
          extraForm={extraExpForm}
        />
      </form>
      <Preview
        genDetails={genDetails}
        eduDetails={eduDetails}
        expDetails={expDetails}
      />
    </main>
  )
}