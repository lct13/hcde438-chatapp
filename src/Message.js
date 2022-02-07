import React from "react";
import "./Text.css";
import { useState } from "react";

function Message(props) {
  const text = props.text;

  return (
    <div className='message-bubble'>{text}</div>
  );
}

export default Message