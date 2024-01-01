import React, { useState } from "react";
import CreatingSubject from "../../Features/CreatingSubject";
import supabase from "../../db/SupaBaseClient";
import { useNavigate } from "react-router-dom";

const CSubjectContainer = () => {
  const [subject, setSubject] = useState("");
  const [classesDone, setClassesDone] = useState("");
  const [attended, setAttended] = useState("");

  const navigation = useNavigate();

  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };

  const classesHandler = (e) => {
    setClassesDone(e.target.value);
  };

  const attendedHandler = (e) => {
    setAttended(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log({
      subject: subject,
      classesDone: classesDone,
      attended: attended,
    });

    if (!subject || !classesDone || !attended) {
      console.log("Please fill in the fields correctly");
      return;
    }

    if (parseInt(attended) > parseInt(classesDone)) {
      alert("check the input fields");
    }
    const { data, error } = await supabase
      .from("subject")
      .insert([
        {
          subject: subject,
          Classesdone: classesDone,
          Attended: attended,
        },
      ])
      .select();

    if (error) {
      console.log(error);
    } else if (data) {
      console.log("Data inserted successfully:", data);
      navigation("/");
      setSubject("");
      setClassesDone("");
      setAttended("");
    }
  };

  return (
    <div>
      <CreatingSubject
        subject={subject}
        classesDone={classesDone}
        attended={attended}
        subjectHandler={subjectHandler}
        classesHandler={classesHandler}
        attendedHandler={attendedHandler}
        submitHandler={submitHandler}
      />
    </div>
  );
};

export default CSubjectContainer;
