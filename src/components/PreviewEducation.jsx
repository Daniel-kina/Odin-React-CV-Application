function PreviewEducation({ data }) {
  return (
    <div className="preview-education-container">
      {data.map((education) => (
        <>
          <h2>Institute: {education.institute}</h2>
          <p>Degree: {education.degree}</p>
          <p>Note: {education.note}</p>
          <p>StartYear: {education.startYear}</p>
          <p>EndYear: {education.endYear}</p>
        </>
      ))}
    </div>
  );
}

export default PreviewEducation;
