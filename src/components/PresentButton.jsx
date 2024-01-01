import React from "react";

const PresentButton = ({ onPresentClick }) => {
  const buttonStyle = {
    width: "70px",
    height:'30px',
    border:'none',
    borderRadius:'10px',
    backgroundColor: "#A7DCA5",
  };

  return (
    <div className="present-buttons">
      <div className="buttons">
        <button
          className="present"
          onClick={() => onPresentClick(1)}
          style={buttonStyle}
        >
          present
        </button>
      </div>
    </div>
  );
};

export default PresentButton;
