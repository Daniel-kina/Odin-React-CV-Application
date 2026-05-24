import { useState } from "react";

import SideBySide from "./components/SideBySide";
import GeneralInfo from "./components/GeneralInfo";
import PreviewGeneralInfo from "./components/PreviewGeneralInfo";
import EducationCard from "./components/EducationCard";
import ExperienceCard from "./components/ExperienceCard";
import "./styles/App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthdate: "",
  });

  const [education, setEducation] = useState([
    {
      institute: "",
      degree: "",
      note: "",
      startYear: "",
      endYear: "",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: crypto.randomUUID(),
      institute: "",
      degree: "",
      note: "",
      startYear: "",
      endYear: "",
    },
  ]);

  function handleAddEducationField() {
    setEducation([
      ...education,
      { institute: "", degree: "", note: "", startYear: "", endYear: "" },
    ]);
  }

  function handleEducationChange(id, e) {
    const { name, value } = e.target;

    // Wir erstellen eine Kopie des aktuellen Arrays
    setEducation(
      education.map((edu) => {
        if (edu.id === id) {
          return { ...edu, [name]: value };
        }
        return edu;
      }),
    );
  }

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
            <GeneralInfo data={personalInfo} onChange={handlePersonalInfo} />
            <EducationCard
              data={education}
              handleAddEducationField={handleAddEducationField}
              handleEducationChange={handleEducationChange}
            ></EducationCard>
            <ExperienceCard></ExperienceCard>
          </>
        }
        right={
          <div>
            <h1>Preview</h1>

            <div className="preview">
              <PreviewGeneralInfo data={personalInfo}></PreviewGeneralInfo>
            </div>
          </div>
        }
      ></SideBySide>
    </>
  );
}

export default App;
