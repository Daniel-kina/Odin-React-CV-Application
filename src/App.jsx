import { useState } from "react";

import SideBySide from "./components/SideBySide";
import GeneralInfo from "./components/GeneralInfo";
import PreviewGeneralInfo from "./components/PreviewGeneralInfo";
import "./styles/App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthdate: "",
    educationExperience: [],
    practicalExperience: [],
  });

  function handlePersonalInfo(e) {
    const { name, value } = e.target; // name entspricht der ID des Inputs (z.B. "name", "email")

    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  }

  return (
    <>
      <SideBySide
        left={
          <>
            <h1 className="Logo-title">CV Generator</h1>
            <GeneralInfo
              data={personalInfo}
              handlePersonalInfo={handlePersonalInfo}
            />
          </>
        }
        right={
          <div className="Preview">
            <h1>Preview</h1>
            <PreviewGeneralInfo data={personalInfo}></PreviewGeneralInfo>
          </div>
        }
      ></SideBySide>
    </>
  );
}

export default App;
