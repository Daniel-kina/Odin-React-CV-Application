function AddButton({ onClick }) {
  return (
    <div className="education-button-container">
      <button className="education-button" onClick={onClick}>
        Save
      </button>
    </div>
  );
}

export default AddButton;
