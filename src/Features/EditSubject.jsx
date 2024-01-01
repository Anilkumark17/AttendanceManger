// EditSubject.js

import React from 'react';
import Logo from '../components/Logo';
import '../styles/createsub.css';

const EditSubject = ({
  subject,
  subjectHandler,
  classesDone,
  classesHandler,
  attendedHandler,
  attended,
  submitHandler,
}) => {
  return (
    <div className="createsub-main">
      <Logo />
      <br />
      <div className="Subject-creation">
        <form onSubmit={submitHandler} className="sub-form">
          <input
            type="text"
            value={subject}
            required
            onChange={subjectHandler}
            placeholder="Name of the subject"
            className="subject-details"
          />
          <input
            type="number"
            value={classesDone}
            required
            onChange={classesHandler}
            placeholder="Number of classes done"
            className="subject-details"
          />
          <input
            type="number"
            value={attended}
            required
            onChange={attendedHandler}
            placeholder="Number of classes attended"
            className="subject-details"
          />
          <input type="submit" className="submit" value="Update Subject" />
        </form>
      </div>
    </div>
  );
};

export default EditSubject;
