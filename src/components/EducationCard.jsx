import InputTextField from "./InputField";
import AddButton from "./AddButton";

function EducationCard({
  data,
  handleAddEducationField,
  handleEducationChange,
}) {
  const fields = [
    { text: "Institute: ", name: "institute" },
    { text: "Degree: ", name: "degree" },
    { text: "Note: ", name: "note" },
    { text: "Start Year: ", name: "startYear" },
    { text: "End Year", name: "endYear" },
  ];

  return (
    <div className="card">
      <h2>Education</h2>
      {/* 1. Äußerer Loop: Geht durch jede Ausbildungsstation (z.B. Bachelor, Master) */}
      {data.map((education) => (
        <div className="education-station" key={education.id}>
          {" "}
          {/* KEY HINZUGEFÜGT */}
          {/* 2. Innerer Loop: Baut die 5 Eingabefelder für GENAU DIESE Station */}
          {fields.map((field) => (
            <div key={field.name}>
              {" "}
              {/* LEERES FRAGMENT ERSETZT DURCH DIV MIT KEY */}
              <InputTextField
                text={field.text}
                name={field.name}
                /* Wir reichen die ID weiter, damit der State weiß, welche Station tippt */
                onChange={(e) => handleEducationChange(education.id, e)}
                data={education} // KORRIGIERT: Übergibt das einzelne Objekt, nicht das ganze Array!
              />
            </div>
          ))}
        </div>
      ))}{" "}
      {/* KORRIGIERT: Hier fehlte die schließende runde Klammer ) */}
      <AddButton onClick={handleAddEducationField}></AddButton>
    </div>
  );
}

export default EducationCard;
