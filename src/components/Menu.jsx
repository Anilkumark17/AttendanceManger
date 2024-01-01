import React, { useState } from "react";
import { CreditCardOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";


export const Menu = ({ deleteSubject, subjectId }) => {
  const [display, setModel] = useState(false);

  const navigation = useNavigate();


  const toggle = () => {
    setModel((prevDisplay) => !prevDisplay);
  };

  const handleDelete = () => {
    deleteSubject(subjectId);
    toggle();
  };

  const Edit=()=>{
    navigation('/editSubject');
  }

  return (
    <div>
      <CreditCardOutlined onClick={toggle} />
      {display && (
        <div className="options-main">
          <ul className="options">
            <li className="option">
              <button className="option-select" onClick={handleDelete}>
                Delete
              </button>
            </li>
            <li className="option">
              <button className="option-select" onClick={Edit}>Edit</button>
            </li>
            <li className="option">
                <button className="option-select">Remainder</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
