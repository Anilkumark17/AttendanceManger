import React from "react";
import { useNavigate } from "react-router-dom";

const CreateSubject = () => {
  const navigation = useNavigate();

  const clickHandler = () => {
    navigation('/createsubject');
  };

  const buttonStyle = {
    color: 'green',
  };

  return (
    <div className="Create-subject">
      <button className="subject" onClick={clickHandler} style={buttonStyle}>
        Create Subject
      </button>
    </div>
  );
};

export default CreateSubject;
