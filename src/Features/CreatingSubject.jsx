import React from "react";
import Logo from "../components/Logo";

import "../styles/createsub.css";

const CreatingSubject = ({
  subject,
  classesDone,
  attended,
  subjectHandler,
  classesHandler,
  attendedHandler,
  submitHandler,
}) => {
  return (
    <div className="createsub-main">
      <Logo />
      <br />
      <div className="Subject-creation">
        <form action="" className="sub-form" onSubmit={submitHandler}>
          <input
            value={subject}
            onChange={subjectHandler}
            type="text"
            required
            placeholder="name of the subject"
            className="subject-details"
          />
          <input
            type="number"
            required
            value={attended}
            onChange={attendedHandler}
            placeholder="number of classes attended"
            className="subject-details"
          />
          <input
            type="number"
            required
            value={classesDone}
            onChange={classesHandler}
            placeholder="number of classes done"
            className="subject-details"
          />
          <input type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
};

export default CreatingSubject;
