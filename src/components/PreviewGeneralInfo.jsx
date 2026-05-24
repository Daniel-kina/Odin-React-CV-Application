import "../styles/PreviewGeneralInfo.css";

function PreviewGeneralInfo({ data }) {
  return (
    <div className="personal-info-container">
      <h2>{data.name + " " + data.lastName}</h2>
      <div>
        <p>{data.email}</p>
        <p>{data.phoneNumber}</p>
        <p>{data.birthdate}</p>
      </div>
    </div>
  );
}

export default PreviewGeneralInfo;
