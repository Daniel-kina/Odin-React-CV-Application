import InputTextField from "./InputField";
import "../styles/GeneralInfo.css";


function GeneralInfo({ data, handlePersonalInfo }) {
  return (
    <div className="card">
      <h2>Personal Details</h2>
      <InputTextField
        text="Name: "
        name="name"
        handlePersonalInfo={handlePersonalInfo}
        data={data}
      ></InputTextField>
      <InputTextField
        text="Last Name: "
        name="lastName"
        handlePersonalInfo={handlePersonalInfo}
        data={data}
      ></InputTextField>
      <InputTextField
        text="Email: "
        name="email"
        handlePersonalInfo={handlePersonalInfo}
        data={data}
      ></InputTextField>
      <InputTextField
        text="Phone Number: "
        name="phoneNumber"
        handlePersonalInfo={handlePersonalInfo}
        data={data}
      ></InputTextField>

      <InputTextField
        text="BirthDate: "
        name="birthdate"
        handlePersonalInfo={handlePersonalInfo}
        data={data}
      ></InputTextField>
    </div>
  );
}

export default GeneralInfo;
