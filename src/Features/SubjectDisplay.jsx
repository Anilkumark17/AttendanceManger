import React from "react";
import "../styles/subject-display.css";


const SubjectDisplay = ({
  subject,
  attended,
  totalClasses,
  attendancePercentage,
}) => {
  return (
    <>
    
      <div className="display-subject">
        <div className="subject-container">
          <div className="subject-dis">
            <h3 className="subject-name">{subject}</h3>
            <p className="classes">
              {attended}/{totalClasses}
            </p>
          </div>

          <div className="attendancedisplay">
            <p>{attendancePercentage}%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectDisplay;
