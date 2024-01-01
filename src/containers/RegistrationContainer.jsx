import React, { useState } from "react";
import RegistrationPage from "../pages/RegistrationPage";
import supabase from "../db/SupaBaseClient";
import { useNavigate } from "react-router-dom";

const RegistationContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [semister, setSemester] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const navigation = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // const branchHandler = (e) => {
  //   setBranch(e.target.value);
  // };

  const semisteredHandler = (e) => {
    setSemester(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, name);
    if (!name || !email || !password) {
      setFormError("Please fill in the fields correctly");
      return;
    }

    const { data: existingUsers, error: fetchError } = await supabase
      .from("Proffesor")
      .select("email, password,name")
      .eq("email", email);

    if (fetchError) {
      console.log(fetchError);
      return;
    }

    if (existingUsers && existingUsers.length > 0) {
      console.log("Already exists");
      setFormError("Email or PIN already exists. Please use a different one.");
      return;
    }

    const { data, error } = await supabase
      .from("Proffesor")
      .insert([
        {
          name: name,
          email: email,
          password: password,
          semister: semister,
        },
      ])
      .select();

    if (error) {
      console.log(error);
    } else if (data) {
      console.log("Data inserted successfully:", data);
      setFormError(null);
      setEmail("");
      setPassword("");
      setName("");
      setSemester("");
    }

    navigation("/createsubject");
  };
  return (
    <div className="LoginContainer-main">
      <RegistrationPage
        name={name}
        email={email}
        password={password}
        semister={semister}
        onNameChange={handleNameChange}
        onEmailChange={handleEmailChange}
        onSemesterChange={semisteredHandler}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
        onFormError={formError}
      />
    </div>
  );
};

export default RegistationContainer;
