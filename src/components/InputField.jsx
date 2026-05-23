function InputTextField({
  text = "Forgot to add text",
  name = "None",
  handlePersonalInfo,
  data,
}) {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input
        type="text"
        value={data[name]}
        name={name}
        name={name}
        onChange={handlePersonalInfo}
      />
    </div>
  );
}

export default InputTextField;
