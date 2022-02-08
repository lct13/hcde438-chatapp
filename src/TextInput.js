import React from "react";
import { FiSend, FiCamera } from 'react-icons/fi';
import "./Text.css";
import { useState } from "react";

function TextInput(props) {
  const { sendMsg } = props;
  const [text, setText] = useState('');

  //call when send button clicked
  function send () {
    sendMsg(text);  //this function was passed as props
    setText("");
  }
  return (
    <footer className="footer">
      <div className='message-box'>
        <button className="camera-button"
          onClick={props.showCamera}
          style={{left:10, right:'auto'}}>
          <FiCamera style={{height:15, width:15}} />
        </button>
        <input 
          className='message-input' 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='message-button' 
          onClick={send}>
          &#8593;
        </button>
      </div>
    </footer>
  );
}

export default TextInput;