import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import "../styles/nav.css";

const Nav = () => {
    const navigation = useNavigate();

  const CreateSubject = () => {
    navigation("/createsubject");
  };

  return (
    <div className="nav-main">
      <div className="logo">
        <Logo />
      </div>
      <br />
      <div className="pages">
        <p className="page" onClick={CreateSubject}>
          Create
        </p>
      </div>
    </div>
  );
};

export default Nav;
