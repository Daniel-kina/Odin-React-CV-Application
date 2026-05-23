import "../styles/SideBySide.css";

function SideBySide({ left, right }) {
  return (
    <div className="SplitView">
      <div className="left-side">{left}</div>
      <div className="right-side">{right}</div>
    </div>
  );
}

export default SideBySide;
