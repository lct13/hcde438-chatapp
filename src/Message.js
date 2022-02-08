import React from "react";
import "./Text.css";
import { useState } from "react";

function Message(props) {
  const text = props.text;
  const name = props.name;

  return (
    <div>
      <p className="message-name">{name}</p>
      <div className='message-bubble'><p>{text}</p></div>
    </div>
  );
}

export default Message