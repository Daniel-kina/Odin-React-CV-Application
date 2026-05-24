function InputBirthdate({
  text = "Forgot to add text",
  name = "None",
  onChange,
  data,
}) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{text}</label>
      <input
        type="date"
        id={name}
        value={data[name]}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

export default InputBirthdate;
