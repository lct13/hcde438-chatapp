import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput';
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  function sendMsg(text) {
    setMessages([...messages, text]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Chatter</p>
      </header>
      <div className='messages'>
        {messages.map((msg, i)=>{
          setTimeout(()=>{
            window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
          }, 100);
          return <div className='message-bubble' key={i}>{msg}</div>
        })}
      </div>
      <TextInput sendMsg={sendMsg}/>
    </div>
  );
}

export default App;
