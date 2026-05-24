import InputTextField from "./InputField";
import InputBirthdate from "./inputBirthdate";
import "../styles/GeneralInfo.css";

function GeneralInfo({ data, onChange }) {
  return (
    <div className="card">
      <h2>Personal Details</h2>
      <InputTextField
        text="Name: "
        name="name"
        onChange={onChange}
        data={data}
      ></InputTextField>
      <InputTextField
        text="Last Name: "
        name="lastName"
        onChange={onChange}
        data={data}
      ></InputTextField>
      <InputTextField
        text="Email: "
        name="email"
        onChange={onChange}
        data={data}
      ></InputTextField>
      <InputTextField
        text="Phone Number: "
        name="phoneNumber"
        onChange={onChange}
        data={data}
      ></InputTextField>

      <InputBirthdate
        text="BirthDate: "
        name="birthdate"
        onChange={onChange}
        data={data}
      ></InputBirthdate>
    </div>
  );
}

export default GeneralInfo;
