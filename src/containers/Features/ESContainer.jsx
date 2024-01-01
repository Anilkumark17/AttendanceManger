// ESContainer.js

import React, { useEffect, useState } from "react";
import EditSubject from "../../Features/EditSubject";
import supabase from "../../db/SupaBaseClient";

const ESContainer = () => {
  const [subject, setSubject] = useState("");
  const [classesDone, setClassesDone] = useState("");
  const [attended, setAttended] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("subjects")
        .select()
        .eq("id")
        .single();

      if (data) {
        setSubject(data.subject);
        setAttended(data.Attended);
        setClassesDone(data.Classesdone);
      }

      if (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const submitHandler = async () => {

    const { data, error } = await supabase
      .from("subject")
      .update([
        {
          subject,
          Attended: attended,
          Classesdone: classesDone,
        },
      ])
      .eq("id");

      if(data){
        console.log(data);
      }




    if (error) {
      console.error(error);
    } else {
      console.log("Subject updated successfully");
    }
  };

  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };

  const classesHandler = (e) => {
    setClassesDone(e.target.value);
  };

  const attendedHandler = (e) => {
    setAttended(e.target.value);
  };

  return (
    <div>
      <EditSubject
        subject={subject}
        subjectHandler={subjectHandler}
        classesDone={classesDone}
        classesHandler={classesHandler}
        attendedHandler={attendedHandler}
        attended={attended}
        submitHandler={submitHandler}
      />
    </div>
  );
};

export default ESContainer;
