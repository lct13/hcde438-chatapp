import React from "react";
import "./Text.css";
import { useState } from "react";

function TextInput(props) {
  const { sendMsg } = props;
  const [text, setText] = useState('');
  function send () {
    sendMsg(text);
    setText("");
  }
  return (
    <footer className="footer">
      <div className='message-box'>
        <input 
          className='message-input' 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button 
          className='message-button' 
          onClick={send}>
          &#8593;
        </button>
      </div>
    </footer>
  );
}

export default TextInput;