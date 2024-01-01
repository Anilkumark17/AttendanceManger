import React, { useState, useEffect } from "react";
import supabase from "../../db/SupaBaseClient";
import SubjectDisplay from "../../Features/SubjectDisplay";
import PresentButton from "../../components/PresentButton";
import AbsentButton from "../../components/AbsentButton";
import { Menu } from "../../components/Menu";
import Nav from "../../components/Nav";

import "../../styles/SD.css";

const SDisplayContainer = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("subject").select();

        if (error) {
          console.error("Error fetching data:", error);
          return;
        }
        if (data) {
          setSubjects(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);

  const updating = async (updatedSubject, increasedBy) => {
    const { data, error } = await supabase
      .from("subject")
      .update({
        Attended: parseInt(updatedSubject.Attended) + parseInt(increasedBy),
        Classesdone:
          parseInt(updatedSubject.Classesdone) + parseInt(increasedBy),
      })
      .eq("id", updatedSubject.id);

    if (data) {
      console.log("Fetched data:", data);
    }

    if (error) {
      console.error("Error updating attendance:", error);
      return;
    }

    setSubjects((prevSubjects) => {
      return prevSubjects.map((subject) => {
        if (subject.id === updatedSubject.id) {
          return {
            ...subject,
            Attended: parseInt(subject.Attended || 0) + increasedBy,
            Classesdone: parseInt(subject.Classesdone || 0) + increasedBy,
          };
        }
        return subject;
      });
    });
  };

  const absent = async (updatedSubject, increasedBy) => {
    const { data, error } = await supabase
      .from("subject")
      .update({
        Attended: parseInt(updatedSubject.Attended) - 0,
        Classesdone:
          parseInt(updatedSubject.Classesdone) + parseInt(increasedBy),
      })
      .eq("id", updatedSubject.id);

    if (data) {
      console.log("Fetched data:", data);
    }

    if (error) {
      console.error("Error updating attendance:", error);
      return;
    }

    setSubjects((prevSubjects) => {
      return prevSubjects.map((subject) => {
        if (subject.id === updatedSubject.id) {
          return {
            ...subject,
            Attended: parseInt(subject.Attended || 0) - 0,
            Classesdone: parseInt(subject.Classesdone || 0) + increasedBy,
          };
        }
        return subject;
      });
    });
  };

  const Edit = () => {};

  const deleteSubject = async (subjectId) => {
    const { data, error } = await supabase
      .from("subject")
      .delete()
      .eq("id", subjectId);

    if (data) {
      console.log("Deleted subject:", data);
    }

    if (error) {
      console.error("Error deleting subject:", error);
      return;
    }

    setSubjects((prevSubjects) =>
      prevSubjects.filter((subject) => subject.id !== subjectId)
    );
  };

  console.log(subjects);
  return (
    <div className="sd-main-container">
      <Nav />
      <br />
      {subjects.map((subject) => {
        const attended = subject.Attended || 0;
        const classDone = subject.Classesdone || 0;
        const attendancePercentage = Math.round(
          (attended / classDone) * 100 || 0
        );

        return (
          <div key={subject.id} className="sd-flex">
            <div className="sd-container">
              <SubjectDisplay
                subject={subject.subject}
                attended={attended}
                totalClasses={classDone}
                attendancePercentage={attendancePercentage}
              />
              <Menu
                deleteSubject={deleteSubject}
                Edit={Edit}
                subjectId={subject.id}
              />
              <br />
              <div className="pa-buttons">
                <PresentButton
                  onPresentClick={async (increasedBy) =>
                    await updating(subject, increasedBy)
                  }
                />
                <AbsentButton
                  onAbsentClick={async (increasedBy) =>
                    await absent(subject, increasedBy)
                  }
                />
              </div>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default SDisplayContainer;
