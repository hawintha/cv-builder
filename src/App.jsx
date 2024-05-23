import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import ExperienceInfo from './components/ExperienceInfo';
import SkillsInfo from './components/SkillsInfo';
import Preview from './components/Preview';
import exampleData from './example-data';

export default function App() {
  const [genDetails, setGenDetails] = useState(exampleData.genDetails);
  const [eduDetails, setEduDetails] = useState(exampleData.eduDetails);
  const [expDetails, setExpDetails] = useState(exampleData.expDetails);
  const [skillDetails, setSkillDetails] = useState(exampleData.skillDetails);
  const getDetails = (arrayName) => {
    if (arrayName === "eduDetails") {
      return { section: eduDetails, fx: setEduDetails };
    } else if (arrayName === "expDetails") {
      return { section: expDetails, fx: setExpDetails };
    } else if (arrayName === "skillDetails") {
      return { section: skillDetails, fx: setSkillDetails };
    }
  }

  function handleGenDetailsChange(e) {
    setGenDetails({ ...genDetails, [e.target.className]: e.target.value });
  }

  function handleDetailsChange(e) {
    let targetUUID = e.target.closest('section').id;
    let arrayName = e.target.closest('fieldset').className;
    let stateDetails = getDetails(arrayName);
    stateDetails.fx(stateDetails.section.map((entry) => { //Update the entry array in details
      if (entry.id === targetUUID) {
        entry[e.target.className] = e.target.value; //Update matching entry using input value
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
      school: "School",
      degree: "Degree",
      eduLocation: "City, State",
      eduStartDate: "",
      eduEndDate: "",
      id: uuidv4(),
    })
  }
  const extraExpForm = () => {
    createForm(expDetails, setExpDetails, {
      title: "Unspecified",
      company: "Unspecified",
      responsibilities: "",
      expStartDate: "",
      expEndDate: "",
      id: uuidv4(),
    })
  }
  const createSkillForm = () => {
    createForm(skillDetails, setSkillDetails, {
      skillName: "Unspecified",
      id: uuidv4(),
    })
  }

  const deleteEntry = (e) => {
    let arrayName = e.target.closest('fieldset').className;
    let targetUUID = e.target.closest('section').id;
    let stateDetails = getDetails(arrayName);
    stateDetails.fx(stateDetails.section.filter((entry) => { //Update the entry array in details
      if (entry.id !== targetUUID) {
        return entry//Remove matching entry using input value
      }
    }));
  }

  return (
    <main>
      <form action="">
        <GeneralInfo
          details={genDetails}
          onChange={handleGenDetailsChange}
        />
        <EducationInfo
          details={eduDetails}
          onChange={handleDetailsChange}
          createForm={createEduForm}
          onDelete={deleteEntry}
        />
        <ExperienceInfo
          details={expDetails}
          onChange={handleDetailsChange}
          extraForm={extraExpForm}
          onDelete={deleteEntry}
        />
        <SkillsInfo
          details={skillDetails}
          onChange={handleDetailsChange}
          createForm={createSkillForm}
          onDelete={deleteEntry}
        />
      </form>
      <Preview
        genDetails={genDetails}
        eduDetails={eduDetails}
        expDetails={expDetails}
        skillDetails={skillDetails}
      />
    </main>
  )
}