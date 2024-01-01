import React, { useState } from "react";
import LoginPage from "../pages/LoginPage";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const registrationHandler = (e) => {
    navigate("/registration");
  };
  return (
    <div className="login-container">
      <LoginPage
        email={email}
        password={password}
        onchangeEmail={emailHandler}
        onchangePassword={passwordHandler}
        onSubmit={submitHandler}
      />

      <button onClick={registrationHandler}>Create new account</button>
    </div>
  );
};

export default LoginContainer;
