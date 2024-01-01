import React from "react";

const AbsentButton = ({ onAbsentClick }) => {
  const buttonStyle = {
    width: "70px",
    height: "30px",
    color:'white',
    border: "none",
    borderRadius: "10px",
    backgroundColor: "rgb(255,60,0)",
  };
  return (
    <div className="present-buttons">
      <div className="buttons">
        <button
          className="present"
          onClick={() => {
            onAbsentClick(1);
          }}
          style={buttonStyle}
        >
          Absent
        </button>
      </div>
    </div>
  );
};

export default AbsentButton;
