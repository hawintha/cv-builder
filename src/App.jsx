import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo';

function App() {
  const [generalDetails, setGeneralDetails] = useState('');
  function handleGeneralDetailsChange(e) {
    setGeneralDetails(e.target.value)
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
    </form>
  )
}

export default App
