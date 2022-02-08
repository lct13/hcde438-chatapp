import React from "react";
import "./Text.css";
import { useState } from "react";
import { FiCheck, FiUser } from 'react-icons/fi';

function NamePicker(props) {
  const { pickName } = props;
  const [editName, setEditName] = useState();

  function enableEdit() {
    document.getElementsByClassName("check-button")[0].classList.remove("hide");
    document.getElementsByClassName("name-input")[0].classList.remove("hide");
    document.getElementsByClassName("user-button")[0].classList.add("hide");
    document.getElementsByClassName("name-display")[0].classList.add("hide");

  }
  function setName() {
    pickName(editName);
    document.getElementsByClassName("name-display")[0].textContent=editName;
    document.getElementsByClassName("check-button")[0].classList.add("hide");
    document.getElementsByClassName("name-input")[0].classList.add("hide");
    document.getElementsByClassName("user-button")[0].classList.remove("hide");
    document.getElementsByClassName("name-display")[0].classList.remove("hide");
  }

  return (
    <div className='name-box'>
      <p className="name-display"></p>
      <button className='user-button'
        onClick={enableEdit}>
        <FiUser className="user"/>
      </button>

      <input 
        class='name-input hide' 
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
      />
      <button class='check-button hide' 
        onClick={setName}>
        <FiCheck className="check"/>
      </button>
    </div>
  );
}

export default NamePicker;