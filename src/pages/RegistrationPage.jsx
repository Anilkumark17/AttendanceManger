import React from "react";

const RegistrationPage = ({
  name,
  email,
  password,
  semister,
  onSemesterChange,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onFormError,
}) => {
  return (
    <div className="register_form_container">
      <form onSubmit={onSubmit} className="register_form">
        <h2>Register</h2>
        <div className="input_group">
          <input
            type="text"
            placeholder="Name of the student"
            className="input_text"
            autoComplete="off"
            required={true}
            value={name}
            onChange={onNameChange}
          />
        </div>

        <div className="input_group">
          <input
            type="text"
            placeholder="Semester"
            className="input_text"
            autoComplete="off"
            required={true}
            value={semister}
            onChange={onSemesterChange}
          />
        </div>

        <div className="input_group">
          <i className="fa fa-envelope"></i>
          <input
            type="email"
            placeholder="Email"
            className="input_text"
            autoComplete="off"
            required={true}
            value={email}
            onChange={onEmailChange}
          />
        </div>

        <div className="input_group">
          <i className="fa fa-unlock-alt"></i>
          <input
            value={password}
            required={true}
            type="password"
            placeholder="Password"
            className="input_text"
            autoComplete="off"
            onChange={onPasswordChange}
          />
        </div>
        <br />
        <div className="for-form-error">{onFormError}</div>
        <div className="button_group" id="register_button">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
